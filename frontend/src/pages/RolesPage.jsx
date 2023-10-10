import { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import { deleteRoles, findAllRoles } from "../api/roles-service";
import { Link, useNavigate } from "react-router-dom";

export const RolesPage = () => {
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  const onShowForm = () => {
    console.log("onShowForm");
    navigate("/roles/create", {
      replace: true,
    });
  };

  const onDelete = (id) => {
    deleteRoles(id).then(() => {
      const newRoles = roles.filter((rol) => rol.id !== id);
      setRoles(newRoles);
    });
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const rolesData = await findAllRoles();
        setRoles(rolesData.data);
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
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
              <th className="px-4 py-2">Rol</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td className="border px-4 py-2">{role.id}</td>
                <td className="border px-4 py-2">{role.rol}</td>
                <td className="border px-4 py-2">{role.created_at}</td>
                <td className="border px-4 py-2">{role.updated_at}</td>
                <td className="px-6 py-4">
                  <div>
                    <Link to={`/roles/update/${role.id}`}>
                      <button className="px-4 py-3 text-white font-bold rounded-full text-xs bg-blue-500">
                        Actualizar
                      </button>
                    </Link>
                    <button
                      onClick={() => onDelete(role.id)}
                      className="px-4 py-3 text-white font-bold rounded-full text-xs bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
