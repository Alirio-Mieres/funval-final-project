import { findAllUsers } from "../api/usuarios-service";
import { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import { useNavigate } from "react-router-dom";
import { RegisterPage } from "../auth/pages/RegisterPage";

export const CreateUsuariosPage = () => {
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
      <main className="w-full p-4">
        <div className="">
          <RegisterPage />
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
