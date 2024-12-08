import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children,role ,type}) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (user && type == "public") {
    return <Navigate to="/Dashboard" replace />;

  }
  

  if (role) {
  
    return user?.role === role?  children :  <Navigate to="/register" replace />;
  }

  return children;
};

export default ProtectedRoute;
