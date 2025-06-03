import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:5000/auth",
    withCredentials: true,
})

api.interceptors.response.use(
    (res) => res,
    (err) => {
        if(err.response?.status === 401){
            console.warn("Unauthosized, will be logged out")
        }
        return Promise.reject(err);
    }
)