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
            $table->string('fr_frame_delete_bytes');

            $table->string('fr_fl_type_code1');
            $table->string('fr_fl_front');
            $table->string('fr_frame_style');
            $table->string('fr_t1_eyesize');
            $table->string('fr_front_bridge');
            $table->string('fr_frame_color');
            $table->string('fr_frame_ss_type');
            $table->integer('fr_front_prod_code');
            $table->integer('fr_front_addon1');
            $table->integer('fr_front_addon2');
            $table->string('fr_color_desc');
            $table->string('fr_frame_group');
            $table->string('fr_frame_vendor');
            $table->string('fr_front_prod_code_2');
            $table->string('fr_filler');
            $table->integer('fr_fl_sbdge_date');

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
