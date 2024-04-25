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
            'fo_vendor' => 'Vendor ' . fake()->word(),
            'fo_vendor_allowed' => fake()->randomElement([true, false]),
            'fo_auto_offload' => fake()->word(),
        ];
    }
}
