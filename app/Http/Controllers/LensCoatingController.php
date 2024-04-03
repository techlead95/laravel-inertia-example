<?php

namespace App\Http\Controllers;

use App\Models\LensCoating;
use Illuminate\Http\Request;

class LensCoatingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $coatings = LensCoating::all();
        return inertia()->render('Admin/Coating/CoatingList', compact('coatings'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia()->render('Admin/Coating/CreateCoating');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'lc_lens_coating' => 'required',
            'lc_coating_group' => 'required',
            'lc_o1_translation' => 'nullable',
            'lc_dvi_translation' => 'nullable',
            'lc_o2_add_code' => 'nullable',
            'lc_o1_add_code' => 'nullable',
        ]);

        LensCoating::create($validated);

        return to_route('admin.coatings.index');
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
        $coating = LensCoating::find($id);

        return inertia()->render('Admin/Coating/EditCoating', compact('coating'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'lc_lens_coating' => 'required',
            'lc_coating_group' => 'required',
            'lc_o1_translation' => 'nullable',
            'lc_dvi_translation' => 'nullable',
            'lc_o2_add_code' => 'nullable',
            'lc_o1_add_code' => 'nullable',
        ]);

        LensCoating::where('id', $id)->update($validated);

        return to_route('admin.coatings.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $coating = LensCoating::find($id);

        $coating->delete();

        return to_route('admin.coatings.index');
    }
}
