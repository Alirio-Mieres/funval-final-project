import React from "react";
import { Route, Routes } from "react-router-dom";
import { UsuariosPage } from "../pages/UsuariosPage";
import { LoginPage } from "../auth/pages/LoginPage";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="usuarios" element={<UsuariosPage />} />
      </Routes>
    </>
  );
};
