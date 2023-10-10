<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuario = Usuario::all();
        return $usuario;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'usuario' => 'required|email',
                'clave' => 'required',
            ]);

            $persona = new Persona();
            $persona->save();
            $id_persona = $persona->id;

            $usuario = new Usuario();
            $usuario->usuario = $request->usuario;
            $usuario->clave = $request->clave;
            $usuario->habilitado = true;
            $usuario->id_persona = $id_persona;
            $usuario->id_rol = 1;
            $usuario->save();

            return $usuario;
        } catch (\Throwable $th) {
            return json_encode([
                'error' => $th->getMessage()
            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $usuario = Usuario::find($id);

        if (!$usuario) {
            return json_encode([
                'error' => 'No se encontro el alumno'
            ]);
        }

        return $usuario;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $usuario = Usuario::find($id);

        if (!$usuario) {
            return json_encode([
                'error' => 'No se encontro el alumno'
            ]);
        }

        $usuario->update($request->all());
        return $usuario;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->show($id);
        $usuario = Usuario::destroy($id);
        return $usuario;
    }
}
