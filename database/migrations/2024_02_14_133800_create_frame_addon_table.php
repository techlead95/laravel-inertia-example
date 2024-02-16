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
        Schema::create('frame_addon', function (Blueprint $table) {
            $table->id();
            $table->string('fa_UPC');
            $table->string('fa_side_shield_type');
            $table->string('fa_side_shield_color');
            $table->string('fa_legacy_clc');
            $table->string('fa_legacy_ss_code');
            $table->string('fa_dvi_services_code');
            $table->string('fa_dvi_service_code');
            $table->string('fa_default_case');
            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frame_addon');
    }
};
