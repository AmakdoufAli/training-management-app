<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formateur extends Model
{
    use HasFactory;

    protected $fillable = ['cin', 'nom', 'prenom', 'dateNaiss', 'email', 'tel', 'niveau_academique', 'institut_id', 'specialite_id'];

    public function institut()
    {
        return $this->belongsTo(Institut::class);
    }

    public function specialite()
    {
        return $this->belongsTo(Specialite::class);
    }

    public function formations()
    {
        return $this->belongsToMany(Formation::class, 'formateurs_formations');
    }
}
