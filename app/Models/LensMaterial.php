<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LensMaterial extends Model
{
    use HasFactory;

    public function frames()
    {
        return $this->belongsToMany(Frame::class)->withPivot('allowed');
    }
}
