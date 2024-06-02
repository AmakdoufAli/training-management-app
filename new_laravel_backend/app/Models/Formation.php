<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formation extends Model
{
    use HasFactory;

    protected $hidden = ['created_at', 'updated_at'];

    protected $fillable = ['titre', 'nbr_heures', 'nbr_jours', 'date_debut', 'date_fin', 'adresse', 'ville_id', 'etat', 'specialite_id', 'animateur_id'];

    public function ville()
    {
        return $this->belongsTo(Ville::class);
    }

    public function animateur()
    {
        return $this->belongsTo(Animateur::class);
    }

    public function specialite()
    {
        return $this->belongsTo(Specialite::class);
    }

    public function formateurs()
    {
        return $this->belongsToMany(Formateur::class, 'formateurs_formations');
    }
}
