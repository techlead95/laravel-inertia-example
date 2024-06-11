<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Frame;
use App\Models\FrameEdge;
use App\Models\FrameBrand;
use Illuminate\Http\Request;
use App\Models\FrameMaterial;
use App\Http\Controllers\Controller;
use App\Models\FrameCollection;
use App\Models\FrameDefaultGroup;
use App\Models\LensMaterial;
use App\Models\LensStyle;
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
        $frames = Frame::paginate();

        return inertia()->render('Admin/Frame/FrameList', compact('frames'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $edges = FrameEdge::all();
        $materials = FrameMaterial::all();
        $brands = FrameBrand::all();
        $collections = FrameCollection::all();
        $groups = FrameDefaultGroup::all();
        $shields = Shield::all();
        $shieldColors = ShieldColor::all();

        return Inertia::render('Admin/Frame/CreateFrame', compact('edges', 'materials', 'brands', 'collections', 'groups', 'shields', 'shieldColors'));
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
        $edges = FrameEdge::all();
        $materials = FrameMaterial::all();
        $brands = FrameBrand::all();
        $collections = FrameCollection::all();
        $groups = FrameDefaultGroup::all();
        $shields = Shield::all();
        $shieldColors = ShieldColor::all();
        $lensMaterials = LensMaterial::all();
        $lensStyles = LensStyle::all();
        $frame = Frame::with('variations', 'addons', 'lensMaterialLimitations', 'lensStyleLimitations', 'offloadAvailabilities')->find($id);

        return Inertia::render('Admin/Frame/EditFrame', compact(
            'edges',
            'materials',
            'brands',
            'collections',
            'groups',
            'shields',
            'shieldColors',
            'lensMaterials',
            'lensStyles',
            'frame'
        ));
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

        return to_route('admin.frame.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $frame = Frame::find($id);

        if ($frame) {
            $frame->variations()->delete();
            $frame->delete();
        }

        return to_route('admin.frame.index');
    }

    public function catalog()
    {
        return Inertia::render('Admin/Frame/FrameCatalog');
    }

    public function updateLensMaterialLimitation(Request $request, $frameId)
    {
        $frame = Frame::findOrFail($frameId);
        $frame->lensMaterialLimitations()->sync($request->limitations);
    }

    public function updateLensStyleLimitation(Request $request, $frameId)
    {
        $frame = Frame::findOrFail($frameId);
        $frame->lensStyleLimitations()->sync($request->limitations);
    }
}
