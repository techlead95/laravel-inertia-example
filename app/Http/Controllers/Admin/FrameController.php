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

        return Inertia::render('Admin/Frame/Frame', compact('edges', 'materials', 'brands', 'collections', 'groups', 'frames'));
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
        //
    }

    public function catalog()
    {
        return Inertia::render('Admin/Frame/FrameCatalog');
    }
}
