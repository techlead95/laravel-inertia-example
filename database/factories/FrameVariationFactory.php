<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Frame>
 */
class FrameVariationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fv_eyesize' => 'Eyesize ' . fake()->word(),
            'fv_front_bridge' => 'Bridge ' . fake()->word(),
            'fv_frame_color' => 'Color ' . fake()->word(),
            'fv_temple_type' => fake()->word(),
            'fv_temple_size' => fake()->word(),
            'fv_A' => fake()->word(),
            'fv_B' => fake()->word(),
            'fv_ED' => fake()->word(),
            'fv_DBL' => fake()->word(),
            'fv_non_dig_default_seg' => fake()->word(),
            'fv_dig_default_seg' => fake()->word(),

            'fv_optic_legacy' => fake()->word(),
            'fv_o1_add_code' => fake()->word(),
            'fv_o1_stock_code' => fake()->word(),
            'fv_o2_add_code' => fake()->word(),
            'fv_o2_stock_code' => fake()->word(),

            'fv_dvi_frm_mfr' => fake()->word(),
            'fv_dvi_frm_style' => fake()->word(),
            'fv_dvi_frm_color' => fake()->word(),
            'fv_dvi_frm_eye' => fake()->word(),
            'fv_dvi_frm_bridge' => fake()->word(),
            'fv_dvi_frm_temple' => fake()->word(),
            'fv_dvi_frm_tpl_type' => fake()->word(),
        ];
    }
}
