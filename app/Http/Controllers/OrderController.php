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
use Faker\Guesser\Name;
use Illuminate\Support\Facades\Session;
use Illuminate\Database\Eloquent\Builder;
use PhpParser\Node\Stmt\For_;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $search = request()->search;
        $startDate = request()->startDate;
        $endDate = request()->endDate;
        $orders = Order::when($search, function ($query, $search) {
            return $query->where('or_portal_order_number', 'like', '%' . $search . '%');
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

        $frameVariations = FrameVariation::with('frame')->get();
        //$lenses = Lens::with('coatings')->get();
        $lenses = Lens::all();
        //dd($lenses);
        $tints = Tint::all();
        $miscs = Misc::all();
        $coatings = LensCoating::with('mirrors')->get();
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
                ]);

                $order = Order::create($validated);
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
                $rightlens = Lens::where([
                    'le_lens_mat' => $request->input('or_material_right'),
                    'le_lens_col' => $request->input('or_lens_color_right'),
                    'le_lens_style' => $request->input('or_lens_style_right')
                ])->first();

                $leftlens = Lens::where([
                    'le_lens_mat' => $request->input('or_material_left'),
                    'le_lens_col' => $request->input('or_lens_color_left'),
                    'le_lens_style' => $request->input('or_lens_style_left')
                ])->first();
                $or_frame_style =  $request->input('or_frame_style');
                //fv_eyesize . '-' . $this->fv_front_bridge . '-' . $this->fv_temple_size
                $fvsize = explode('-', $request->input('or_frame_size'));
                //dd($fvsize);
                $fvar = FrameVariation::where([
                    'fv_frame_color' => $request->input('or_frame_color'),
                    'fv_eyesize' =>  $fvsize[0],
                    'fv_front_bridge' =>  $fvsize[1],
                    'fv_temple_size' =>  $fvsize[2]
                ])->whereHas('frame', function (Builder $query) use ($or_frame_style) {
                    $query->where('fr_frame_name', $or_frame_style);
                })->first();
                dd($rightlens, $leftlens, $fvar);

                //dd($tint, $tintl, $tintu);
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
                ]);

                $order = Order::create($validated);
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
        $lenses = Lens::with('coatings');
        $tints = Tint::all();
        $miscs = Misc::all();
        /*$lensCoatingSelects = [];
        foreach (LensCoating::select('lc_coating_group', 'lc_lens_coating as item')->get()->groupBy('lc_coating_group')->toArray() as $group => $items) {
            $lensCoatingSelects[] = ['group' => $group, 'items' => array_map(function ($item) {
                return $item['item'];
            }, $items)];
        }*/
        return inertia()->render('Orders/EditOrder', compact('lenses', 'frameVariations', 'tints', 'lensCoatingSelects', 'order', 'miscs'));
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
                    'or_tint_percent' => "nullable|required_with:or_tint_color|integer|numeric|between:$tintl,$tintu",
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
                ]);

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
