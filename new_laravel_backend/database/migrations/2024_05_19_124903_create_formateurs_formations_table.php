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
        Schema::create('formateurs_formations', function (Blueprint $table) {
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->foreignId('formation_id')->constrained('formations');
            $table->primary(['formateur_id', 'formation_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formateurs_formations');
    }
};
