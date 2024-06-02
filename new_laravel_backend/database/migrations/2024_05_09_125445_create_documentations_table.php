<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDocumentationsTable extends Migration
{
    public function up()
    {
        Schema::create('documentations', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('type')->nullable();
            $table->string('src');
            $table->foreignId('formation_id')->constrained('formations');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('documentations');
    }
}
