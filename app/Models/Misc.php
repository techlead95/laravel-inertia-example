<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Misc extends Model
{
    use HasFactory;
    protected $table = 'misc';
    protected $fillable = [
        'mi_item_name',
        'mi_o1_translation',
        'mi_dvi_translation',
        'mi_o2_add_code',
        'mi_o1_add_code',
    ];
}
