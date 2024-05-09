<?php

namespace App\Http\Controllers;

use App\Models\FrameVariation;
use Illuminate\Http\Request;

class FrameVariationController extends Controller
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
    public function store(Request $request, string $frameId)
    {
        $validated = $request->validate([
            'fv_eyesize' => 'nullable',
            'fv_front_bridge' => 'nullable',
            'fv_temple_type' => 'nullable',
            'fv_temple_size' => 'nullable',
            'fv_frame_color' => 'nullable',
            'fv_A' => 'nullable',
            'fv_B' => 'nullable',
            'fv_ED' => 'nullable',
            'fv_DBL' => 'nullable',
            'fv_non_dig_default_seg' => 'nullable',
            'fv_dig_default_seg' => 'nullable',

            'fv_optic_legacy' => 'nullable',
            'fv_o1_add_code' => 'nullable',
            'fv_o1_stock_code' => 'nullable',
            'fv_o2_add_code' => 'nullable',
            'fv_o2_stock_code' => 'nullable',

            'fv_dvi_frm_mfr' => 'nullable',
            'fv_dvi_frm_style' => 'nullable',
            'fv_dvi_frm_color' => 'nullable',
            'fv_dvi_frm_eye' => 'nullable',
            'fv_dvi_frm_bridge' => 'nullable',
            'fv_dvi_frm_temple' => 'nullable',
            'fv_dvi_frm_tpl_type' => 'nullable',
        ]);

        $validated['fv_frame_id'] = intval($frameId);

        $frameVariation = FrameVariation::create($validated);

        return response()->json($frameVariation, 201);
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
    public function update(Request $request, string $frameId, string $id)
    {
        $validated = $request->validate([
            'fv_eyesize' => 'nullable',
            'fv_front_bridge' => 'nullable',
            'fv_temple_type' => 'nullable',
            'fv_temple_size' => 'nullable',
            'fv_frame_color' => 'nullable',
            'fv_A' => 'nullable',
            'fv_B' => 'nullable',
            'fv_ED' => 'nullable',
            'fv_DBL' => 'nullable',
            'fv_non_dig_default_seg' => 'nullable',
            'fv_dig_default_seg' => 'nullable',

            'fv_optic_legacy' => 'nullable',
            'fv_o1_add_code' => 'nullable',
            'fv_o1_stock_code' => 'nullable',
            'fv_o2_add_code' => 'nullable',
            'fv_o2_stock_code' => 'nullable',

            'fv_dvi_frm_mfr' => 'nullable',
            'fv_dvi_frm_style' => 'nullable',
            'fv_dvi_frm_color' => 'nullable',
            'fv_dvi_frm_eye' => 'nullable',
            'fv_dvi_frm_bridge' => 'nullable',
            'fv_dvi_frm_temple' => 'nullable',
            'fv_dvi_frm_tpl_type' => 'nullable',
        ]);

        $frameVariation = FrameVariation::where('id', $id)->update($validated);

        if ($frameVariation) {
            return response()->json($frameVariation, 200);
        } else {
            return response()->json(['message' => 'No Frame Variation updated'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $frameId, string $id)
    {
        $frameVariation = FrameVariation::find($id);

        if (!$frameVariation) {
            return response()->json(['error' => 'Frame add-on not found'], 404);
        }

        $frameVariation->delete();
    }
}
