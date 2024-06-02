<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimateursTable extends Migration
{
    public function up()
    {
        Schema::create('animateurs', function (Blueprint $table) {
            $table->id();
            $table->string('secteur')->nullable();
            $table->string('nom');
            $table->string('prenom');
            $table->string('tel', 20)->nullable();
            $table->string('email')->unique();
            $table->foreignId('specialite_id')->constrained('specialites');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('animateurs');
    }
}
