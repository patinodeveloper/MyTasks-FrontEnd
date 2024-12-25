import axios from "axios";
import { API_BASE_URL } from "../config";

const URL = `${API_BASE_URL}/projects`;

export const findAllProjects = async () => {
    try {
        const response = await axios.get(URL);
        // Si la respuesta está vacía, retornamos un arreglo vacío.
        return response.data.length > 0 ? response.data : [];
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error al cargar los proyectos" };
    }
};

export const findProjectById = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response.data; // sin validar
    } catch (error) {
        console.error(error);
        return { error: true, message: `Error al cargar el proyecto con el ID: ${id}` };
    }
};

export const saveProject = async (project) => {
    try {
        return await axios.post(URL, project);
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error al intentar insertar un nuevo proyecto" };
    }
};

export const updateProject = async (project) => {
    try {
        return await axios.put(`${URL}/${project.id}`, project);
    } catch (error) {
        console.error(error);
        return { error: true, message: `Error al intentar actualizar el proyecto con el ID: ${project.id}` };
    }
};

export const removeProject = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error al intentar eliminar el proyecto" };
    }
};