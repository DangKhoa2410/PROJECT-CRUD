import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getRegisteredShiftsAPI = (email: string) => {
  return api.get(`/shift-registration/${email}`);
};

export const toggleShiftAPI = (data: { email: string; shift: string }) => {
  return api.post("/shift-registration/toggle", data);
};

export const getAllRegisteredShiftsAPI = () => {
  return api.get("/shift-registration/all");
};
