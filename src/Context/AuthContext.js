import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // State
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

  // login function
  const login = () => {
    axios
      .post(`${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}api/v1/login`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
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
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
