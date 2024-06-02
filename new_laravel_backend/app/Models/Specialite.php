<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialite extends Model
{
    use HasFactory;

    protected $fillable = ['nom'];

    public function instituts()
    {
        return $this->belongsToMany(Institut::class, 'institut_specialites');
    }

}
