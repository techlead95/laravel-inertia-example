<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tint extends Model
{
    use HasFactory;
    protected $table = 'tint';
    protected $fillable = [
        'ti_color',
        'ti_group',
        'ti_lower_range',
        'ti_upper_range',
        'ti_default_percent',
        'ti_o1_translation',
        'ti_dvi_tint_drop',
        'ti_dvi_tint_color',
        'ti_o2_coating_add_code',
        'ti_o1_coating_add_code',
    ];
}
