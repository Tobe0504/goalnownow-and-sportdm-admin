import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Restricted = () => {
  // Context
  const { userToken } = useContext(AuthContext);

  // States

  //   Location
  const location = useLocation();

  return userToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Restricted;
