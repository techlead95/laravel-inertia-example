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
        Schema::create('frame_limitations', function (Blueprint $table) {
            $table->id();
            $table->string('fl_material');
            $table->string('fl_material_allowed');
            $table->string('fl_lens_style');
            $table->string('fl_lens_style_allowed');
            $table->string('fl_min_pd');
            $table->string('fl_vendor');
            $table->string('fl_vendor_allowed');
            $table->string('fl_auto_offload');
            
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
