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
        Schema::create('style_materials', function (Blueprint $table) {
            $table->id();
            $table->string('sm_stylemtl-frame-style');

            $table->string('sm_stylemtl-allow-mtrl01');
            $table->string('sm_stylemtl-allow-mtrl02');
            $table->string('sm_stylemtl-allow-mtrl03');
            $table->string('sm_stylemtl-allow-mtrl04');
            $table->string('sm_stylemtl-allow-mtrl05');
            $table->string('sm_stylemtl-allow-mtrl06');
            $table->string('sm_stylemtl-allow-mtrl07');
            $table->string('sm_stylemtl-allow-mtrl08');
            $table->string('sm_stylemtl-allow-mtrl09');
            $table->string('sm_stylemtl-allow-mtrl10');
            $table->string('sm_stylemtl-allow-mtrl11');
            $table->string('sm_stylemtl-allow-mtrl12');
            $table->string('sm_stylemtl-allow-mtrl13');
            $table->string('sm_stylemtl-allow-mtrl14');
            $table->string('sm_stylemtl-allow-mtrl15');
            $table->string('sm_stylemtl-allow-mtrl16');
            $table->string('sm_stylemtl-allow-mtrl17');
            $table->string('sm_stylemtl-allow-mtrl18');
            $table->string('sm_stylemtl-allow-mtrl19');
            $table->string('sm_stylemtl-allow-mtrl20');

            $table->string('sm_last-maint-date');
            $table->string('sm_last-maint-user');
            $table->decimal('sm_stylemtl-default-base');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('style_materials');
    }
};
