<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animateur extends Model
{
    use HasFactory;

    protected $fillable = ['secteur', 'nom', 'prenom', 'tel', 'email', 'specialite_id'];

    public function specialite()
    {
        return $this->belongsTo(Specialite::class);
    }

}
