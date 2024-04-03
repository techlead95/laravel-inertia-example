<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lens extends Model
{
    use HasFactory;
    protected $table = 'lenses';

    protected $fillable = [
        'le_lens_mat',
        'le_lens_col',
        'le_lens_digital_style',
        'le_optic_translation',
        'le_dvi_lens_style',
        'le_dvi_mat',
        'le_dvi_color',
        'le_o2_lens_style_add_code',
        'le_o2_material_add_code',
        'le_o2_color_add_code',
        'le_o1_lens_add_code',
        'le_o1_material_add_code',
        'le_o1_color_add_code',
        'le_minimun_seg',
    ];
}
