import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
// import { AdminRoutes } from "../admin/routes/AdminRoutes";
// import { RegisterPage } from "../auth/pages/RegisterPage";
// import { PersonalInfo } from "../auth/pages/PersonalInfo";
import { UsuariosPage } from "../pages/UsuariosPage";
import { RolesPage } from "../pages/RolesPage";
import { EnlancesPage } from "../pages/EnlancesPage";
import { BitacorasPage } from "../pages/BitacorasPage";
import { CreateRolesPage } from "../pages/CreateRolesPage";
import { UpdateRolesPage } from "../pages/UpdateRolesPage";
import { UpdateEnlancesPage } from "../pages/UpdateEnlancesPage";
import { CreateEnlacesPage } from "../pages/CreateEnlacesPage";
import { CreateUsuariosPage } from "../pages/CreateUsuariosPage"; 

export const AppRouter = () => {
  return (
    <>  
      <Routes>
        <Route path="login" element={<LoginPage />} />

        {/* Usuarios */}
        <Route path="usuarios" element={<UsuariosPage />} />
        <Route path="usuarios/create" element={<CreateUsuariosPage />} />
        
        {/* Roles */}
        <Route path="roles" element={<RolesPage />} />
        <Route path="roles/create" element={<CreateRolesPage />} />
        <Route path="roles/update/:id" element={<UpdateRolesPage />} />
        
        {/* Enlaces */}
        <Route path="enlaces" element={<EnlancesPage />} />
        <Route path="enlaces/create" element={<CreateEnlacesPage />} />
        <Route path="enlaces/update/:id" element={<UpdateEnlancesPage />} />
        {/* Bitacoras */}
        <Route path="bitacoras" element={<BitacorasPage />} />
        {/* <Route path="register" element={<RegisterPage />} /> */}
        {/* <Route path="personal-info" element={<PersonalInfo />} /> */}
        {/* <Route path="usuarios" element={<Usuarios />} /> */}
        {/* <Route path="/*" element={<AdminRoutes />} /> */}
      </Routes>
    </>
  );
};
