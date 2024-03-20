<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shield>
 */
class ShieldFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'sh_frame_style' => 'Style ' . fake()->word(),
            'sh_eye_size' => 'Size ' . fake()->word(),
            'sh_ss_type' => 'Type ' . fake()->word(),
            'sh_ss_desc' => 'Desc ' . fake()->word(),
            'sh_preasm_ind' => 'Ind ' . fake()->word(),
            'sh_ss_type2' => 'Typ2 ' . fake()->word(),
            'sh_ss_style' => 'Style ' . fake()->word(),
            'sh_ss_eye' => 'Eye ' . fake()->word(),
            'sh_single_key' => 'Key ' . fake()->word(),
            'sh_ss_hide' => 'Hide ' . fake()->word(),
        ];
    }
}
