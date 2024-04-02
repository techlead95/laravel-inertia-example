<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LensCoating>
 */
class LensCoatingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'lc_lens_coating' => fake()->word(),
            'lc_coating_group' => fake()->word(),
            'lc_o1_translation' => fake()->word(),
            'lc_dvi_translation' => fake()->word(),
            'lc_o2_add_code' => fake()->word(),
            'lc_o1_add_code' => fake()->word(),
        ];
    }
}
