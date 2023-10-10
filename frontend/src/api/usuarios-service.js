import { api } from "./api";


export async function createUser(usuario) {
    try {
      return await api.post("/usuarios", usuario);
      
    } catch (error) {
      console.log(error);
    }
}

export async function findAllUsers() {
  try {
    return await api.get("/usuarios");
  } catch (error) {
    console.log(error);
  }
}

export async function findOne(id) {
  try {
    return await api.get(`/usuarios/${id}`);
  } catch (error) {
    console.log(error);
  }
}