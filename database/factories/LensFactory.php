<?php

namespace Database\Factories;

use App\Models\LensMaterial;
use App\Models\LensStyle;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lens>
 */
class LensFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $lensMaterials = LensMaterial::pluck('id')->toArray();
        $lensStyles = LensStyle::pluck('id')->toArray();

        return [
            'le_lens_mat' => fake()->randomElement($lensMaterials),
            'le_lens_col' => fake()->randomElement(['Green', 'Blue', 'Red']),
            'le_lens_style' => fake()->randomElement($lensStyles)
        ];
    }
}
