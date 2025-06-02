import axios from "axios";
const api = axios.create({
    baseURL: "http://localhost:5000/auth",
    withCredentials: true,
})
try {
    const res = await api.get("/all")    
    console.log(res.data)
} catch (error) {
    console.log(error)
}