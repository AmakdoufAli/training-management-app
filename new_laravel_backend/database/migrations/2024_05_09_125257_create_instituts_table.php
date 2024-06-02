<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInstitutsTable extends Migration
{
    public function up()
    {
        Schema::create('instituts', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->unique();
            $table->string('adresse')->nullable();
            $table->string('nom_directeur')->nullable();
            $table->string('tel_institut', 20)->nullable();
            $table->string('email_institut');
            $table->foreignId('ville_id')->constrained('villes');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('instituts');
    }
}
