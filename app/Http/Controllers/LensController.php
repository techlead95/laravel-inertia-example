<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\LensStyle;
use App\Models\LensMaterial;
use App\Models\LensCoating;
use Illuminate\Http\Request;
use App\Models\Lens;
use Illuminate\Support\Facades\Session;
use App\Models\LensColor;

class LensController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $style = request()->style;
        $material = request()->material;
        $color = request()->color;

        $lenses = Lens::when($style, function ($query, $style) {
            return $query->where('le_lens_style', 'like', "%$style%");
        })->when($material, function ($query, $material) {
            return $query->where('le_lens_mat', 'like', "%$material%");
        })->when($color, function ($query, $color) {
            return $query->where('le_lens_col', 'like', "%$color%");
        })->paginate();

        return inertia()->render('Admin/Lens/LensList', compact('lenses', 'style', 'material', 'color'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $styles = LensStyle::all();
        $materials = LensMaterial::all();
        $coatings = LensCoating::all();
        $lensColors = LensColor::all();

        return Inertia::render('Admin/Lens/CreateLens', compact('styles', 'materials', 'coatings', 'lensColors'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $validated = $request->validate([
            'le_lens_mat' => 'required',
            'le_lens_col' => 'required',
            'le_lens_style' => 'required',
            'le_optic_translation' => 'nullable',
            'le_dvi_lens_style' => 'nullable',
            'le_dvi_mat' => 'nullable',
            'le_dvi_color' => 'nullable',
            'le_o2_lens_style_add_code' => 'nullable',
            'le_o2_material_add_code' => 'nullable',
            'le_o2_color_add_code' => 'nullable',
            'le_o1_lens_add_code' => 'nullable',
            'le_o1_material_add_code' => 'nullable',
            'le_o1_color_add_code' => 'nullable',
            'le_minimun_seg' => 'nullable',
            'le_upper_add' => 'required',
            'le_ocht' => 'required',

        ]);

        $lens = Lens::create($validated);

        $coatings = $request->input('le_coatings');
        if ($coatings) {
            $coatings = array_map("intval", $coatings);
            $lens->coatings()->attach($coatings);
        }

        //dd($request, $coatings);



        Session::flash('success', 'Lens created successfully');

        return to_route('admin.lens.index');
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
        $lens = Lens::find($id);

        $styles = LensStyle::all();
        $materials = LensMaterial::all();
        $coatings = LensCoating::all();
        $lensColors = LensColor::all();

        //dd($lens->coatings());
        //$selectCoatings = $lens->coatings()->allRelatedIds()->toArray();
        $selectCoatings = $lens->coatings()->allRelatedIds();
        //dd($selectCoatings);
        //$selectCoatings = array_map("strval", $selectCoatings);

        return inertia()->render('Admin/Lens/EditLens', compact('styles', 'materials', 'coatings', 'lens', 'selectCoatings', 'lensColors'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //dd($request);

        $validated = $request->validate([
            'le_lens_mat' => 'required',
            'le_lens_col' => 'required',
            'le_lens_style' => 'required',
            'le_optic_translation' => 'nullable',
            'le_dvi_lens_style' => 'nullable',
            'le_dvi_mat' => 'nullable',
            'le_dvi_color' => 'nullable',
            'le_o2_lens_style_add_code' => 'nullable',
            'le_o2_material_add_code' => 'nullable',
            'le_o2_color_add_code' => 'nullable',
            'le_o1_lens_add_code' => 'nullable',
            'le_o1_material_add_code' => 'nullable',
            'le_o1_color_add_code' => 'nullable',
            'le_minimun_seg' => 'nullable',
            'le_upper_add' => 'required',
            'le_ocht' => 'required',

        ]);

        $lens =  Lens::find($id);
        $lens->update($validated);

        $coatings = $request->input('le_coatings');
        $coatings = array_map("intval", $coatings);
        //dd($lens);
        $lens->coatings()->sync($coatings);


        Session::flash('success', 'Lens updated successfully');

        return to_route('admin.lens.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $lens =  Lens::find($id);
        $lens->delete();
        return to_route('admin.lens.index');
    }

    public function catalog()
    {
        return Inertia::render('Admin/Lens/LensCatalog');
    }
}
