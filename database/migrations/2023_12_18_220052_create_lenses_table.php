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
            $table->string('le_lens_delete_code');

            $table->string('le_lens_ltype');
            $table->string('le_lens_vtype');
            $table->integer('le_lens_dseg');

            $table->string('le_lens_mat');
            $table->string('le_lens_col');
            $table->string('le_lens_precoat');
            $table->integer('le_lens_addon1');
            $table->integer('le_lens_addon2');
            $table->integer('le_lens_addon3');
            $table->string('le_lens_dtab');
            $table->string('le_lens_diam_1');
            $table->string('le_lens_chrt1_1');
            $table->string('le_lens_diam_2');
            $table->string('le_lens_chrt1_2');
            $table->string('le_lens_diam_3');
            $table->string('le_lens_chrt1_3');
            $table->string('le_lens_diam_4');
            $table->string('le_lens_chrt1_4');
            $table->decimal('le_lens_recomd_seg_hgt');
            $table->string('le_lens_street_wear');
            $table->string('le_lens_digital_style');
            $table->string('le_lens_filler');
            $table->integer('le_lens_sbdge_date');
            $table->string('le_optic_translation');
$table->string('le_dvi_lens_style');
$table->string('le_dvi_mat');
$table->string('le_dvi_color');
$table->string('le_o2_lens_style_add_code');
$table->string('le_o2_material_add_code');
$table->string('le_o2_color_add_code');
$table->string('le_o1_lens_add_code');
$table->string('le_o1_material_add_code');
$table->string('le_o1_color_add_code');
$table->string('le_minimun_seg');


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
