import { useNavigate } from "react-router-dom";
import { createEnlace, findOneEnlace, updateEnlace } from "../api/enlaces-service";
import { useEffect, useState } from "react";

export const UpdateEnlaceForm = ({ id }) => {
  const [descripcion, setDescripcion] = useState('');
  const [idPagina, setIdPagina] = useState('');
  const [idRol, setIdRol] = useState('');
  const [enlace, setEnlace] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const enlaceData = await findOneEnlace(id.id);
      setEnlace(enlaceData.data);

      // Establecer el estado con los valores iniciales del enlace
      setDescripcion(enlaceData.data.descripcion);
      setIdPagina(enlaceData.data.id_pagina);
      setIdRol(enlaceData.data.id_rol);
    }

    fetchData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Obtener los valores actualizados de los inputs del estado
    const updatedEnlace = {
      descripcion,
      id_pagina: idPagina,
      id_rol: idRol,
    };
    // Llamar a la función de actualización de enlace
    updateEnlace(id.id, updatedEnlace);

    navigate("/enlaces", {
      replace: true,
    });
  };

  const handleCancel = () => {
    navigate("/enlaces", {
      replace: true,
    });
  };

  return (
    <div className="mt-4 flex justify-center items-center flex-col w-full">
      <h2 className="text-2xl font-semibold mb-2">Actualizar Enlace</h2>
      <form
        onSubmit={handleSubmit}
        className="border-4 rounded p-8 w-[400px] h-[500px]"
      >
        <div className="mb-4">
          <label
            htmlFor="descripcion"
            className="block text-sm font-medium text-gray-700"
          >
            Nombre del enlace
          </label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            className="mt-1 p-2 border rounded-lg w-full"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
            value={idPagina}
            onChange={(e) => setIdPagina(e.target.value)}
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
            value={idRol}
            onChange={(e) => setIdRol(e.target.value)}
            required
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Actualizar Enlace
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
