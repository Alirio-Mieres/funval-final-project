import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createEnlace } from "../api/enlaces-service";

export const CreateEnlanceForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const { descripcion, id_pagina, id_rol } = e.target.elements;

    const newEnlances = {
      descripcion: descripcion.value,
      id_pagina: id_pagina.value,
      id_rol: id_rol.value,
    };

    createEnlace(newEnlances);

    navigate("/enlaces", {
      replace: true,
    });
  };

  const handleCancel = () => {
    navigate("/roles", {
      replace: true,
    });
  };

  return (
    <div className="mt-4 flex justify-center items-center flex-col w-full ">
      <h2 className="text-2xl font-semibold mb-2 ">Crear Nuevo Enlace</h2>
      <form
        onSubmit={handleSubmit}
        className="border-4 rounded p-8 w-[400px] h-[500px]"
      >
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Descripción del enlace
          </label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="id_pagina"
            className="block text-sm font-medium text-gray-700"
          >
            Id de la pagina
          </label>
          <input
            type="text"
            id="id_pagina"
            name="id_pagina"
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="id_pagina"
            className="block text-sm font-medium text-gray-700"
          >
            Id del Rol
          </label>
          <input
            type="text"
            id="id_rol"
            name="id_rol"
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Crear Enlace
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg ml-2 hover:bg-gray-400"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
