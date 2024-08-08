<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->search;
        //$users = User::when($search, function ($query, $search) {
        $users = User::when($search, function ($query, $search) {
            return $query->where('email', 'like', "%$search%")
                ->orWhere('name', 'like', "%$search%");
        })->paginate();
        //dd($users);

        return Inertia::render('Admin/Users/UserList', compact('users', 'search'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return inertia()->render('Admin/Users/CreateUser');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->merge(['name' => $request->input('first_name') . ' ' . $request->input('last_name')]);

        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'salesforce_id' => 'nullable',
            'business_name' => 'nullable',
            'address1' => 'nullable',
            'address2' => 'nullable',
            'po_box' => 'nullable',
            'city' => 'nullable',
            'state' => 'nullable',
            'zip' => 'nullable',
            'country' => 'nullable',
            'nick_name' => 'nullable',
            'is_admin' => 'nullable',
        ]);

        $user = User::Create(array_merge($validated));
        //dd($user);

        return to_route('admin.users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $user = User::find($id);
        $shipTos = $user->shipTos;

        //dd($shipTos);

        return Inertia::render('Admin/Users/EditUser', compact('user', 'shipTos'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $request->merge(['name' => $request->input('first_name') . ' ' . $request->input('last_name')]);

        $validated = $request->validate([
            'first_name' => 'required',
            'last_name' => 'required',
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
            'ship_to_account' => 'nullable',
            'ship_to_id' => 'nullable|integer',
            'business_name' => 'nullable',
            'address1' => 'nullable',
            'address2' => 'nullable',
            'po_box' => 'nullable',
            'city' => 'nullable',
            'state' => 'nullable',
            'zip' => 'nullable',
            'country' => 'nullable',
            'nick_name' => 'nullable',
            'is_admin' => 'nullable',
        ]);

        $user->update(array_merge($validated, $request->except(['name', 'email'])));
        //dd($user);

        return to_route('admin.users.index');
    }

    public function ajaxUpdate(Request $request, string $id)
    {
        $user = User::find($id);

        $user->update($request->all());

        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $user = User::find($id);

        $user->delete();

        return to_route('admin.users.index');
    }
}
