import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Restricted = (props) => {
  // Context
  const { userToken } = useContext(AuthContext);

  // States

  //   Location
  const location = useLocation();

  return userToken ? (
    props.children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Restricted;
