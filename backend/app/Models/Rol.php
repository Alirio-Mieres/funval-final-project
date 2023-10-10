<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rol extends Model
{
    //specifie the table name
    protected $table = 'roles';

    use HasFactory;

    protected $fillable =  [
        'rol'
    ];
}
