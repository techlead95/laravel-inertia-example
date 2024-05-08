<?php

namespace App\Http\Controllers;

use App\Models\FrameOffloadAvailability;
use Illuminate\Http\Request;

class FrameOffloadAvailabilityController extends Controller
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
            'fo_vendor' => 'nullable',
            'fo_vendor_allowed' => 'nullable',
            'fo_auto_offload' => 'nullable',
        ]);

        $validated['fo_frame_id'] = intval($frameId);

        $frameOffloadAvailability = FrameOffloadAvailability::create($validated);

        return response()->json($frameOffloadAvailability, 201);
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
            'fo_vendor' => 'nullable',
            'fo_vendor_allowed' => 'nullable',
            'fo_auto_offload' => 'nullable',
        ]);

        $frameOffloadAvailability = FrameOffloadAvailability::where('id', $id)->update($validated);

        if ($frameOffloadAvailability) {
            return response()->json($frameOffloadAvailability, 200);
        } else {
            return response()->json(['message' => 'No Frame Offload Availability updated'], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $frameId, string $id)
    {
        $frameOffloadAvailability = FrameOffloadAvailability::find($id);

        if (!$frameOffloadAvailability) {
            return response()->json(['error' => 'Frame offload availability not found'], 404);
        }

        $frameOffloadAvailability->delete();
    }
}
