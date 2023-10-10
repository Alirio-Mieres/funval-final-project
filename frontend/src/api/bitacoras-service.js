import { api } from "./api";


export async function createBitacoras(bitacora) {
    try {
      return await api.post("/bitacoras", bitacora);
      
    } catch (error) {
      console.log(error);
    }
}

export async function findAllBitacoras() {
  try {
    return await api.get("/bitacoras");
  } catch (error) {
    console.log(error);
  }
}

export async function findOneBitacoras(id) {
  try {
    return await api.get(`/bitacoras/${id}`);
  } catch (error) {
    console.log(error);
  }
}