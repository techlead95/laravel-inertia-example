<?php

namespace Database\Factories;

use App\Models\FrameBrand;
use App\Models\FrameCollection;
use App\Models\FrameDefaultGroup;
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
        $frameBrands = FrameBrand::pluck('fb_brand')->toArray();
        $frameCollections = FrameCollection::pluck('fc_collection')->toArray();
        $frameDefaultGroups = FrameDefaultGroup::pluck('fd_group')->toArray();

        return [
            'fr_frame_name' => 'Frame ' . fake()->unique()->word(),
            'fr_brand' => fake()->randomElement($frameBrands),
            'fr_collection' => fake()->randomElement($frameCollections),
            'fr_frame_group' => fake()->randomElement($frameDefaultGroups),
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
