import api from "./axios";

export const login = async (payload: { email: string; password: string }) => {
    const res = await api.post("/auth/login", payload);
    return res.data;
};

export const register = async (payload: { name: string; email: string; password: string }) => {
    const res = await api.post("/auth/register", payload);
    return res.data;
};

export const getProfile = async () => {
    const res = await api.get("/auth/profile");
    return res.data.user;
};

export const logout = async () => {
    await api.post("/auth/logout");
};
