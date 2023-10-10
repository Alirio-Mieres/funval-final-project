<?php

namespace App\Http\Controllers;

use App\Models\Pagina;
use Illuminate\Http\Request;

class PaginaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pagina = Pagina::all();
        return $pagina;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'url' => 'required|string',
                'estado' => 'required|string',
                'nombre' => 'required|string',
                'descripcion' => 'required|string',
                'icono' => 'required|string',
                'tipo' => 'required|string',
            ]);

            $pagina = Pagina::create($request->all());

            $pagina->save();
            return $pagina;
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
        $pagina = Pagina::find($id);

        if (!$pagina) {
            return json_encode([
                'error' => 'No se encontro la pagina'
            ]);
        }

        return $pagina;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        // $request->validate([
        //     'url' => 'string',
        //     'estado' => 'string',
        //     'nombre' => 'string',
        //     'descripcion' => 'string',
        //     'icono' => 'string',
        //     'tipo' => 'string',
        // ]);

        $pagina = Pagina::find($id);

        if (!$pagina) {
            return json_encode([
                'error' => 'No se encontro la pagina'
            ]);
        }

        $pagina->update($request->all());
        return $pagina;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->show($id);
        $pagina = Pagina::destroy($id);
        return $pagina;
    }
}
