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
        Schema::create('ship_tos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->required();
            $table->string('st_account');
            $table->string('st_name');
            $table->string('st_order_by')->nullable();
            $table->string('st_bill_to')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ship_tos');
    }
};
