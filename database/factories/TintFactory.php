<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tint>
 */
class TintFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'ti_color' => 'Color ' . fake()->word(),
            'ti_group' => 'Group ' . fake()->word(),
            'ti_lower_range' => (string)fake()->numberBetween(1, 5),
            'ti_upper_range' => (string)fake()->numberBetween(6, 10),
            'ti_default_percent' => (string)fake()->numberBetween(30, 100),
            'ti_o1_translation' => fake()->word(),
            'ti_dvi_tint_drop' => fake()->word(),
            'ti_dvi_tint_color' => fake()->word(),
            'ti_o2_coating_add_code' => fake()->word(),
            'ti_o1_coating_add_code' => fake()->word(),
        ];
    }
}
