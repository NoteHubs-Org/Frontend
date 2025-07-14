import { useAuth } from "./authContext";
import { useNavigate, Outlet } from "react-router-dom";
import "./auth.css";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    // spinner here
    return (<div className="loader-container">
      <span className="loader"></span>
    </div>);
  };
  if (!user) return navigate("/auth/login");

  return <Outlet />;
};

export default ProtectedLayout;
