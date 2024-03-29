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
        Schema::create('tint', function (Blueprint $table) {
            $table->id();
            $table->string('ti_color');
            $table->string('ti_group');
            $table->string('ti_lower_range');
            $table->string('ti_upper_range');
            $table->string('ti_default_percent');
            $table->string('ti_o1_translation');
            $table->string('ti_dvi_tint_drop');
            $table->string('ti_dvi_tint_color');
            $table->string('ti_o2_coating_add_code');
            $table->string('ti_o1_coating_add_code');
            $table->string('ti_setup_by');
            $table->string('ti_modified_by');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tint');
    }
};
