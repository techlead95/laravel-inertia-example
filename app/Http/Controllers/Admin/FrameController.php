<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Frame;
use App\Models\FrameEdge;
use Illuminate\Http\Request;
use App\Models\FrameMaterial;
use App\Http\Controllers\Controller;

class FrameController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $edges = FrameEdge::all();
        $materials = FrameMaterial::all();
        $frames = Frame::all();
        
        return Inertia::render('Admin/Frame/Frame', compact('edges', 'materials', 'frames'));
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
