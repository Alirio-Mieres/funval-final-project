import React from "react";
import { useParams } from "react-router-dom";
import { UpdateEnlaceForm } from "../components/UpdateEnlaceForm";
import { Navbar } from "../ui/Navbar";

export const UpdateEnlancesPage = () => {
  const id = useParams();
  return (
    <div className="flex h-screen">
      <Navbar />
      <UpdateEnlaceForm id={id} />
    </div>
  );
};
