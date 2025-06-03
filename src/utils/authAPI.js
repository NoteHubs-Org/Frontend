import { api } from "./axios";

export const login = async (credentials) => {
    const res = await api.post("/login", { credentials: true})
}

export const signup = async (userInfo) => {
    const res = await api.post("/signup", userInfo);
    console.log(res.data)
    return res.data
}