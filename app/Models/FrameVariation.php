<?php

namespace App\Models;

use App\Models\Frame;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Casts\Attribute;

class FrameVariation extends Model
{
    use HasFactory;

    public function frame()
    {
        return $this->belongsTo(Frame::class, 'fv_frame_id', 'id');
    }

    public $appends = ['fv_size'];
    public function getFvSizeAttribute()
    {
        return $this->fv_eyesize . '-' . $this->fv_front_bridge . '-' . $this->fv_temple_size;
    }
}
