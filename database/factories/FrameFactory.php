<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Frame>
 */
class FrameFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fr_frame_name' => fake()->word(),
            'fr_eyesize' => fake()->numberBetween(20, 60),
            'fr_temple_type' => fake()->word(),
            'fr_temple_size' => fake()->numberBetween(100, 200),
            'fr_frame_color' => fake()->colorName(),
            'fr_A' => fake()->numberBetween(20, 60),
            'fr_B' => fake()->numberBetween(20, 60),
            'fr_ED' => fake()->numberBetween(100, 200),
            'fr_DBL' => fake()->numberBetween(100, 200),
            'fr_non_dig_default_seg' => fake()->word(),
            'fr_dig_default_seg' => fake()->numberBetween(100, 200),
        ];
    }
}
