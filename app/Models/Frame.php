<?php

namespace App\Models;

use App\Models\FrameBrand;
use App\Models\FrameCollection;
use App\Models\FrameDefaultGroup;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Frame extends Model
{
    use HasFactory;

    protected $fillable = [
        'fr_frame_name',
        'fr_brand',
        'fr_collection',
        'fr_frame_group',
        'fr_edge',
        'fr_material',
        'fr_min_edge',
        'fr_base_curve_min',
        'fr_base_curve_max',
        'fr_min_near_pd',
        'fr_non_conductive',
        'fr_tight_fit',
        'fr_wrap',
        'fr_notes',
    ];

    public function brand()
    {
        return $this->belongsTo(FrameBrand::class, 'fr_brand', 'fb_brand');
    }

    public function collection()
    {
        return $this->belongsTo(FrameCollection::class, 'fr_collection', 'fc_collection');
    }

    public function group()
    {
        return $this->belongsTo(FrameDefaultGroup::class, 'fr_frame_group', 'fd_group');
    }

    public function variations()
    {
        return $this->hasMany(FrameVariation::class, 'fv_frame_id', 'id');
    }

    public function lensMaterialLimitations()
    {
        return $this->belongsToMany(LensMaterial::class, 'frame_lens_material_limitations')->withPivot('allowed');
    }

    public function lensStyleLimitations()
    {
        return $this->belongsToMany(LensStyle::class, 'frame_lens_style_limitations')->withPivot('allowed', 'minimum_pd');
    }

    public function offloadAvailabilities()
    {
        return $this->hasMany(FrameOffloadAvailability::class, 'fo_frame_id');
    }
}
