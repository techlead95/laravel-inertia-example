<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrameAddon extends Model
{
    use HasFactory;

    protected $table = 'frame_addon';

    protected $fillable = [
        'fa_UPC',
        'fa_side_shield_type',
        'fa_side_shield_color',
        'fa_legacy_clc',
        'fa_legacy_ss_code',
        'fa_dvi_services_code',
        'fa_dvi_service_code',
        'fa_default_case',
    ];
}
