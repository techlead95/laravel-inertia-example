<?php

namespace App\Http\Controllers;

use App\Models\Misc;
use Illuminate\Http\Request;

class MiscController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->search;

        $miscs = Misc::when($search, function ($query, $search) {
            return $query->where('mi_item_name', 'like', "%$search%")
                ->orWhere('mi_o1_translation', 'like', "%$search%")
                ->orWhere('mi_dvi_translation', 'like', "%$search%")
                ->orWhere('mi_o2_add_code', 'like', "%$search%")
                ->orWhere('mi_o1_add_code', 'like', "%$search%");
        })->paginate();

        return inertia()->render('Admin/Misc/MiscList', compact('miscs', 'search'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Admin/Misc/CreateMisc');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $request->merge(['mi_setup_by' => $user->name]);
        //dd($request);
        $validated = $request->validate([
            'mi_setup_by' => 'required',
            'mi_item_name' => 'required',
            'mi_o1_translation' => 'required',
            'mi_dvi_translation' => 'required',
            'mi_o2_add_code' => 'required',
            'mi_o1_add_code' => 'required',
        ]);

        Misc::create($validated);

        return to_route('admin.misc.index');
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
        $misc = Misc::find($id);

        return inertia()->render('Admin/Misc/EditMisc', compact('misc'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = $request->user();
        $request->merge(['mi_modified_by' => $user->name]);
        $validated = $request->validate([
            'mi_modified_by' => 'required',
            'mi_item_name' => 'required',
            'mi_o1_translation' => 'required',
            'mi_dvi_translation' => 'required',
            'mi_o2_add_code' => 'required',
            'mi_o1_add_code' => 'required',
        ]);

        Misc::where('id', $id)->update($validated);

        return to_route('admin.misc.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Misc::find($id)->delete();

        return to_route('admin.misc.index');
    }
}
