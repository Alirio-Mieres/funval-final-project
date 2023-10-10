<?php

namespace App\Http\Controllers;

use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $personas = Persona::all();
        return $personas;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                // 'primer_nombre' => 'required',
                // 'segundo_nombre' => 'required',
                // 'primer_apellido' => 'required',
                // 'segundo_apellido' => 'required',
                // 'telefono' => 'required',
                // 'bio' => 'required',
            ]);


            $persona = Persona::create($request->all());

            $persona->save();
            return $persona;
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
        $persona = Persona::find($id);

        if (!$persona) {
            return json_encode([
                'error' => 'No se encontro a la persona'
            ]);
        }

        return $persona;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $persona = Persona::find($id);

        if (!$persona) {
            return json_encode([
                'error' => 'No se encontro a la personas'
            ]);
        }

        $persona->update($request->all());
        return $persona;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->show($id);
        $persona = Persona::destroy($id);
        return $persona;
    }
}
