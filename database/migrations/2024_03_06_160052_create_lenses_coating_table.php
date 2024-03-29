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
        Schema::create('lens_coatings', function (Blueprint $table) {
            $table->id();
            $table->string('lc_lens_coating');
            $table->string('lc_coating_group');
            $table->string('lc_o1_translation');
            $table->string('lc_dvi_translation');
            $table->integer('lc_cost');
            $table->string('lc_o2_add_code');
            $table->string('lc_o1_add_code');
            $table->string('lc_lens_color');
            $table->string('lc_lens_clarity_shield');
            $table->string('lc_ez_clean');
            $table->string('lc_anti_fog');
            $table->string('lc_ez_with_anti_fog');
            $table->string('lc_anti_ref_with_anti_fog');
            $table->string('lc_hi_vision_anti_fog');
            $table->string('lc_ex3_anti_ref');
            $table->string('lc_recharge_with_anti_ref');
            $table->string('lc_standard_ar_par');
            $table->string('lc_standard_ar_with_view_protect');
            $table->string('lc_back_side_ar');
            $table->string('lc_2_sided_scratch_plastic');
            $table->string('lc_setup_by');
            $table->string('lc_last_modified_by');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lens_coatings');
    }
};
