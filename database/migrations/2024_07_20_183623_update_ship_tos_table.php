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
        Schema::table('ship_tos', function (Blueprint $table) {
            $table->string('st_order_by_name')->nullable();
            $table->string('st_bill_to_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('ship_tos', function (Blueprint $table) {
            $table->dropColumn('st_order_by_name');
            $table->dropColumn('st_bill_to_name');
        });
    }
};
