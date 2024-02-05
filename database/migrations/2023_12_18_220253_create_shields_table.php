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
        Schema::create('shields', function (Blueprint $table) {
            $table->id();
            $table->string('sh_frame_style');
            $table->string('sh_eye_size');
            $table->string('sh_ss_type');
            $table->string('sh_ss_desc');
            $table->string('sh_preasm_ind');

            $table->string('sh_ss_type2');
            $table->string('sh_ss_style');
            $table->string('sh_ss_eye');
            $table->string('sh_single_key');
            $table->string('sh_ss_hide');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shields');
    }
};
