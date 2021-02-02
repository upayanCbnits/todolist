import axios from "axios";

import {URL, URL2, COMPLETED, UNCOMPLETED} from "../constants/todoConst"

export const createNewTask = (payload) => { return axios.post(URL, payload.data) }
export const allTasks = () => { return axios.get(URL) }
export const updateExistingTask = (payload) => { return axios.put(URL2 + payload.id, payload.data)}
export const taskDetails = (payload) => { return axios.get(URL2 + payload.id)}
export const uncompleteExistingTask = (payload) => {return axios.put(URL2 + payload.id + UNCOMPLETED)}
export const destroyExistingTask = (payload) => { return axios.delete(URL2 + payload.id)}
export const completeExistingTask = (payload) => { return axios.put(URL2 + payload.id + COMPLETED)}




