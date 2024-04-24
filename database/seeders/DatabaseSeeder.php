<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Frame;
use App\Models\FrameAddon;
use App\Models\Order;
use App\Models\FrameEdge;
use App\Models\LensStyle;
use App\Models\FrameBrand;
use App\Models\LensMaterial;
use App\Models\FrameMaterial;
use App\Models\FrameCollection;
use Illuminate\Database\Seeder;
use App\Models\FrameDefaultGroup;
use App\Models\FrameOffloadAvailability;
use App\Models\FrameVariation;
use App\Models\Lens;
use App\Models\LensCoating;
use App\Models\Misc;
use App\Models\Shield;
use App\Models\ShieldColor;
use App\Models\Tint;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(10)->create();

        LensStyle::factory()->count(5)->create();
        LensMaterial::factory()->count(5)->create();
        LensCoating::factory(3)->create();
        Lens::factory(5)->create();

        FrameEdge::factory()->count(5)->create();
        FrameMaterial::factory()->count(5)->create();
        FrameBrand::factory()->count(3)->create();
        FrameCollection::factory()->count(5)->create();
        FrameDefaultGroup::factory()->count(3)->create();
        Frame::factory()->count(2)->create()->each(function ($frame) {
            $frame->variations()->saveMany(FrameVariation::factory()->count(3)->create());
            $frame->lensMaterialLimitations()->attach(LensMaterial::all()->random(2), ['allowed' => false]);
            $frame->lensStyleLimitations()->attach(LensStyle::all()->random(2), ['allowed' => true]);
            $frame->offloadAvailabilities()->saveMany(FrameOffloadAvailability::factory(5)->create());
        });

        Shield::factory()->count(5)->create();
        ShieldColor::factory()->count(5)->create();
        FrameAddon::factory()->count(3)->create();

        Tint::factory(5)->create();
        Misc::factory(3)->create();

        Order::factory()->count(6)->create();
    }
}
