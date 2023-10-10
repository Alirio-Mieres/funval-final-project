import { findAllUsers } from "../api/usuarios-service";
import { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import { useNavigate } from "react-router-dom";

export const UsuariosPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  const onShowForm = () => {
    navigate("/usuarios/create", {
      replace: true,
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const usuariosData = await findAllUsers();
        setUsuarios(usuariosData.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="overflow-y-auto p-4">
        <div className="max-h-screen">
          <button
            onClick={onShowForm}
            className="border-2 rounded bg-blue-500 text-white px-4 py-2"
          >
            Añadir
          </button>
          <div className="max-h-screen overflow-y-auto">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Usuario</th>
                  <th className="px-4 py-2">Clave</th>
                  <th className="px-4 py-2">Habilitado</th>
                  <th className="px-4 py-2">ID Persona</th>
                  <th className="px-4 py-2">ID Rol</th>
                </tr>
              </thead>
              <tbody>
                {usuarios.map((usuario) => (
                  <tr key={usuario.id}>
                    <td className="border px-4 py-2">{usuario.id}</td>
                    <td className="border px-4 py-2">{usuario.email}</td>
                    <td className="border px-4 py-2">
                      {usuario.habilitado ? "Sí" : "No"}
                    </td>
                    <td className="border px-4 py-2">{usuario.id_persona}</td>
                    <td className="border px-4 py-2">{usuario.id_rol}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden mb-4">
//   <div className="px-6 py-4 bg-gray-900">
//     <div className="font-bold text-xl text-white">
//       {usuario.usuario}
//     </div>
//     <p className="text-gray-200 text-base">{usuario.clave}</p>
//   </div>
//   <div className="bg-gray-800 px-6 py-4 flex items-center">
//     <div className="bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
//       {usuario.habilitado ? "Habilitado" : "Deshabilitado"}
//     </div>
//     <div className="bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
//       {usuario.id_persona}
//     </div>
//     <div className="bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
//       {usuario.id_rol}
//     </div>
//   </div>
// </div>
