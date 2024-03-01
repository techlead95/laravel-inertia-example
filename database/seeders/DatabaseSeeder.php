<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Frame;
use App\Models\Order;
use App\Models\FrameEdge;
use App\Models\LensStyle;
use App\Models\FrameBrand;
use App\Models\LensMaterial;
use App\Models\FrameMaterial;
use App\Models\FrameCollection;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use App\Models\FrameDefaultGroup;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->count(10)->create();

        FrameEdge::factory()->count(5)->create();
        FrameMaterial::factory()->count(5)->create();
        FrameBrand::factory()->count(3)->create();
        FrameCollection::factory()->count(5)->create();
        FrameDefaultGroup::factory()->count(3)->create();
        Frame::factory()->count(3)->create();

        LensStyle::factory()->count(5)->create();
        LensMaterial::factory()->count(5)->create();

        Order::factory()->count(6)->create();
    }
}
