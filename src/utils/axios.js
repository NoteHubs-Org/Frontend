import axios from "axios"
axios.defaults.withCredentials = true;

export const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type" : "application/json",
    }
});

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if(err.response?.status === 401){
            console.warn("Unauthosized, will be logged out")
        }
        return Promise.reject(err);
    }
)