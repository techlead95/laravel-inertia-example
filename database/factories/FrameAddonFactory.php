<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FrameAddon>
 */
class FrameAddonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fa_UPC' => 'UPC ' . fake()->word(),
            'fa_side_shield_type' => 'UPC ' . fake()->word(),
            'fa_side_shield_color' => 'UPC ' . fake()->word(),
            'fa_legacy_clc' => 'UPC ' . fake()->word(),
            'fa_legacy_ss_code' => 'UPC ' . fake()->word(),
            'fa_dvi_services_code' => 'UPC ' . fake()->word(),
            'fa_dvi_service_code' => 'UPC ' . fake()->word(),
            'fa_default_case' => 'UPC ' . fake()->word(),
        ];
    }
}
