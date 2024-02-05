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
        Schema::create('styles', function (Blueprint $table) {
            $table->id();
            $table->string('st_styleid-style');
            $table->string('st_styleid-eye');
            $table->string('st_styleid-bridge');
            $table->string('st_styleid-color');
            $table->string('st_styleid-tmpl-type');
            $table->string('st_styleid-tmpl-size');
            $table->string('st_styleid-case');
            $table->string('st_styleid-vend-desc');

            $table->string('st_2k-vendor');
            $table->string('st_2k-group');
            $table->string('st_2k-style');

            $table->string('st_3k-vendor');
            $table->string('st_3k-group');
            $table->string('st_3k-style');
            $table->string('st_styleid-street-only');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('styles');
    }
};
