import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // State
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");

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
