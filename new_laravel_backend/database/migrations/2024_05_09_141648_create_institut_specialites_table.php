<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('institut_specialites', function (Blueprint $table) {
            $table->foreignId('institut_id')->constrained('instituts');
            $table->foreignId('specialite_id')->constrained('specialites');
            $table->primary(['institut_id', 'specialite_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('institut_specialites');
    }
};
