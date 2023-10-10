import { useParams } from "react-router-dom";
import { UpdateRolForm } from "../components/UpdateRolForm";
import { Navbar } from "../ui/Navbar";

export const UpdateRolesPage = () => {
  const { id } = useParams();


  return (
    <div className="flex h-screen">
      <Navbar />
      <UpdateRolForm id={id} />
    </div>
  );
};
