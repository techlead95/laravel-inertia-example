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
        Schema::create('frames', function (Blueprint $table) {
            $table->id();
            $table->string('fr_frame_name');
            $table->string('fr_frame_delete_bytes')->nullable();
            $table->string('fr_fl_type_code1')->nullable();
            $table->string('fr_fl_front')->nullable();
            $table->string('fr_frame_style')->nullable();
            $table->string('fr_eyesize')->nullable();
            $table->string('fr_frame_color')->nullable();
            $table->string('fr_temple_type')->nullable();
            $table->string('fr_temple_size')->nullable();
            $table->string('fr_A')->nullable();
            $table->string('fr_B')->nullable();
            $table->string('fr_ED')->nullable();
            $table->string('fr_DBL')->nullable();
            $table->string('fr_non_dig_default_seg')->nullable();
            $table->string('fr_dig_default_seg')->nullable();
            $table->string('fr_edge')->nullable();
            $table->string('fr_material')->nullable();
            $table->string('fr_min_edge')->nullable();
            $table->string('fr_base_curve_min')->nullable();
            $table->string('fr_base_curve_max')->nullable();
            $table->string('fr_min_near_pd')->nullable();
            $table->string('fr_notes')->nullable();
            $table->string('fr_non_conductive')->nullable();
            $table->string('fr_tight_fit')->nullable();
            $table->string('fr_wrap')->nullable();
            $table->string('fr_t1_eyesize')->nullable();
            $table->string('fr_front_bridge')->nullable();
            $table->string('fr_frame_ss_type')->nullable();
            $table->integer('fr_front_prod_code')->nullable();
            $table->integer('fr_front_addon1')->nullable();
            $table->integer('fr_front_addon2')->nullable();
            $table->string('fr_color_desc')->nullable();
            $table->string('fr_frame_group')->nullable();
            $table->string('fr_frame_vendor')->nullable();
            $table->string('fr_front_prod_code_2')->nullable();
            $table->string('fr_filler')->nullable();
            $table->integer('fr_fl_sbdge_date')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frames');
    }
};
