import axios from "axios";
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // State
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [adminName, setAdminName] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [alert, setAlert] = useState("");
  const [registerAdminPassword, setRegisterAdminPassword] = useState("");

  const registerObject = {
    name: adminName,
    email: adminEmail,
    password: adminPassword,
    password_confirmation: newAdminPassword,
  };

  const loginObject = {
    email: adminEmail,
    password: adminPassword,
  };

  const userToken = localStorage?.getItem("gnn_and_sport_admin_user_token");

  // Router
  const location = useLocation();
  const redirectRoute = location.state || "/";
  const navigate = useNavigate();

  // if (userToken) {
  //   setUserIsLoggedIn(true);
  // } else {
  //   setUserIsLoggedIn(false);
  // }

  // login function
  const login = () => {
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/login`,
        loginObject
      )
      .then((res) => {
        console.log(res);
        navigate(redirectRoute);
        setIsSendingRequest(false);
        localStorage.setItem(
          "gnn_and_sport_admin_user_token",
          res.data.access_token
        );

        // if (process.env.NODE_ENV === "development") {
        //   window.location.href = "/";
        // } else {
        //   window.location.href = "/goalnownow-and-sportdm-admin/";
        // }

        console.log(process.env);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
      });
  };

  const register = () => {
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/register`,
        registerObject
      )
      .then((res) => {
        console.log(res);
        setIsSendingRequest(false);
        setAlert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
        setAlert("An error occured");
      });
  };

  return (
    <AuthContext.Provider
      value={{
        adminEmail,
        setAdminEmail,
        adminPassword,
        setAdminPassword,
        newAdminPassword,
        setNewAdminPassword,
        adminName,
        setAdminName,
        register,
        isSendingRequest,
        alert,
        setAlert,
        login,
        userToken,
        registerAdminPassword,
        setRegisterAdminPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
