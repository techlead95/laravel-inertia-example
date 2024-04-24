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
        Schema::create('frame_offload_availabilities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fo_frame_id')->nullable();
            $table->string('fo_vendor');
            $table->boolean('fo_vendor_allowed')->default(false);
            $table->string('fo_auto_offload');
            $table->timestamps();

            $table->foreign('fo_frame_id')->references('id')->on('frames')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('frame_offload_availabilities');
    }
};
