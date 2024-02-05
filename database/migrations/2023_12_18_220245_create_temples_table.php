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
        Schema::create('temples', function (Blueprint $table) {
            $table->id();
            $table->string('te_frame_style');
            $table->string('te_eye');
            $table->string('te_bridge');
            $table->string('te_color');
            $table->string('te_temp_key_rest');
            $table->string('te_temple_type');
            $table->string('te_temple_size');
            $table->string('te_temple_desc');
            $table->string('te_std_ind');
            $table->string('te_single_key');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('temples');
    }
};
