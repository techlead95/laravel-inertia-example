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
            $table->integer('or_portal_order_number');
            $table->integer('or_legacy_order_number');
            $table->string('or_ship_to');
            $table->string('or_ordby_billto_dash');
            $table->string('or_po_no');
            $table->string('or_emp_name_last');
            $table->string('or_emp_name_first');
            $table->string('or_emp_no');
            $table->string('or_dept');
            $table->string('or_req');
            $table->string('or_sphere_right');
            $table->string('or_sphere_left');
            $table->string('or_cyl_right');
            $table->string('or_cyl_left');
            $table->string('or_axis_right');
            $table->string('or_axis_left');
            $table->string('or_prism_or_right');
            $table->string('or_prism_or_left');
            $table->string('or_prism_out_right');
            $table->string('or_prism_out_left');
            $table->string('or_prism_up_right');
            $table->string('or_prism_up_left');
            $table->string('or_prism_dn_right');
            $table->string('or_prism_dn_left');
            $table->string('or_add_power_right');
            $table->string('or_add_power_left');
            $table->string('or_seg_hgt_meas_right');
            $table->string('or_seg_hgt_meas_left');
            $table->string('or_pd_dist_right');
            $table->string('or_pd_dist_left');
            $table->string('or_pd_near_right');
            $table->string('or_pd_near_left');
            $table->string('or_opt_center_right');
            $table->string('or_opt_center_left');
            $table->string('or_frame_style_comma');
            $table->string('or_ss_type_dash');
            $table->string('or_ss_extra_dash');
            $table->string('or_lens_type_dashes');
            $table->string('or_safety_street');
            $table->string('or_rx_number');
            $table->string('or_special_instr');
            $table->string('or_treatment_1');
            $table->string('or_treatment_2');
            $table->string('or_treatment_3');
            $table->string('or_treatment_4');
            $table->string('or_treatment_5');
            $table->string('or_treatment_6');
            $table->string('or_treatment_7');
            $table->string('or_treatment_comments');
            $table->string('or_engine_id');
            $table->string('or_cc_emp_method');
            $table->string('or_cc_emp_number');
            $table->decimal('or_cc_emp_amt');
            $table->integer('or_cc_emp_exp_mm');
            $table->integer('or_cc_emp_exp_yyyy');
            $table->string('or_cc_cust_method');
            $table->string('or_cc_cust_number');
            $table->decimal('or_cc_cust_amt');
            $table->integer('or_cc_cust_exp_mm');
            $table->integer('or_cc_cust_exp_yyyy');
            $table->string('or_force_hold_reason');
            $table->integer('or_cc_emp_ivc');
            $table->integer('or_cc_emp_zip');
            $table->string('or_manual_ship_addr_flag');
            $table->string('or_manual_ship_name');
            $table->string('or_manual_ship_addr_1');
            $table->string('or_manual_ship_addr_2');
            $table->string('or_manual_ship_addr_3');
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