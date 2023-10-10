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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('usuario', 100)->unique();
            $table->string('clave', 100);
            $table->boolean('habilitado');
            $table->foreignId('id_persona')->constrained('personas')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('id_rol')->constrained('roles')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
