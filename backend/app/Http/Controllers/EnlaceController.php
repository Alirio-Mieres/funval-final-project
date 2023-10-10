<?php

namespace App\Http\Controllers;

use App\Models\Enlace;
use Illuminate\Http\Request;

class EnlaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $enlace = Enlace::all();
        return $enlace;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'descripcion' => 'required|string',
                'id_pagina' => 'required|exists:paginas,id',
                'id_rol' => 'required|exists:roles,id',
            ]);

            $enlace = Enlace::create($request->all());

            $enlace->save();
            return $enlace;
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
        $enlace = Enlace::find($id);

        if (!$enlace) {
            return json_encode([
                'error' => 'No se encontro el enlace'
            ]);
        }

        return $enlace;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        
        $request->validate([
            'descripcion' => 'string',
            'id_pagina' => 'exists:paginas,id',
            'id_rol' => 'exists:roles,id',
        ]);

        $enlace = Enlace::find($id);

        if (!$enlace) {
            return json_encode([
                'error' => 'No se encontro el enlace'
            ]);
        }

        $enlace->update($request->all());
        return $enlace;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->show($id);
        $enlace = Enlace::destroy($id);
        return $enlace;
    }
}
