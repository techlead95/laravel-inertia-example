<?php

namespace App\Http\Controllers;

use App\Models\ShipTo;
use App\Models\User;
use Illuminate\Http\Request;

class ShipToController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($user_id)
    {
        $shiptos = ShipTo::where('user_id', $user_id)->get();
        //$shiptos = ShipTo::all();

        $user = User::find($user_id);
        //$shiptos = $user->shiptos();
        //dd($shiptos, $user);
        return inertia()->render('Admin/ShipTos/ShipToList', compact('shiptos', 'user'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($user_id)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store($user_id, Request $request)
    {
        $user = User::find($user_id);
        $validated = $request->validate([
            'st_account' => 'required',
            'st_name' => 'required',
            'st_order_by' => 'nullable',
            'st_order_by_name' => 'nullable',
            'st_bill_to' => 'nullable',
            'st_bill_to_name' => 'nullable',
        ]);

        $shipto = $user->shiptos()->create($validated);
        $shiptos = ShipTo::where('user_id', $user_id)->get();
        return inertia()->render('Admin/ShipTos/ShipToList', compact('shiptos', 'user'));
    }

    /**
     * Display the specified resource.
     */
    public function show(ShipTo $shipTo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($user_id, $id)
    {

        $user = User::find($user_id);
        $shipTo = ShipTo::find($id);
        //dd($id, $user, $shipTo);

        return inertia()->render('Admin/ShipTos/EditShipTo', compact('shipTo', 'user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($user_id, Request $request, $id)
    {

        $user = User::find($user_id);
        $shipTo = ShipTo::find($id);
        $validated = $request->validate([
            'st_account' => 'required',
            'st_name' => 'required',
            'st_order_by' => 'nullable',
            'st_order_by_name' => 'nullable',
            'st_bill_to' => 'nullable',
            'st_bill_to_name' => 'nullable',
        ]);
        //ShipTo::where('id', $id)->update($validated);
        $shipTo->update($validated);
        $shiptos = ShipTo::where('user_id', $user_id)->get();
        return inertia()->render('Admin/ShipTos/ShipToList', compact('shiptos', 'user'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($user_id, $id)
    {
        $user = User::find($user_id);
        $shipTo = ShipTo::find($id);

        $shipTo->delete();

        $shiptos = ShipTo::where('user_id', $user_id)->get();
        return inertia()->render('Admin/ShipTos/ShipToList', compact('shiptos', 'user'));
    }
}
