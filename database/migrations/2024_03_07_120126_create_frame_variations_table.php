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
            $table->string('fr_eyesize')->nullable();
            $table->string('fr_front_bridge')->nullable();
            $table->string('fr_frame_color')->nullable();
            $table->string('fr_temple_type')->nullable();
            $table->string('fr_temple_size')->nullable();
            $table->string('fr_A')->nullable();
            $table->string('fr_B')->nullable();
            $table->string('fr_ED')->nullable();
            $table->string('fr_DBL')->nullable();
            $table->string('fr_non_dig_default_seg')->nullable();
            $table->string('fr_dig_default_seg')->nullable();

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
