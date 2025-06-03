import { api } from "./axios";

export const login = async (credentials) => {
    const res = await api.post("/login")
}

export const signup = async (userInfo) => {
    const res = await api.post("/signup", userInfo);
    return res.data
}