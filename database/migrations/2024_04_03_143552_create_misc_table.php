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
        Schema::create('misc', function (Blueprint $table) {
            $table->id();
            $table->string('mi_item_name');
            $table->string('mi_setup_by')->nullable();
            $table->string('mi_modified_by')->nullable();
            $table->string('mi_o1_translation');
            $table->string('mi_dvi_translation');
            $table->string('mi_o2_add_code');
            $table->string('mi_o1_add_code');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('misc');
    }
};
