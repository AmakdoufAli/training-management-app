<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVillesTable extends Migration
{
    public function up()
    {
        Schema::create('villes', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->unique();
            $table->integer('codeP');
            $table->foreignId('region_id')->constrained('regions');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('villes');
    }
}
