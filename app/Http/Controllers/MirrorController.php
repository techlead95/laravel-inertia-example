<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Mirror;
use Illuminate\Http\Request;
use App\Models\LensCoating;
use Illuminate\Support\Facades\Session;

class MirrorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $mirrors = Mirror::paginate();

        return inertia()->render('Admin/Mirror/MirrorList', compact('mirrors'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $coatings = LensCoating::all();
        return Inertia::render('Admin/Mirror/CreateMirror', compact('coatings'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user = $request->user();
        $request->merge(['mr_setup_by' => $user->name]);
        $validated = $request->validate([
            'mr_setup_by' => 'required',
            'mr_mirror' => 'required',
            'mr_o1_translation' => 'nullable',
            'mr_dvi_translation' => 'nullable',
            'mr_o2_add_code' => 'nullable',
            'mr_o1_add_code' => 'nullable',
            'mr_setup_by' => 'nullable',
            'mr_last_modified_by' => 'nullable',
        ]);


        $mirror = Mirror::create($validated);
        $coatings = $request->input('mr_coatings');
        if ($coatings) {
            $coatings = array_map("intval", $coatings);
            $mirror->coatings()->attach($coatings);
        }


        Session::flash('success', 'Mirror created successfully');

        return to_route('admin.mirror.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Mirror $mirror)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mirror $mirror)
    {
        $coatings = LensCoating::all();

        $selectCoatings = $mirror->coatings()->allRelatedIds();
        return inertia()->render('Admin/Mirror/EditMirror', compact('coatings', 'mirror', 'selectCoatings'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mirror $mirror)
    {
        $user = $request->user();
        $request->merge(['mr_last_modified_by' => $user->name]);

        $validated = $request->validate([
            'mr_last_modified_by' => 'required',
            'mr_mirror' => 'required',
            'mr_o1_translation' => 'nullable',
            'mr_dvi_translation' => 'nullable',
            'mr_o2_add_code' => 'nullable',
            'mr_o1_add_code' => 'nullable',
            'mr_setup_by' => 'nullable',
            'mr_last_modified_by' => 'nullable',
        ]);

        $mirror->update($validated);

        $coatings = $request->input('mr_coatings');

        //dd($coatings);
        $coatings = array_map("intval", $coatings);
        $mirror->coatings()->sync($coatings);

        Session::flash('success', 'Mirror updated successfully');

        return to_route('admin.mirror.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mirror $mirror)
    {

        $mirror->delete();
        return to_route('admin.mirror.index');
    }
}
