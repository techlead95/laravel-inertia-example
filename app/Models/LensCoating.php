<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LensCoating extends Model
{
    use HasFactory;
    protected $table = 'lens_coatings';
    protected $fillable = [
        'lc_lens_coating',
        'lc_coating_group',
        'lc_o1_translation',
        'lc_dvi_translation',
        'lc_o2_add_code',
        'lc_o1_add_code'
    ];
}
