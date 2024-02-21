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
        Schema::create('lens_materials', function (Blueprint $table) {
            $table->id();
            $table->string('lm_lens_style')->nullable();
            $table->string('lm_lens_material');
            $table->string('lm_lens_color')->nullable();
            $table->string('lm_lens_precoat')->nullable();
            $table->string('lm_material_desc')->nullable();
            $table->string('lm_color_desc')->nullable();
            $table->string('lm_precoat_desc')->nullable();
            $table->string('lm_single_matl_rec')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lens_materials');
    }
};
