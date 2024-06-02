<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCertificationsTable extends Migration
{
    public function up()
    {
        Schema::create('certifications', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->date('date_delivrance');
            $table->string('organisme');
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('certifications');
    }
}
