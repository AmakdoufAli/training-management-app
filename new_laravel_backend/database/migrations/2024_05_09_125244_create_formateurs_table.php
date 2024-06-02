<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFormateursTable extends Migration
{
    public function up()
    {
        Schema::create('formateurs', function (Blueprint $table) {
            $table->id();
            $table->string('cin')->unique();
            $table->string('nom');
            $table->string('prenom');
            $table->date('dateNaiss')->nullable();
            $table->string('email')->unique();
            $table->string('tel')->nullable();
            $table->string('niveau_academique')->nullable();
            $table->foreignId('institut_id')->nullable()->constrained('instituts');
            $table->foreignId('specialite_id')->nullable()->constrained('specialites');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('formateurs');
    }
}
