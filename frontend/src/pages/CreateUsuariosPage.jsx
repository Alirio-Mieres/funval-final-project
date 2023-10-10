import { findAllUsers } from "../api/usuarios-service";
import { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import { useNavigate } from "react-router-dom";
import { RegisterPage } from "../auth/pages/RegisterPage";

export const CreateUsuariosPage = () => {
  // const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // const onShowForm = () => {
  //   navigate("/usuarios/create", {
  //     replace: true,
  //   });
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const usuariosData = await findAllUsers();
  //       setUsuarios(usuariosData.data);
  //     } catch (error) {
  //       console.error("Error al obtener usuarios:", error);
  //     }
  //   }

  //   fetchData();
  // }, []);

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

