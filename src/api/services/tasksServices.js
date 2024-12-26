import axios from "axios";
import { API_BASE_URL } from "../config";

const URL = `${API_BASE_URL}/tasks`;

export const findAllTasks = async () => {
    try {
        const response = await axios.get(URL);
        // Si la respuesta está vacía, retornamos un arreglo vacío.
        return response.data.length > 0 ? response.data : [];
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error al cargar las tareas" };
    }
};

export const findTaskById = async (id) => {
    try {
        const response = await axios.get(`${URL}/${id}`);
        return response.data; // sin validar
    } catch (error) {
        console.error(error);
        return { error: true, message: `Error al cargar la tarea con el ID: ${id}` };
    }
};

export const saveTask = async (task) => {
    try {
        return await axios.post(URL, task);
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error al intentar insertar una nueva tarea" };
    }
};

export const updateTask = async (task) => {
    try {
        return await axios.put(`${URL}/${task.id}`, task);
    } catch (error) {
        console.error(error);
        return { error: true, message: `Error al intentar actualizar la tarea con el ID: ${task.id}` };
    }
};

export const removeTask = async (id) => {
    try {
        await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.error(error);
        return { error: true, message: "Error al intentar eliminar la tarea" };
    }
};