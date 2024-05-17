<?php

namespace Database\Factories;

use App\Models\Shield;
use App\Models\ShieldColor;
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
        $shields = Shield::pluck('sh_ss_type')->toArray();
        $shieldColors = ShieldColor::pluck('ss_color')->toArray();

        return [
            'fa_UPC' => 'UPC ' . fake()->word(),
            'fa_side_shield_type' => fake()->randomElement($shields),
            'fa_side_shield_color' => fake()->randomElement($shieldColors),
            'fa_legacy_clc' => 'Clc ' . fake()->word(),
            'fa_legacy_ss_code' => 'Legacy Ss ' . fake()->word(),
            'fa_dvi_services_code' => 'Services ' . fake()->word(),
            'fa_dvi_service_code' => 'Service ' . fake()->word(),
            'fa_default_case' => 'Case ' . fake()->word(),
        ];
    }
}
