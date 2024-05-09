<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use App\Models\Lens;

class LensCoating extends Model
{
    use HasFactory;
    protected $table = 'lens_coatings';
    protected $fillable = [
        'lc_lens_coating',
        'lc_coating_group',
        'lc_o1_translation',
        'lc_dvi_translation',
        'lc_o2_add_code',
        'lc_o1_add_code',
        'lc_tintable'
    ];

    public function lenses(): BelongsToMany
    {
        return $this->belongsToMany(Lens::class, 'lens_coating');
    }

    public function mirrors(): BelongsToMany
    {
        return $this->belongsToMany(Mirror::class, 'coating_mirror');
    }
}
