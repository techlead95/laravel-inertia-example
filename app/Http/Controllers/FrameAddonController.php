<?php

namespace App\Http\Controllers;

use App\Models\FrameAddon;
use Illuminate\Http\Request;

class FrameAddonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fa_UPC' => 'nullable',
            'fa_side_shield_type' => 'nullable',
            'fa_side_shield_color' => 'nullable',
            'fa_legacy_clc' => 'nullable',
            'fa_legacy_ss_code' => 'nullable',
            'fa_dvi_services_code' => 'nullable',
            'fa_dvi_service_code' => 'nullable',
            'fa_default_case' => 'nullable',
        ]);

        $frameAddon = FrameAddon::create($validated);

        return response()->json($frameAddon, 201);
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'fa_UPC' => 'nullable',
            'fa_side_shield_type' => 'nullable',
            'fa_side_shield_color' => 'nullable',
            'fa_legacy_clc' => 'nullable',
            'fa_legacy_ss_code' => 'nullable',
            'fa_dvi_services_code' => 'nullable',
            'fa_dvi_service_code' => 'nullable',
            'fa_default_case' => 'nullable',
        ]);

        $frameAddon = FrameAddon::where('id', $id)->update($validated);

        if ($frameAddon) {
            return response()->json($frameAddon, 200);
        } else {
            return response()->json(['message' => 'No FrameAddon updated'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $frameAddon = FrameAddon::find($id);

        if (!$frameAddon) {
            return response()->json(['error' => 'Frame add-on not found'], 404);
        }

        $frameAddon->delete();
    }
}
