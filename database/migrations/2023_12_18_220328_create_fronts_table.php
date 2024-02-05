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
        Schema::create('fronts', function (Blueprint $table) {
            $table->id();
            $table->string('fr_style');
            $table->string('fr_color');
            $table->string('fr_eye');
            $table->string('fr_bridge');
            $table->string('fr_color_desc');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fronts');
    }
};
