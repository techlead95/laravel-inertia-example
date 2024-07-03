<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ShipTo extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'st_account',
        'st_name',
        'st_order_by',
        'st_bill_to',
        'st_order_by_name',
        'st_bill_to_name',
    ];
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
