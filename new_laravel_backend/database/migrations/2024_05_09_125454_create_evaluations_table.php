<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationsTable extends Migration
{
    public function up()
    {
        Schema::create('evaluations', function (Blueprint $table) {
            $table->id();
            $table->integer('note');
            $table->string('commentaire')->nullable();
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->foreignId('formations_id')->constrained('formations');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('evaluations');
    }
}
