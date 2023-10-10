<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pagina extends Model
{
    protected $table = 'paginas';
    use HasFactory;

    protected $fillable = [
        'url',
        'estado',
        'nombre',
        'descripcion',
        'icono',
        'tipo',
    ];
}
