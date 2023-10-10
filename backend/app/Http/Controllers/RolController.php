<?php

namespace App\Http\Controllers;

use App\Models\Rol;
use Illuminate\Http\Request;

class RolController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $roles = Rol::all();
        return $roles;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                'rol' => 'required',
            ]);


            $role = Rol::create([
                'rol' => $request->rol,
            ]);

            $role->save();
            return $role;
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
        $role = Rol::find($id);

        if (!$role) {
            return json_encode([
                'error' => 'No se encontro el rol'
            ]);
        }

        return $role;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $role = Rol::find($id);

        if (!$role) {
            return json_encode([
                'error' => 'No se encontro el rol'
            ]);
        }

        $role->update($request->all());
        return $role;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->show($id);
        $role = Rol::destroy($id);
        return $role;
    }
}
