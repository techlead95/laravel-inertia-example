<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Frame;
use App\Models\FrameEdge;
use App\Models\FrameBrand;
use Illuminate\Http\Request;
use App\Models\FrameMaterial;
use App\Http\Controllers\Controller;
use App\Models\FrameAddon;
use App\Models\FrameCollection;
use App\Models\FrameDefaultGroup;
use App\Models\Shield;
use App\Models\ShieldColor;
use Illuminate\Support\Facades\Session;

class FrameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $edges = FrameEdge::all();
        $materials = FrameMaterial::all();
        $brands = FrameBrand::all();
        $collections = FrameCollection::all();
        $groups = FrameDefaultGroup::all();
        $frames = Frame::with('variations')->get();
        $shields = Shield::all();
        $shieldColors = ShieldColor::all();
        $addons = FrameAddon::all();

        return Inertia::render('Admin/Frame/Frame', compact('edges', 'materials', 'brands', 'collections', 'groups', 'frames', 'shields', 'shieldColors', 'addons'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fr_frame_name' => 'required',
            'fr_brand' => 'required',
            'fr_collection' => 'required',
            'fr_frame_group' => 'required',
            'fr_edge' => 'nullable',
            'fr_material' => 'nullable',
            'fr_min_edge' => 'nullable',
            'fr_base_curve_min' => 'nullable',
            'fr_base_curve_max' => 'nullable',
            'fr_min_near_pd' => 'nullable',
            'fr_non_conductive' => 'nullable',
            'fr_tight_fit' => 'nullable',
            'fr_wrap' => 'nullable',
            'fr_notes' => 'nullable',
        ]);

        Frame::create($validated);

        Session::flash('success', 'Frame created successfully');

        return to_route('admin.frame.index');
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
            'fr_frame_name' => 'required',
            'fr_brand' => 'required',
            'fr_collection' => 'required',
            'fr_frame_group' => 'required',
            'fr_edge' => 'nullable',
            'fr_material' => 'nullable',
            'fr_min_edge' => 'nullable',
            'fr_base_curve_min' => 'nullable',
            'fr_base_curve_max' => 'nullable',
            'fr_min_near_pd' => 'nullable',
            'fr_non_conductive' => 'nullable',
            'fr_tight_fit' => 'nullable',
            'fr_wrap' => 'nullable',
            'fr_notes' => 'nullable',
        ]);

        Frame::find($id)->update($validated);

        Session::flash('success', 'Frame updated successfully');

        return to_route('admin.frame.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $frame = Frame::find($id);

        if (!$frame) {
            return response()->json(['error' => 'Frame not found'], 404);
        }

        $frame->delete();
    }

    public function catalog()
    {
        return Inertia::render('Admin/Frame/FrameCatalog');
    }
}
