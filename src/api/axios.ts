import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true, // Sends cookies (used for refresh/auth)
});

api.interceptors.response.use(
    (res) => res,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("Unauthorized – redirecting...");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;
