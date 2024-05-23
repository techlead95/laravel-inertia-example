<?php

namespace App\Http\Controllers;

use App\Models\Tint;
use Illuminate\Http\Request;

class TintController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tints = Tint::all();

        return inertia()->render('Admin/Tint/TintList', compact('tints'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Admin/Tint/CreateTint');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $request->merge(['ti_setup_by' => $user->name]);
        $validated = $request->validate([
            'ti_setup_by' => 'required',
            'ti_color' => 'required',
            'ti_group' => 'required',
            'ti_lower_range' => 'required',
            'ti_upper_range' => 'required',
            'ti_default_percent' => 'required',
            'ti_o1_translation' => 'nullable',
            'ti_dvi_tint_drop' => 'nullable',
            'ti_dvi_tint_color' => 'nullable',
            'ti_o2_coating_add_code' => 'nullable',
            'ti_o1_coating_add_code' => 'nullable',
        ]);

        Tint::create($validated);

        return to_route('admin.tint.index');
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
        $tint = Tint::find($id);

        return inertia()->render('Admin/Tint/EditTint', compact('tint'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = $request->user();
        $request->merge(['ti_last_modified_by' => $user->name]);
        $validated = $request->validate([
            'ti_last_modified_by' => 'required',
            'ti_color' => 'required',
            'ti_group' => 'required',
            'ti_lower_range' => 'required',
            'ti_upper_range' => 'required',
            'ti_default_percent' => 'required',
            'ti_o1_translation' => 'nullable',
            'ti_dvi_tint_drop' => 'nullable',
            'ti_dvi_tint_color' => 'nullable',
            'ti_o2_coating_add_code' => 'nullable',
            'ti_o1_coating_add_code' => 'nullable',
        ]);

        Tint::where('id', $id)->update($validated);

        return to_route('admin.tint.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Tint::where('id', $id)->delete();

        return to_route('admin.tint.index');
    }
}
