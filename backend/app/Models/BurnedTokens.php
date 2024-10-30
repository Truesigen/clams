<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class BurnedTokens extends Model
{
    use HasFactory, SoftDeletes;


    protected $fillable = ['user_id', 'signature', 'account', 'mint', 'name', 'amount'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
