import { api } from "./axios";

export const login = async (userInfo) => {
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
      return error.response
    } else {
      console.error("Error sending request:", error.message);
      return { status: 500, data: { message: "Internal server error" } };
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

export const logout = async () => {
  try {
    const res = await api.get("/auth/logout", { withCredentials: true });
    return res;
  } catch (error) {
    console.error("Error during logout:", error);
    return { status: 500, data: { message: "Internal server error" } };
  }
}