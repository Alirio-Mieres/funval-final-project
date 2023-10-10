import React, { useEffect, useState } from "react";
import { deleteEnlace, findAllEnlaces } from "../api/enlaces-service";
import { Navbar } from "../ui/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const EnlancesPage = () => {
  const [enlaces, setEnlaces] = useState([]);
  const navigate = useNavigate();
  
  const onShowForm = () => {
    navigate("/enlaces/create", {
      replace: true,
    });
  };

  const onDelete = (id) => {
    deleteEnlace(id).then(() => {
      const newEnlances = enlaces.filter((enlace) => enlace.id !== id);
      setEnlaces(newEnlances);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const enlacesData = await findAllEnlaces();
        setEnlaces(enlacesData.data);
      } catch (error) {
        console.error("Error al obtener enlaces:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="max-h-screen overflow-y-auto">
        <button
          onClick={onShowForm}
          className="border-2 rounded bg-blue-500 text-white px-4 py-2"
        >
          Añadir
        </button>
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Descripción</th>
              <th className="px-4 py-2">ID Página</th>
              <th className="px-4 py-2">ID Rol</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {enlaces.map((enlace) => (
              <tr key={enlace.id}>
                <td className="border px-4 py-2">{enlace.id}</td>
                <td className="border px-4 py-2">{enlace.descripcion}</td>
                <td className="border px-4 py-2">{enlace.id_pagina}</td>
                <td className="border px-4 py-2">{enlace.id_rol}</td>
                <td className="border px-4 py-2">{enlace.created_at}</td>
                <td className="border px-4 py-2">{enlace.updated_at}</td>
                <div>
                  <Link to={`/enlaces/update/${enlace.id}`}>
                    <button className="px-4 py-3 text-white font-bold rounded-full text-xs bg-blue-500">
                      Actualizar
                    </button>
                  </Link>
                  <button
                    onClick={() => onDelete(enlace.id)}
                    className="px-4 py-3 text-white font-bold rounded-full text-xs bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
