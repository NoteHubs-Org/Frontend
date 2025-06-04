import { api } from "./axios";

export const login = async (userInfo) => {
    const res = await api.post("/login", userInfo, {
  headers: {
    "Content-Type": "application/json"
  }
})
    return res;
};

export const signup = async (userInfo) => {
    const res = await api.post("/signup", userInfo, {
  headers: {
    "Content-Type": "application/json"
  }
});
    return res;
};