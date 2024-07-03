<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LensColor extends Model
{
    use HasFactory;

    protected $table = 'lens_colors';
    public $timestamps = false;
}
