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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('pr_prod_code');
            $table->string('pr_prod_desc');
            $table->decimal('pr_unit_cost');
            $table->string('pr_item_type');
            $table->string('pr_round_ind');
            $table->integer('pr_branch_acct');
            $table->integer('pr_obsolete_code');
            $table->string('pr_lens_mtrl');
            $table->string('pr_lens_finish_flag');
            $table->integer('pr_lens_diam');
            $table->integer('pr_lens_finish_thk');
            $table->integer('pr_lens_curve');
            $table->integer('pr_inside_curve');
            $table->string('pr_vendor_initials');
            $table->integer('pr_offload_loc');
            $table->decimal('pr_reg_stk_price');
            $table->decimal('pr_dist_stk_price');
            $table->integer('pr_sbdge_fm_date');
            $table->string('pr_price_group_code');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
