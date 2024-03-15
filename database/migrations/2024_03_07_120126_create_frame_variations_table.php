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
        Schema::create('frame_variations', function (Blueprint $table) {
            $table->id();
            $table->integer('fv_frame_id')->nullable();
            $table->string('fv_eyesize')->nullable();
            $table->string('fv_front_bridge')->nullable();
            $table->string('fv_frame_color')->nullable();
            $table->string('fv_temple_type')->nullable();
            $table->string('fv_temple_size')->nullable();
            $table->string('fv_A')->nullable();
            $table->string('fv_B')->nullable();
            $table->string('fv_ED')->nullable();
            $table->string('fv_DBL')->nullable();
            $table->string('fv_non_dig_default_seg')->nullable();
            $table->string('fv_dig_default_seg')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frame_variations');
    }
};
