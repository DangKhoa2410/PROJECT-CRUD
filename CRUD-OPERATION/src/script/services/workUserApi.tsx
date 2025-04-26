import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

interface CreateUserDto {
  nameUser: string;
  email: string;
  registeredDate: string;
  shift: ('ca chieu' | 'ca toi')[];
}

export const getWorkUsers = () => api.get("/work-users");

export const createWorkUser = (data: CreateUserDto) => api.post("/work-users", data);

export const updateWorkUser = (id: string, data: CreateUserDto) =>
  api.patch(`/work-users/${id}`, data);

export const deleteWorkUser = (id: string) => api.delete(`/work-users/${id}`);
