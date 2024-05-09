<?php

namespace App\Models;

use App\Models\Frame;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Casts\Attribute;

class FrameVariation extends Model
{
    use HasFactory;

    protected $fillable = [
        'fv_frame_id',
        'fv_eyesize',
        'fv_front_bridge',
        'fv_temple_type',
        'fv_temple_size',
        'fv_frame_color',
        'fv_A',
        'fv_B',
        'fv_ED',
        'fv_DBL',
        'fv_non_dig_default_seg',
        'fv_dig_default_seg',

        'fv_optic_legacy',
        'fv_o1_add_code',
        'fv_o1_stock_code',
        'fv_o2_add_code',
        'fv_o2_stock_code',

        'fv_dvi_frm_mfr',
        'fv_dvi_frm_style',
        'fv_dvi_frm_color',
        'fv_dvi_frm_eye',
        'fv_dvi_frm_bridge',
        'fv_dvi_frm_temple',
        'fv_dvi_frm_tpl_type',
    ];

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
