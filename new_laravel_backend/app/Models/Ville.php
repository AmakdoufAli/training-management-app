<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ville extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'codeP', 'region_id'];

    public function region()
    {
        return $this->belongsTo(Region::class);
    }


    public function formations()
    {
        return $this->hasMany(Formation::class);
    }
}
