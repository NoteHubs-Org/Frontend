import { api } from "./axios";

const authenticate = async () => {
  try {
    const res = await api.get("/auth", { withCredentials: true });
    if (res.status === 200 && res.data.allowed === "yes") {
      return res.data.user;
    }
    return null;
  } catch (error) {
    console.error("Authentication check failed:", error);
    return null;
  }
};

export default authenticate;
