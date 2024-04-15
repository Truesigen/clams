<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BurnedTokens extends Model
{
    use HasFactory;


    protected $fillable = ['user_id', 'signature', 'account', 'name', 'amount'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
