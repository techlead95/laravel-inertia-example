<?php

namespace App\Models;

use App\Models\Frame;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class FrameVariation extends Model
{
    use HasFactory;

    public function frame()
    {
        return $this->belongsTo(Frame::class, 'fv_frame_id', 'id');
    }
}
