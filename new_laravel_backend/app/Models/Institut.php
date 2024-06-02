<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institut extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'adresse', 'nom_directeur', 'tel_institut', 'email_institut', 'ville_id'];

    public function ville()
    {
        return $this->belongsTo(Ville::class);
    }

    public function specialites()
    {
        return $this->belongsToMany(Specialite::class, 'institut_specialites');
    }

}
