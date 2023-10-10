import React, { useState } from "react";
import { createRoles } from "../api/roles-service";
import { useNavigate } from "react-router-dom";

export const CreateRolForm = () => {

  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRole = {
      rol: descripcion,
    };

    // Llamar a la función de creación de roles del padre
    createRoles(newRole);

    navigate("/roles", {
      replace: true,
    });
  };

  const handleCancel = () => {
    navigate("/roles", {
      replace: true,
    });
  }

  return (
    <div className="mt-4 flex justify-center items-center flex-col w-full ">
      <h2 className="text-2xl font-semibold mb-2 ">Crear Nuevo Rol</h2>
      <form onSubmit={handleSubmit} className="border-4 rounded p-8 w-[400px] h-[200px]">
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción del Rol
          </label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Crear Rol
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ml-2 hover:bg-gray-400"
            onClick={handleCancel} // Limpiar el campo de descripción
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
