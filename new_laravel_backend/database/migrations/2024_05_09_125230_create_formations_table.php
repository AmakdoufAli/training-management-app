<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormationsTable extends Migration
{
    public function up()
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->integer('nbr_heures');
            $table->integer('nbr_jours');
            $table->date('date_debut');
            $table->date('date_fin');
            $table->string('adresse')->nullable();
            $table->foreignId('ville_id')->constrained('villes');
            $table->boolean('etat')->default(false);
            $table->foreignId('animateur_id')->constrained('animateurs');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('formations');
    }
}
