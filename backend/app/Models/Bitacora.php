<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bitacora extends Model
{   
    protected $table = 'bitacoras';
    use HasFactory;

    protected $fillable = [
        'bitacora',
        'fecha',
        'hora',
        'ip',
        'sistema_operativo',
        'navegador',
        'id_usuario'
    ];
}
