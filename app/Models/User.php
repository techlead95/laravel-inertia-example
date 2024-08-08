<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\HasMany;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'ship_to_account',
        'ship_to_id',
        'business_name',
        'address1',
        'address2',
        'po_box',
        'city',
        'state',
        'zip',
        'country',
        'nick_name',
        'is_admin',
        'salesforce_id',
        'azure_id',
        'approved',
        'first_name',
        'last_name',
        'salesforce_username',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'approved' => 'boolean',
        'is_admin' => 'boolean'
    ];
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }
    public function shipTos(): HasMany
    {
        return $this->hasMany(ShipTo::class);
    }
    //default ship to:
    public function shipTo(): BelongsTo
    {
        return $this->belongsTo(ShipTo::class);
    }
}
