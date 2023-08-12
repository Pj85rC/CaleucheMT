import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children, requiredRoles }) => {
  const { user } = useContext(AuthContext);
  const { role } = user ? user : { role: null };
  if (!role || (requiredRoles && !requiredRoles.includes(role))) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RouteGuard;
