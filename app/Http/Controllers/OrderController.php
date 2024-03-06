<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Models\Frame;

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
            return $query->where('or_rx_number', 'like', '%' . $search . '%');
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
            $frames = Frame::all();
            return inertia()->render('Orders/CreateOrder', compact('frames'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
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

        Order::create($validated);

        $request->session()->flash('success', 'Order created successfully');

        return to_route('orders.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);

        return inertia()->render('Orders/OrderDetail', compact('order'));
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
