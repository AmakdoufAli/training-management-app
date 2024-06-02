<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $primaryKey = 'id_certificat';
    public $timestamps = false;
    use HasFactory;
}
