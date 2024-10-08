<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->integer('or_portal_order_number')->unique();
            $table->integer('or_legacy_order_number')->nullable();
            $table->foreignId('user_id')->nullable();
            $table->string('or_ship_to')->nullable();
            $table->string('or_ordby_billto_dash')->nullable();
            $table->string('or_po_no')->nullable();
            $table->string('or_emp_name_last')->nullable();
            $table->string('or_emp_name_first')->nullable();
            $table->string('or_emp_phone')->nullable();
            $table->string('or_emp_email')->nullable();
            $table->string('or_emp_no')->nullable();
            $table->string('or_dept')->nullable();
            $table->string('or_req')->nullable();
            $table->string('or_order_pending')->nullable();
            $table->string('or_material_right')->nullable();
            $table->string('or_material_left')->nullable();
            $table->string('or_lens_style_right')->nullable();
            $table->string('or_lens_style_left')->nullable();
            $table->string('or_lens_color_right')->nullable();
            $table->string('or_lens_color_left')->nullable();
            $table->string('or_ocht_right')->nullable();
            $table->string('or_ocht_left')->nullable();
            $table->string('or_measurement_right')->nullable();
            $table->string('or_measurement_left')->nullable();
            $table->string('or_sphere_right')->nullable();
            $table->string('or_sphere_left')->nullable();
            $table->string('or_cyl_right')->nullable();
            $table->string('or_cyl_left')->nullable();
            $table->string('or_axis_right')->nullable();
            $table->string('or_axis_left')->nullable();
            $table->string('or_prism_or_right')->nullable();
            $table->string('or_prism_or_left')->nullable();
            $table->string('or_prism_in_right')->nullable();
            $table->string('or_prism_in_left')->nullable();
            $table->string('or_prism_in_right_value')->nullable();
            $table->string('or_prism_in_left_value')->nullable();
            $table->string('or_prism_up_right')->nullable();
            $table->string('or_prism_up_left')->nullable();
            $table->string('or_prism_up_right_value')->nullable();
            $table->string('or_prism_up_left_value')->nullable();
            $table->string('or_add_power_right')->nullable();
            $table->string('or_add_power_left')->nullable();
            $table->string('or_seg_hgt_meas_right')->nullable();
            $table->string('or_seg_hgt_meas_left')->nullable();
            $table->string('or_pd_dist_right')->nullable();
            $table->string('or_pd_dist_left')->nullable();
            $table->string('or_pd_near_right')->nullable();
            $table->string('or_pd_near_left')->nullable();
            $table->string('or_opt_center_right')->nullable();
            $table->string('or_opt_center_left')->nullable();
            $table->string('or_add_right')->nullable();
            $table->string('or_add_left')->nullable();
            $table->string('or_upper_add_right')->nullable();
            $table->string('or_upper_add_left')->nullable();
            $table->string('or_seg_height_right')->nullable();
            $table->string('or_set_height_left')->nullable();
            $table->string('or_tint_color')->nullable();
            $table->string('or_tint_percent')->nullable();
            $table->string('or_mirror')->nullable();
            $table->string('or_coating')->nullable();
            $table->string('or_frame_info')->nullable();
            $table->string('or_frame_manufacturer')->nullable();
            $table->string('or_frame_style')->nullable();
            $table->string('or_frame_color')->nullable();
            $table->string('or_frame_size')->nullable();
            $table->string('or_frame_side_shield')->nullable();
            $table->string('or_frame_side_shield_color')->nullable();
            $table->string('or_extra_ss')->nullable();
            $table->string('or_frame_case')->nullable();
            $table->string('or_add_on_1')->nullable();
            $table->string('or_add_on_2')->nullable();
            $table->string('or_add_on_3')->nullable();
            $table->string('or_notes')->nullable();
            $table->string('or_frame_style_comma')->nullable();
            $table->string('or_ss_type_dash')->nullable();
            $table->string('or_ss_extra_dash')->nullable();
            $table->string('or_lens_type_dashes')->nullable();
            $table->string('or_safety_street')->nullable();
            $table->string('or_rx_number')->nullable();
            $table->string('or_special_instr')->nullable();
            $table->string('or_cc_emp_copay_token')->nullable();
            $table->string('or_cc_company_card_token')->nullable();
            $table->string('or_cc_emp_card_type')->nullable();
            $table->string('or_cc_emp_card_exp_date')->nullable();
            $table->string('or_cc_company_card_type')->nullable();
            $table->string('or_cc_company_card_exp_date')->nullable();
            $table->string('or_force_hold_reason')->nullable();
            $table->integer('or_cc_emp_ivc')->nullable();
            $table->integer('or_cc_emp_zip')->nullable();
            $table->string('or_manual_ship_addr_flag')->nullable();
            $table->string('or_manual_ship_name')->nullable();
            $table->string('or_manual_ship_addr_1')->nullable();
            $table->string('or_manual_ship_addr_2')->nullable();
            $table->string('or_manual_ship_addr_3')->nullable();
            $table->string('or_jobtype')->nullable();
            $table->string('or_eyes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
