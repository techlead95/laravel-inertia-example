<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\Frame;
use App\Models\FrameVariation;
use App\Models\Lens;
use App\Models\Tint;
use App\Models\Misc;
use App\Models\LensCoating;
use App\Models\OrderTracking;
use App\Http\Controllers\DB;
use App\Models\LensMaterial;
use App\Models\LensStyle;
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Session;
use Illuminate\Database\Eloquent\Builder;
use PhpParser\Node\Stmt\For_;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $search = request()->search;
        $startDate = request()->startDate;
        $endDate = request()->endDate;
        //$orders = Order::when($search, function ($query, $search) {
        $orders = Order::where('user_id', $user->id)->when($search, function ($query, $search) {
            return $query->where('or_portal_order_number', 'like', '%' . $search . '%')
                ->orWhere('or_emp_name_first', 'like', '%' . $search . '%')
                ->orWhere('or_emp_name_last', 'like', '%' . $search . '%');
        })->when($startDate, function ($query, $startDate) {
            return $query->where('created_at', '>=', $startDate);
        })->when($endDate, function ($query, $endDate) {
            return $query->where('created_at', '<=', $endDate);
        })->get();

        return inertia()->render('Orders/OrderList', compact('search', 'startDate', 'endDate', 'orders'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $frameVariations = FrameVariation::with('frame.addons')->get();
        //$lenses = Lens::with('coatings')->get();
        $lenses = Lens::all();
        //dd($lenses);
        $tints = Tint::all();
        $miscs = Misc::all();
        $coatings = LensCoating::with('mirrors')->get();
        //$user = auth()->user();
        /*$lensCoatingSelects = [];
        foreach (LensCoating::select('lc_coating_group', 'lc_lens_coating as item')->get()->groupBy('lc_coating_group')->toArray() as $group => $items) {
            $lensCoatingSelects[] = ['group' => $group, 'items' => array_map(function ($item) {
                return $item['item'];
            }, $items)];
        }*/

        return inertia()->render('Orders/CreateOrder', compact('lenses', 'frameVariations', 'tints', 'miscs', 'coatings'));
        //return inertia()->render('Orders/CreateOrder', compact('frames', 'lenses', 'frameVariations'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$user = $request->user();
        //$request->merge(['user_id' => $user->id]);
        //dd($user, $request);
        switch ($request->input('method')) {
            case 'save':

                //dd("save");
                $validated = $request->validate([
                    'or_ship_to' => 'nullable',
                    'or_ordby_billto_dash' => 'nullable',
                    'or_po_no' => 'nullable',
                    'or_emp_name_last' => 'nullable',
                    'or_emp_name_first' => 'nullable',
                    'or_emp_phone' => 'nullable',
                    'or_emp_email' => 'nullable',
                    'or_emp_no' => 'nullable',
                    'or_dept' => 'nullable',
                    'or_req' => 'nullable',
                    'or_order_pending' => 'nullable',
                    'filler' => 'nullable',
                    'or_material_right' => 'nullable',
                    'or_material_left' => 'nullable',
                    'or_lens_style_right' => 'nullable',
                    'or_lens_style_left' => 'nullable',
                    'or_lens_color_right' => 'nullable',
                    'or_lens_color_left' => 'nullable',
                    'or_ocht_right' => 'nullable',
                    'or_ocht_left' => 'nullable',
                    'or_measurement_right' => 'nullable',
                    'or_measurement_left' => 'nullable',
                    'or_sphere_right' => 'nullable',
                    'or_sphere_left' => 'nullable',
                    'or_cyl_right' => 'nullable',
                    'or_cyl_left' => 'nullable',
                    'or_axis_right' => 'nullable',
                    'or_axis_left' => 'nullable',
                    'or_prism_or_right' => 'nullable',
                    'or_prism_or_left' => 'nullable',
                    'or_prism_in_right' => 'nullable',
                    'or_prism_in_right_value' => 'nullable',
                    'or_prism_in_left' => 'nullable',
                    'or_prism_in_left_value' => 'nullable',
                    'or_prism_out_left' => 'nullable',
                    'or_prism_up_right' => 'nullable',
                    'or_prism_up_right_value' => 'nullable',
                    'or_prism_up_left' => 'nullable',
                    'or_prise_up_left_value' => 'nullable',
                    'or_prism_dn_right' => 'nullable',
                    'or_prism_dn_left' => 'nullable',
                    'or_add_power_right' => 'nullable',
                    'or_add_power_left' => 'nullable',
                    'or_seg_hgt_meas_right' => 'nullable',
                    'or_seg_hgt_meas_left' => 'nullable',
                    'or_pd_dist_right' => 'nullable',
                    'or_pd_dist_left' => 'nullable',
                    'or_pd_near_right' => 'nullable',
                    'or_pd_near_left' => 'nullable',
                    'or_opt_center_right' => 'nullable',
                    'or_opt_center_left' => 'nullable',
                    'or_add_right' => 'nullable',
                    'or_add_left' => 'nullable',
                    'or_upper_add_right' => 'nullable',
                    'or_upper_add_left' => 'nullable',
                    'or_seg_height_right' => 'nullable',
                    'or_set_height_left' => 'nullable',
                    'or_tint_color' => 'nullable',
                    'or_tint_color_left' => 'nullable',
                    'or_tint_percent' => 'nullable',
                    'or_tint_percent_left' => 'nullable',
                    'or_mirror' => 'nullable',
                    'or_mirror_left' => 'nullable',
                    'or_coating' => 'nullable',
                    'or_coating_left' => 'nullable',
                    'or_frame_info' => 'nullable',
                    'or_frame_manufacturer' => 'nullable',
                    'or_frame_style' => 'nullable',
                    'or_frame_color' => 'nullable',
                    'or_frame_size' => 'nullable',
                    'or_frame_side_shield' => 'nullable',
                    'or_frame_side_shield_color' => 'nullable',
                    'or_extra_ss' => 'nullable',
                    'or_frame_case' => 'nullable',
                    'or_add_on_1' => 'nullable',
                    'or_add_on_2' => 'nullable',
                    'or_add_on_3' => 'nullable',
                    'or_notes' => 'nullable',
                    'or_cc_cust_exp_yyyy' => 'nullable',
                    'or_cc_emp_copay_token' => 'nullable',
                    'or_cc_company_card_token' => 'nullable',
                    'or_cc_emp_card_type' => 'nullable',
                    'or_cc_emp_card_exp_date' => 'nullable',
                    'or_cc_company_card_type' => 'nullable',
                    'or_cc_company_card_exp_date' => 'nullable',
                    'or_jobtype' => 'nullable',
                    'or_eyes' => 'nullable',
                ]);

                //$order = Order::create($validated);
                $order = $request->user()->orders()->create($validated);
                $ot = new OrderTracking(['ot_status' => 'Pending', 'ot_portal_order_number' => $order->or_portal_order_number]);
                $order->order_trackings()->save($ot);


                Session::flash('success', 'Order created successfully');

                return to_route('orders.index');
                break;
            case "submit":
                //dd("submit");
                $or_tint_color = $request->input('or_tint_color');
                if ($or_tint_color) {
                    $tint = Tint::where('ti_color', $or_tint_color)->first();
                    $tintl = $tint->ti_lower_range;
                    $tintu = $tint->ti_upper_range;
                } else {
                    $tintl = 0;
                    $tintu = 999;
                }
                $rightLensStyle = LensStyle::where(['ls_lenstyl_lens_style' => $request->input('or_lens_style_right')])->first();
                $rightLensMaterial = LensMaterial::where(['lm_lens_material' => $request->input('or_material_right')])->first();
                $rightLens = Lens::where([
                    'le_lens_mat' => $request->input('or_material_right'),
                    'le_lens_col' => $request->input('or_lens_color_right'),
                    'le_lens_style' => $request->input('or_lens_style_right')
                ])->first();

                $leftLensStyle = LensStyle::where(['ls_lenstyl_lens_style' => $request->input('or_lens_style_left')])->first();
                $leftLensMaterial = LensMaterial::where(['lm_lens_material' => $request->input('or_material_left')])->first();
                $leftLens = Lens::where([
                    'le_lens_mat' => $request->input('or_material_left'),
                    'le_lens_col' => $request->input('or_lens_color_left'),
                    'le_lens_style' => $request->input('or_lens_style_left')
                ])->first();
                $or_frame_style =  $request->input('or_frame_style');
                //fv_eyesize . '-' . $this->fv_front_bridge . '-' . $this->fv_temple_size
                $fvsize = explode('-', $request->input('or_frame_size'));
                //dd($fvsize);
                if ($request->input('or_frame_color') && $fvsize[0] && $fvsize[1] && $fvsize[2]) {
                    $fvar = FrameVariation::where([
                        'fv_frame_color' => $request->input('or_frame_color'),
                        'fv_eyesize' =>  $fvsize[0],
                        'fv_front_bridge' =>  $fvsize[1],
                        'fv_temple_size' =>  $fvsize[2]
                    ])->whereHas('frame', function (Builder $query) use ($or_frame_style) {
                        $query->where('fr_frame_name', $or_frame_style);
                    })->first();
                } else {
                    $fvar = null;
                }
                $or_coating = LensCoating::where(['lc_lens_coating' => $request->input('or_coating')])->first();
                //dd($rightlens, $leftlens, $fvar);

                //dd($tint, $tintl, $tintu);
                //$validated = $request->validate([
                $validator = Validator::make($request->all(), [
                    'or_ship_to' => 'nullable',
                    'or_ordby_billto_dash' => 'nullable',
                    'or_po_no' => 'required',
                    'or_emp_name_last' => 'nullable',
                    'or_emp_name_first' => 'nullable',
                    'or_emp_phone' => 'nullable',
                    'or_emp_email' => 'nullable',
                    'or_emp_no' => 'nullable',
                    'or_dept' => 'nullable',
                    'or_req' => 'nullable',
                    'or_order_pending' => 'nullable',
                    'filler' => 'nullable',
                    'or_material_right' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Right',
                    'or_material_left' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Left',
                    'or_lens_style_right' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Right',
                    'or_lens_style_left' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Left',
                    'or_lens_color_right' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Right',
                    'or_lens_color_left' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Left',
                    'or_ocht_right' => 'nullable',
                    'or_ocht_left' => 'nullable',
                    'or_measurement_right' => 'nullable',
                    'or_measurement_left' => 'nullable',
                    'or_sphere_right' => 'nullable',
                    'or_sphere_left' => 'nullable',
                    'or_cyl_right' => 'nullable',
                    'or_cyl_left' => 'nullable',
                    'or_axis_right' => 'nullable',
                    'or_axis_left' => 'nullable',
                    'or_prism_or_right' => 'nullable',
                    'or_prism_or_left' => 'nullable',
                    'or_prism_in_right' => 'nullable',
                    'or_prism_in_right_value' => 'nullable',
                    'or_prism_in_left' => 'nullable',
                    'or_prism_in_left_value' => 'nullable',
                    'or_prism_out_left' => 'nullable',
                    'or_prism_up_right' => 'nullable',
                    'or_prism_up_right_value' => 'nullable',
                    'or_prism_up_left' => 'nullable',
                    'or_prise_up_left_value' => 'nullable',
                    'or_prism_dn_right' => 'nullable',
                    'or_prism_dn_left' => 'nullable',
                    'or_add_power_right' => 'nullable',
                    'or_add_power_left' => 'nullable',
                    'or_seg_hgt_meas_right' => 'nullable',
                    'or_seg_hgt_meas_left' => 'nullable',
                    'or_pd_dist_right' => 'nullable',
                    'or_pd_dist_left' => 'nullable',
                    'or_pd_near_right' => 'nullable',
                    'or_pd_near_left' => 'nullable',
                    'or_opt_center_right' => 'nullable',
                    'or_opt_center_left' => 'nullable',
                    'or_add_right' => 'nullable',
                    'or_add_left' => 'nullable',
                    'or_upper_add_right' => 'nullable',
                    'or_upper_add_left' => 'nullable',
                    'or_seg_height_right' => 'nullable',
                    'or_set_height_left' => 'nullable',
                    'or_tint_color' => "nullable",
                    'or_tint_color_left' => 'nullable',
                    'or_tint_percent' => "nullable|required_with:or_tint_color|integer|numeric|between:$tintl,$tintu",
                    'or_tint_percent_left' => 'nullable',
                    'or_mirror' => 'nullable',
                    'or_mirror_left' => 'nullable',
                    'or_coating' => 'nullable',
                    'or_coating_left' => 'nullable',
                    'or_frame_info' => 'nullable',
                    'or_frame_manufacturer' => 'nullable',
                    'or_frame_style' => 'required',
                    'or_frame_color' => 'required',
                    'or_frame_size' => 'required',
                    'or_frame_side_shield' => 'nullable',
                    'or_frame_side_shield_color' => 'nullable',
                    'or_extra_ss' => 'nullable',
                    'or_frame_case' => 'nullable',
                    'or_add_on_1' => 'nullable',
                    'or_add_on_2' => 'nullable',
                    'or_add_on_3' => 'nullable',
                    'or_notes' => 'nullable',
                    'or_cc_cust_exp_yyyy' => 'nullable',
                    'or_cc_emp_copay_token' => 'nullable',
                    'or_cc_company_card_token' => 'nullable',
                    'or_cc_emp_card_type' => 'nullable',
                    'or_cc_emp_card_exp_date' => 'nullable',
                    'or_cc_company_card_type' => 'nullable',
                    'or_cc_company_card_exp_date' => 'nullable',
                    'or_jobtype' => 'nullable',
                    'or_eyes' => 'required',
                ]);

                $validator->after(function ($validator) use ($fvar, $leftLensMaterial, $leftLensStyle, $rightLensMaterial, $rightLensStyle, $leftLens, $rightLens, $or_coating) {
                    //$limit = $fvar->frame->lensMaterialLimitation->contains();

                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($leftLensMaterial)) {
                        $validator->errors()->add(
                            'or_material_left',
                            'Material not compatible with frame'
                        );
                    }
                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($rightLensMaterial)) {
                        $validator->errors()->add(
                            'or_material_right',
                            'Material not compatible with frame'
                        );
                    }
                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($leftLensStyle)) {
                        $validator->errors()->add(
                            'or_lens_style_left',
                            'Style not compatible with frame'
                        );
                    }
                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($rightLensStyle)) {
                        $validator->errors()->add(
                            'or_lens_style_right',
                            'Style not compatible with frame'
                        );
                    }
                    if ($fvar) {
                        if ($fvar->frame->fr_min_near_pd) {
                            if ($validator->safe()->or_pd_near_right && ($fvar->frame->fr_min_near_pd > $validator->safe()->or_pd_near_right)) {
                                $validator->errors()->add(
                                    'or_pd_near_right',
                                    'Minimum Near PD is ' . $fvar->frame->fr_min_near_pd
                                );
                            }
                            if ($validator->safe()->or_pd_near_left && ($fvar->frame->fr_min_near_pd > $validator->safe()->or_pd_near_left)) {
                                $validator->errors()->add(
                                    'or_pd_near_left',
                                    'Minimum Near PD is ' . $fvar->frame->fr_min_near_pd
                                );
                            }
                        }
                    }
                    if ($or_coating) {
                        //dd($or_coating, $leftLens, $rightLens);
                        if ($leftLens && !$leftLens->coatings->contains($or_coating)) {
                            $validator->errors()->add(
                                'or_coating',
                                'Coating not compatible with Left Lens'
                            );
                        }
                        if ($rightLens && !$rightLens->coatings->contains($or_coating)) {
                            $validator->errors()->add(
                                'or_coating',
                                'Coating not compatible with Right Lens'
                            );
                        }
                    }
                });

                if ($validator->fails()) {
                    return back()->withErrors($validator)->withInput();
                }

                // Retrieve the validated input...
                $validated = $validator->validated();

                //$order = Order::create($validated);
                $order = $request->user()->orders()->create($validated);
                $ot = new OrderTracking(['ot_status' => 'In Process', 'ot_portal_order_number' => $order->or_portal_order_number]);
                $order->order_trackings()->save($ot);

                Session::flash('success', 'Order submitted successfully');

                return to_route('orders.index');


                break;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);
        //$order = Order::with('status')->find($id);

        return inertia()->render('Orders/OrderDetail', compact('order'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $order = Order::find($id);

        $frameVariations = FrameVariation::with('frame')->get();
        $lenses = Lens::all();
        $tints = Tint::all();
        $miscs = Misc::all();
        $coatings = LensCoating::with('mirrors')->get();
        /*$lensCoatingSelects = [];
        foreach (LensCoating::select('lc_coating_group', 'lc_lens_coating as item')->get()->groupBy('lc_coating_group')->toArray() as $group => $items) {
            $lensCoatingSelects[] = ['group' => $group, 'items' => array_map(function ($item) {
                return $item['item'];
            }, $items)];
        }*/
        return inertia()->render('Orders/EditOrder', compact('lenses', 'frameVariations', 'tints', 'order', 'miscs', 'coatings'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $order = Order::find($id);
        //dd($request);
        switch ($request->input('method')) {
            case 'save':

                //dd("save");
                $validated = $request->validate([
                    'or_ship_to' => 'nullable',
                    'or_ordby_billto_dash' => 'nullable',
                    'or_po_no' => 'nullable',
                    'or_emp_name_last' => 'nullable',
                    'or_emp_name_first' => 'nullable',
                    'or_emp_phone' => 'nullable',
                    'or_emp_email' => 'nullable',
                    'or_emp_no' => 'nullable',
                    'or_dept' => 'nullable',
                    'or_req' => 'nullable',
                    'or_order_pending' => 'nullable',
                    'filler' => 'nullable',
                    'or_material_right' => 'nullable',
                    'or_material_left' => 'nullable',
                    'or_lens_style_right' => 'nullable',
                    'or_lens_style_left' => 'nullable',
                    'or_lens_color_right' => 'nullable',
                    'or_lens_color_left' => 'nullable',
                    'or_ocht_right' => 'nullable',
                    'or_ocht_left' => 'nullable',
                    'or_measurement_right' => 'nullable',
                    'or_measurement_left' => 'nullable',
                    'or_sphere_right' => 'nullable',
                    'or_sphere_left' => 'nullable',
                    'or_cyl_right' => 'nullable',
                    'or_cyl_left' => 'nullable',
                    'or_axis_right' => 'nullable',
                    'or_axis_left' => 'nullable',
                    'or_prism_or_right' => 'nullable',
                    'or_prism_or_left' => 'nullable',
                    'or_prism_in_right' => 'nullable',
                    'or_prism_in_right_value' => 'nullable',
                    'or_prism_in_left' => 'nullable',
                    'or_prism_in_left_value' => 'nullable',
                    'or_prism_out_left' => 'nullable',
                    'or_prism_up_right' => 'nullable',
                    'or_prism_up_right_value' => 'nullable',
                    'or_prism_up_left' => 'nullable',
                    'or_prise_up_left_value' => 'nullable',
                    'or_prism_dn_right' => 'nullable',
                    'or_prism_dn_left' => 'nullable',
                    'or_add_power_right' => 'nullable',
                    'or_add_power_left' => 'nullable',
                    'or_seg_hgt_meas_right' => 'nullable',
                    'or_seg_hgt_meas_left' => 'nullable',
                    'or_pd_dist_right' => 'nullable',
                    'or_pd_dist_left' => 'nullable',
                    'or_pd_near_right' => 'nullable',
                    'or_pd_near_left' => 'nullable',
                    'or_opt_center_right' => 'nullable',
                    'or_opt_center_left' => 'nullable',
                    'or_add_right' => 'nullable',
                    'or_add_left' => 'nullable',
                    'or_upper_add_right' => 'nullable',
                    'or_upper_add_left' => 'nullable',
                    'or_seg_height_right' => 'nullable',
                    'or_set_height_left' => 'nullable',
                    'or_tint_color' => 'nullable',
                    'or_tint_color_left' => 'nullable',
                    'or_tint_percent' => 'nullable',
                    'or_tint_percent_left' => 'nullable',
                    'or_mirror' => 'nullable',
                    'or_mirror_left' => 'nullable',
                    'or_coating' => 'nullable',
                    'or_coating_left' => 'nullable',
                    'or_frame_info' => 'nullable',
                    'or_frame_manufacturer' => 'nullable',
                    'or_frame_style' => 'nullable',
                    'or_frame_color' => 'nullable',
                    'or_frame_size' => 'nullable',
                    'or_frame_side_shield' => 'nullable',
                    'or_extra_ss' => 'nullable',
                    'or_frame_case' => 'nullable',
                    'or_add_on_1' => 'nullable',
                    'or_add_on_2' => 'nullable',
                    'or_add_on_3' => 'nullable',
                    'or_notes' => 'nullable',
                    'or_cc_cust_exp_yyyy' => 'nullable',
                    'or_cc_emp_copay_token' => 'nullable',
                    'or_cc_company_card_token' => 'nullable',
                    'or_cc_emp_card_type' => 'nullable',
                    'or_cc_emp_card_exp_date' => 'nullable',
                    'or_cc_company_card_type' => 'nullable',
                    'or_cc_company_card_exp_date' => 'nullable',
                    'or_jobtype' => 'nullable',
                    'or_eyes' => 'nullable',
                ]);

                $order->update($validated);


                Session::flash('success', 'Order updated successfully');

                return to_route('orders.index');
                break;
            case "submit":
                //dd("submit");

                $or_tint_color = $request->input('or_tint_color');
                if ($or_tint_color) {
                    $tint = Tint::where('ti_color', $or_tint_color)->first();
                    $tintl = $tint->ti_lower_range;
                    $tintu = $tint->ti_upper_range;
                } else {
                    $tintl = 0;
                    $tintu = 999;
                }
                $rightLensStyle = LensStyle::where(['ls_lenstyl_lens_style' => $request->input('or_lens_style_right')])->first();
                $rightLensMaterial = LensMaterial::where(['lm_lens_material' => $request->input('or_material_right')])->first();
                $rightLens = Lens::where([
                    'le_lens_mat' => $request->input('or_material_right'),
                    'le_lens_col' => $request->input('or_lens_color_right'),
                    'le_lens_style' => $request->input('or_lens_style_right')
                ])->first();

                $leftLensStyle = LensStyle::where(['ls_lenstyl_lens_style' => $request->input('or_lens_style_left')])->first();
                $leftLensMaterial = LensMaterial::where(['lm_lens_material' => $request->input('or_material_left')])->first();
                $leftLens = Lens::where([
                    'le_lens_mat' => $leftLensMaterial,
                    'le_lens_col' => $request->input('or_lens_color_left'),
                    'le_lens_style' => $leftLensStyle
                ])->first();
                $or_frame_style =  $request->input('or_frame_style');
                //fv_eyesize . '-' . $this->fv_front_bridge . '-' . $this->fv_temple_size
                $fvsize = explode('-', $request->input('or_frame_size'));
                //dd($fvsize);
                if ($request->input('or_frame_color') && $fvsize[0] && $fvsize[1] && $fvsize[2]) {
                    $fvar = FrameVariation::where([
                        'fv_frame_color' => $request->input('or_frame_color'),
                        'fv_eyesize' =>  $fvsize[0],
                        'fv_front_bridge' =>  $fvsize[1],
                        'fv_temple_size' =>  $fvsize[2]
                    ])->whereHas('frame', function (Builder $query) use ($or_frame_style) {
                        $query->where('fr_frame_name', $or_frame_style);
                    })->first();
                } else {
                    $fvar = null;
                }
                $or_coating = LensCoating::where(['lc_lens_coating' => $request->input('or_coating')])->first();
                //dd($rightlens, $leftlens, $fvar);

                //dd($tint, $tintl, $tintu);
                //$validated = $request->validate([
                $validator = Validator::make($request->all(), [
                    'or_ship_to' => 'nullable',
                    'or_ordby_billto_dash' => 'nullable',
                    'or_po_no' => 'required',
                    'or_emp_name_last' => 'nullable',
                    'or_emp_name_first' => 'nullable',
                    'or_emp_phone' => 'nullable',
                    'or_emp_email' => 'nullable',
                    'or_emp_no' => 'nullable',
                    'or_dept' => 'nullable',
                    'or_req' => 'nullable',
                    'or_order_pending' => 'nullable',
                    'filler' => 'nullable',
                    'or_material_right' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Right',
                    'or_material_left' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Left',
                    'or_lens_style_right' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Right',
                    'or_lens_style_left' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Left',
                    'or_lens_color_right' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Right',
                    'or_lens_color_left' => 'nullable|required_if:or_eyes,Both|required_if:or_eyes,Left',
                    'or_ocht_right' => 'nullable',
                    'or_ocht_left' => 'nullable',
                    'or_measurement_right' => 'nullable',
                    'or_measurement_left' => 'nullable',
                    'or_sphere_right' => 'nullable',
                    'or_sphere_left' => 'nullable',
                    'or_cyl_right' => 'nullable',
                    'or_cyl_left' => 'nullable',
                    'or_axis_right' => 'nullable',
                    'or_axis_left' => 'nullable',
                    'or_prism_or_right' => 'nullable',
                    'or_prism_or_left' => 'nullable',
                    'or_prism_in_right' => 'nullable',
                    'or_prism_in_right_value' => 'nullable',
                    'or_prism_in_left' => 'nullable',
                    'or_prism_in_left_value' => 'nullable',
                    'or_prism_out_left' => 'nullable',
                    'or_prism_up_right' => 'nullable',
                    'or_prism_up_right_value' => 'nullable',
                    'or_prism_up_left' => 'nullable',
                    'or_prise_up_left_value' => 'nullable',
                    'or_prism_dn_right' => 'nullable',
                    'or_prism_dn_left' => 'nullable',
                    'or_add_power_right' => 'nullable',
                    'or_add_power_left' => 'nullable',
                    'or_seg_hgt_meas_right' => 'nullable',
                    'or_seg_hgt_meas_left' => 'nullable',
                    'or_pd_dist_right' => 'nullable',
                    'or_pd_dist_left' => 'nullable',
                    'or_pd_near_right' => 'nullable',
                    'or_pd_near_left' => 'nullable',
                    'or_opt_center_right' => 'nullable',
                    'or_opt_center_left' => 'nullable',
                    'or_add_right' => 'nullable',
                    'or_add_left' => 'nullable',
                    'or_upper_add_right' => 'nullable',
                    'or_upper_add_left' => 'nullable',
                    'or_seg_height_right' => 'nullable',
                    'or_set_height_left' => 'nullable',
                    'or_tint_color' => "nullable",
                    'or_tint_color_left' => 'nullable',
                    'or_tint_percent' => "nullable|required_with:or_tint_color|integer|numeric|between:$tintl,$tintu",
                    'or_tint_percent_left' => 'nullable',
                    'or_mirror' => 'nullable',
                    'or_mirror_left' => 'nullable',
                    'or_coating' => 'nullable',
                    'or_coating_left' => 'nullable',
                    'or_frame_info' => 'nullable',
                    'or_frame_manufacturer' => 'nullable',
                    'or_frame_style' => 'required',
                    'or_frame_color' => 'required',
                    'or_frame_size' => 'required',
                    'or_frame_side_shield' => 'nullable',
                    'or_frame_side_shield_color' => 'nullable',
                    'or_extra_ss' => 'nullable',
                    'or_frame_case' => 'nullable',
                    'or_add_on_1' => 'nullable',
                    'or_add_on_2' => 'nullable',
                    'or_add_on_3' => 'nullable',
                    'or_notes' => 'nullable',
                    'or_cc_cust_exp_yyyy' => 'nullable',
                    'or_cc_emp_copay_token' => 'nullable',
                    'or_cc_company_card_token' => 'nullable',
                    'or_cc_emp_card_type' => 'nullable',
                    'or_cc_emp_card_exp_date' => 'nullable',
                    'or_cc_company_card_type' => 'nullable',
                    'or_cc_company_card_exp_date' => 'nullable',
                    'or_jobtype' => 'nullable',
                    'or_eyes' => 'required',
                ]);

                $validator->after(function ($validator) use ($fvar, $leftLensMaterial, $leftLensStyle, $rightLensMaterial, $rightLensStyle, $leftLens, $rightLens, $or_coating) {
                    //$limit = $fvar->frame->lensMaterialLimitation->contains();

                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($leftLensMaterial)) {
                        $validator->errors()->add(
                            'or_material_left',
                            'Material not compatible with frame'
                        );
                    }
                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($rightLensMaterial)) {
                        $validator->errors()->add(
                            'or_material_right',
                            'Material not compatible with frame'
                        );
                    }
                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($leftLensStyle)) {
                        $validator->errors()->add(
                            'or_lens_style_left',
                            'Style not compatible with frame'
                        );
                    }
                    if ($fvar && $fvar->frame->lensMaterialLimitations->contains($rightLensStyle)) {
                        $validator->errors()->add(
                            'or_lens_style_right',
                            'Style not compatible with frame'
                        );
                    }
                    if ($or_coating && !$leftLens->coatings->contains($or_coating)) {
                        $validator->errors()->add(
                            'or_coating',
                            'Coating not compatible with Left Lens'
                        );
                    }
                    if ($or_coating && !$rightLens->coatings->contains($or_coating)) {
                        $validator->errors()->add(
                            'or_coating',
                            'Coating not compatible with Right Lens'
                        );
                    }
                });

                if ($validator->fails()) {
                    return back()->withErrors($validator)->withInput();
                }

                // Retrieve the validated input...
                $validated = $validator->validated();
                $order->update($validated);

                $ot = new OrderTracking(['ot_status' => 'In Process', 'ot_portal_order_number' => $order->or_portal_order_number]);
                $order->order_trackings()->save($ot);

                Session::flash('success', 'Order submitted successfully');

                return to_route('orders.index');


                break;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
