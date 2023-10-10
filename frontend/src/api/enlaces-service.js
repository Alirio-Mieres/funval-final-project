import { api } from "./api";


export async function createEnlace(enlace) {
    try {
      return await api.post("/enlaces", enlace);
      
    } catch (error) {
      console.log(error);
    }
}

export async function findAllEnlaces() {
  try {
    return await api.get("/enlaces");
  } catch (error) {
    console.log(error);
  }
}

export async function findOneEnlace(id) {
  try {
    return await api.get(`/enlaces/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteEnlace(id) {
  try {
    return await api.delete(`/enlaces/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function updateEnlace(id, enlace) {
  try {
    return await api.put(`/enlaces/${id}`, enlace);
  } catch (error) {
    console.log(error);
  }
}