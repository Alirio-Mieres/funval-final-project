<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enlace extends Model
{
    protected $table = 'enlaces';
    use HasFactory;

    protected $fillable = [
        'descripcion',
        'id_pagina',
        'id_rol',
    ];
}
