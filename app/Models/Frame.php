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
        'fr_frame_style'
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
}
