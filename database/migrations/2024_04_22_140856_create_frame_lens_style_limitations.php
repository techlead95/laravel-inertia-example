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
        Schema::create('frame_lens_style_limitations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('frame_id');
            $table->unsignedBigInteger('lens_style_id');
            $table->boolean('allowed')->default(true);
            $table->string('minimum_pd')->nullable();
            $table->timestamps();

            $table->foreign('frame_id')->references('id')->on('frames')->onDelete('cascade');
            $table->foreign('lens_style_id')->references('id')->on('lens_styles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frame_lens_style_limitations');
    }
};
