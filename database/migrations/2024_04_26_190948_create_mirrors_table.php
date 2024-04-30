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
        Schema::create('mirrors', function (Blueprint $table) {
            $table->id();
            $table->string('mr_mirror');
            $table->string('mr_o1_translation')->nullable();
            $table->string('mr_dvi_translation')->nullable();
            $table->string('mr_o2_add_code')->nullable();
            $table->string('mr_o1_add_code')->nullable();
            $table->string('mr_setup_by')->nullable();
            $table->string('mr_last_modified_by')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mirrors');
    }
};
