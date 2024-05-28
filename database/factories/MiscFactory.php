<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Misc>
 */
class MiscFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'mi_item_name' => fake()->unique()->word(),
            'mi_o1_translation' => fake()->word(),
            'mi_dvi_translation' => fake()->word(),
            'mi_o2_add_code' => fake()->word(),
            'mi_o1_add_code' => fake()->word(),
        ];
    }
}
