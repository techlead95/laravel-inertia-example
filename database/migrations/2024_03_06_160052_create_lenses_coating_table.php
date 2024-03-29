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
            $table->string('lc_o1_translation')->nullable();
            $table->string('lc_dvi_translation')->nullable();
            $table->integer('lc_cost')->nullable();
            $table->string('lc_o2_add_code')->nullable();
            $table->string('lc_o1_add_code')->nullable();
            $table->string('lc_lens_color')->nullable();
            $table->string('lc_lens_clarity_shield')->nullable();
            $table->string('lc_ez_clean')->nullable();
            $table->string('lc_anti_fog')->nullable();
            $table->string('lc_ez_with_anti_fog')->nullable();
            $table->string('lc_anti_ref_with_anti_fog')->nullable();
            $table->string('lc_hi_vision_anti_fog')->nullable();
            $table->string('lc_ex3_anti_ref')->nullable();
            $table->string('lc_recharge_with_anti_ref')->nullable();
            $table->string('lc_standard_ar_par')->nullable();
            $table->string('lc_standard_ar_with_view_protect')->nullable();
            $table->string('lc_back_side_ar')->nullable();
            $table->string('lc_2_sided_scratch_plastic')->nullable();
            $table->string('lc_setup_by')->nullable();
            $table->string('lc_last_modified_by')->nullable();

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
