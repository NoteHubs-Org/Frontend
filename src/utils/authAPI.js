import { api } from "./axios";

export const login = async (userInfo) => {
  console.log("Logging in with userInfo:", userInfo);
  try {
    const res = await api.post("/auth/login", userInfo, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    });
    return res;
  } catch (error) {
    if (error.response) {
      console.error("Login failed:", error.response.data);
    } else {
      console.error("Error sending request:", error.message);
    }
  }
};

export const signup = async (userInfo) => {
  const res = await api.post("/auth/signup", userInfo, {
    withCredentials : true,
    headers: {
      "Content-Type": "application/json"
    }
});
  return res;
};