import { useAuth } from "./authContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedLayout;
