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
            $table->string('fa_UPC')->nullable();
            $table->string('fa_side_shield_type')->nullable();
            $table->string('fa_side_shield_color')->nullable();
            $table->string('fa_legacy_clc')->nullable();
            $table->string('fa_legacy_ss_code')->nullable();
            $table->string('fa_dvi_services_code')->nullable();
            $table->string('fa_dvi_service_code')->nullable();
            $table->string('fa_default_case')->nullable();

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
