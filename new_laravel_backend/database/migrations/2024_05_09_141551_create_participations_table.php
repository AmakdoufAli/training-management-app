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
        Schema::create('participations', function (Blueprint $table) {
            $table->foreignId('formations_id')->constrained('formations');
            $table->foreignId('formateur_id')->constrained('formateurs');
            $table->boolean('etat')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('participations');
    }
};
