import { api } from "./api";

export async function findAllRoles() {
  try {
    return await api.get("/roles");
  } catch (error) {
    console.log(error);
  }
}

export async function findOneRol(id) {
  try {
    return await api.get(`/roles/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export async function createRoles(rol) {
  try {
    return await api.post("/roles", rol);
  } catch (error) {
    console.log(error);
  }
}

export async function updateRoles(rol, id) {
  try {
    return await api.put(`/roles/${id}`, rol);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteRoles(id) {
  try {
    return await api.delete(`/roles/${id}`);
  } catch (error) {
    console.log(error);
  }
}
