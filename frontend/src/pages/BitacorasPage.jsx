import { useEffect, useState } from "react";
import { Navbar } from "../ui/Navbar";
import { findAllBitacoras } from "../api/bitacoras-service";

export const BitacorasPage = () => {
  const [bitacoras, setBitacoras] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const bitacorasData = await findAllBitacoras();
        setBitacoras(bitacorasData.data);
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
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Bitácora</th>
              <th className="px-4 py-2">Fecha</th>
              <th className="px-4 py-2">Hora</th>
              <th className="px-4 py-2">IP</th>
              <th className="px-4 py-2">Sistema Operativo</th>
              <th className="px-4 py-2">Navegador</th>
              <th className="px-4 py-2">ID Usuario</th>
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {bitacoras.map((bitacora) => (
              <tr key={bitacora.id}>
                <td className="border px-4 py-2">{bitacora.id}</td>
                <td className="border px-4 py-2">{bitacora.bitacora}</td>
                <td className="border px-4 py-2">{bitacora.fecha}</td>
                <td className="border px-4 py-2">{bitacora.hora}</td>
                <td className="border px-4 py-2">{bitacora.ip}</td>
                <td className="border px-4 py-2">
                  {bitacora.sistema_operativo}
                </td>
                <td className="border px-4 py-2">{bitacora.navegador}</td>
                <td className="border px-4 py-2">{bitacora.id_usuario}</td>
                <td className="border px-4 py-2">{bitacora.created_at}</td>
                <td className="border px-4 py-2">{bitacora.updated_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
