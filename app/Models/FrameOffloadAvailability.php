<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrameOffloadAvailability extends Model
{
    use HasFactory;

    protected $fillable = [
        'fo_frame_id',
        'fo_vendor',
        'fo_vendor_allowed',
        'fo_auto_offload',
    ];

    public function frame()
    {
        return $this->belongsTo(Frame::class, 'fo_frame_id');
    }
}
