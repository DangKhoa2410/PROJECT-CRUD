import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getRegisteredShiftsAPI = (email: string) => {
  return api.get(`/shift-registration/${email}`);
};

export const toggleShiftAPI = (data: { email: string; shift: string; date: string }) => {
  return api.post("/shift-registration/toggle", data);
};

export const getAllRegisteredShiftsAPI = () => {
  return api.get("/shift-registration/all");
};

export const getRegisteredShiftsByDateAPI = (date: string) => {
  return api.get(`/shift-registration/date/${date}`);
};

export const approveShiftRegistration = (id: number) => {
  return api.patch(`/shift-registration/${id}/approve`);
};

export const deleteShiftRegistration = (id: number) => {
  return api.delete(`/shift-registration/${id}`);
};

export const approveAllShiftsByEmail = (email: string) => {
  return api.patch(`/shift-registration/${encodeURIComponent(email)}/approve-all`);
};

export const rejectAllShiftsByEmail = (email: string) => {
  return api.patch(`/shift-registration/${encodeURIComponent(email)}/reject-all`);
};


