<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participation extends Model
{
    use HasFactory;

    protected $fillable = ['formation_id', 'formateur_id', 'etat'];

    public function formateur(){
        return $this->belongsTo(Formateur::class);
    }

    public function formation(){
        return $this->belongsTo(Formation::class);
    }

}
