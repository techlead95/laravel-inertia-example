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
        Schema::create('lens_styles', function (Blueprint $table) {
            $table->id();
            $table->string('ls_lenstyl_std_seq')->nullable();
            $table->string('ls_lenstyl_base_seq')->nullable();
            $table->string('ls_lenstyl_lens_style');
            $table->string('ls_lenstyl_type')->nullable();
            $table->string('ls_lenstyl_vision')->nullable();
            $table->string('ls_lenstyl_seg')->nullable();
            $table->string('ls_lenstyl_base_desc')->nullable();
            $table->string('ls_lenstyl_style_desc')->nullable();
            $table->string('ls_lenstyl_std_desc')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lens_styles');
    }
};
