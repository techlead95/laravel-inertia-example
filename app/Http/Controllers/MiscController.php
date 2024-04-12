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
        $miscs = Misc::all();

        return inertia()->render('Admin/Misc/MiscList', compact('miscs'));
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
        $validated = $request->validate([
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
        $validated = $request->validate([
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
