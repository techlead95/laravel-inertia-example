<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\FrameOffloadAvailability>
 */
class FrameOffloadAvailabilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'fl_vendor' => 'Vendor ' . fake()->word(),
            'fl_vendor_allowed' => fake()->randomElement([true, false]),
            'fl_auto_offload' => fake()->word(),
        ];
    }
}
