import { api } from "../utils/axios";

const authenticate = async () => {
  try {
    const res = await api.get("/auth", { withCredentials: true });
    if (res.data.authenticated) {
      return res.data.user;
    }
    return null;
  } catch (error) {
    console.error("Authentication check failed:", error);
    return null;
  }
};

export default authenticate;
