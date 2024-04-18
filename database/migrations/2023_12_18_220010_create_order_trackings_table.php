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
        Schema::create('order_trackings', function (Blueprint $table) {
            $table->id();
            $table->foreignUuid('order_id');
            $table->integer('ot_legacy_order_number')->nullable();
            $table->integer('ot_portal_order_number')->nullable();
            $table->string('ot_station_description')->nullable();
            $table->string('ot_description_text_1')->nullable();
            $table->string('ot_description_text_2')->nullable();
            $table->integer('ot_tracking_no')->nullable();
            $table->string('ot_status');
            $table->integer('ot_track_date')->nullable();
            $table->integer('ot_track_time')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_trackings');
    }
};
