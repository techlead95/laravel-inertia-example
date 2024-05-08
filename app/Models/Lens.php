<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\LensCoating;

class Lens extends Model
{
    use HasFactory;
    protected $table = 'lenses';

    //protected $with = ['style', 'material'];

    protected $fillable = [
        'le_lens_mat',
        'le_lens_col',
        'le_lens_style',
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
        'le_upper_add',
        'le_ocht',
    ];

    public function coatings(): BelongsToMany
    {
        return $this->belongsToMany(LensCoating::class, 'lens_coating');
    }

    public function style()
    {
        return $this->hasOne(LensStyle::class, 'id', 'le_lens_style');
    }

    public function material()
    {
        return $this->hasOne(LensMaterial::class, 'id', 'le_lens_mat');
    }
}
