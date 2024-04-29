<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\LensCoating;

class Mirror extends Model
{
    use HasFactory;

    protected $fillable = [
        'mr_mirror',
        'mr_o1_translation',
        'mr_dvi_translation',
        'mr_o2_add_code',
        'mr_o1_add_code',
        'mr_setup_by',
        'mr_last_modified_by',
    ];

    public function coatings(): BelongsToMany
    {
        return $this->belongsToMany(LensCoating::class, 'coating_mirror');
    }
}
