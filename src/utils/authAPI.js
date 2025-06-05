import { api } from "./axios";

export const login = async (userInfo) => {
  const res = await api.post("/login", userInfo, {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
})
  return res;
};

export const signup = async (userInfo) => {
  const res = await api.post("/signup", userInfo, {
    withCredentials : true,
    headers: {
      "Content-Type": "application/json"
    }
});
  return res;
};