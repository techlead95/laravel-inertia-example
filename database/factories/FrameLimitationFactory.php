<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FrameLimitation>
 */
class FrameLimitationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fl_material' => 'Material ' . fake()->word(),
            'fl_material_allowed' => fake()->randomElement(['Yes', 'No']),
            'fl_lens_style' => 'Style ' . fake()->word(),
            'fl_lens_style_allowed' => fake()->randomElement(['Yes', 'No']),
            'fl_min_pd' => fake()->randomElement(['60mm', '62mm', '65mm']),
            'fl_vendor' => 'Vendor ' . fake()->word(),
            'fl_vendor_allowed' => fake()->randomElement(['Yes', 'No']),
            'fl_auto_offload' => fake()->word(),
        ];
    }
}
