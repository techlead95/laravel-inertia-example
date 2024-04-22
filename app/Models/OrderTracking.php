<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderTracking extends Model
{
    use HasFactory;
    protected $table = 'order_trackings';
    protected $fillable = [
        'ot_status',
        'ot_portal_order_number'
    ];
    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
