<?php

namespace App\Http\Controllers;

use App\Models\Bitacora;
use Illuminate\Http\Request;

class BitacoraController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bitacora = Bitacora::all();
        return $bitacora;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'bitacora' => 'required|string',
                'fecha' => 'required|string',
                'hora' => 'required|string',
                'ip' => 'required|string',
                'sistema_operativo' => 'required|string',
                'navegador' => 'required|string',
                'id_usuario' => 'required|exists:usuarios,id',
            ]);

            $bitacora = Bitacora::create($request->all());

            $bitacora->save();
            return $bitacora;
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
        $bitacora = Bitacora::find($id);

        if (!$bitacora) {
            return json_encode([
                'error' => 'No se encontro el bitacora'
            ]);
        }

        return $bitacora;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {

        $bitacora = Bitacora::find($id);

        if (!$bitacora) {
            return json_encode([
                'error' => 'No se encontro el bitacora'
            ]);
        }

        $bitacora->update($request->all());
        return $bitacora;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->show($id);
        $bitacora = Bitacora::destroy($id);
        return $bitacora;
    }
}
