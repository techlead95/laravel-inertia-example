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
        Schema::create('lenses', function (Blueprint $table) {
            $table->id();
            $table->string('le_lens_delete_code')->nullable();

            $table->string('le_lens_ltype')->nullable();
            $table->string('le_lens_vtype')->nullable();
            $table->integer('le_lens_dseg')->nullable();

            $table->string('le_lens_mat');
            $table->string('le_lens_col');
            $table->string('le_lens_precoat')->nullable();
            $table->integer('le_lens_addon1')->nullable();
            $table->integer('le_lens_addon2')->nullable();
            $table->integer('le_lens_addon3')->nullable();
            $table->string('le_lens_dtab')->nullable();
            $table->string('le_lens_diam_1')->nullable();
            $table->string('le_lens_chrt1_1')->nullable();
            $table->string('le_lens_diam_2')->nullable();
            $table->string('le_lens_chrt1_2')->nullable();
            $table->string('le_lens_diam_3')->nullable();
            $table->string('le_lens_chrt1_3')->nullable();
            $table->string('le_lens_diam_4')->nullable();
            $table->string('le_lens_chrt1_4')->nullable();
            $table->decimal('le_lens_recomd_seg_hgt')->nullable();
            $table->string('le_lens_street_wear')->nullable();
            $table->string('le_lens_digital_style')->nullable();
            $table->string('le_lens_filler')->nullable();
            $table->integer('le_lens_sbdge_date')->nullable();
            $table->string('le_lens_style');
            $table->string('le_optic_translation')->nullable();
            $table->string('le_dvi_lens_style')->nullable();
            $table->string('le_dvi_mat')->nullable();
            $table->string('le_dvi_color')->nullable();
            $table->string('le_o2_lens_style_add_code')->nullable();
            $table->string('le_o2_material_add_code')->nullable();
            $table->string('le_o2_color_add_code')->nullable();
            $table->string('le_o1_lens_add_code')->nullable();
            $table->string('le_o1_material_add_code')->nullable();
            $table->string('le_o1_color_add_code')->nullable();
            $table->string('le_minimun_seg')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lenses');
    }
};
