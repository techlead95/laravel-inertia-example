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
        ];
    }
}
