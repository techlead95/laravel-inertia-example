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
            'fr_frame_style' => 'Frame style ' . fake()->word(),
        ];
    }
}
