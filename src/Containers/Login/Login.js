import classes from "./Login.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress, Alert, Snackbar } from "@mui/material";
import Input from "../../Components/Input/Input";

const Login = () => {
  // Context
  const {
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
  } = useContext(AuthContext);

  // State
  const [newUser, setNewUser] = useState(false);

  return (
    <div className={classes.innerContainer1}>
      <div className={classes.innerContainer2Outer}>
        <div className={classes.innerContainer2}>
          <div className={classes.alert}>
            {alert && (
              <Snackbar
                open={Boolean(alert)}
                autoHideDuration={6000}
                onClose={() => {
                  setAlert();
                }}
              >
                <Alert severity="success" variant="outlined">
                  {alert}
                </Alert>
              </Snackbar>
            )}
          </div>
          <div className={classes.header}>Admin Login</div>

          {newUser ? (
            <form>
              <div>
                <label htmlFor="fullName">Admin Name</label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={adminName}
                  onChange={(e) => {
                    setAdminName(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="fullName">Admin Email</label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your email address"
                  value={adminEmail}
                  onChange={(e) => {
                    setAdminEmail(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="password">Admin Password</label>
                <Input
                  type="text"
                  id="password"
                  placeholder="Enter a password"
                  value={adminPassword}
                  onChange={(e) => {
                    setAdminPassword(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="newpassword">Confirm Admin Password</label>
                <Input
                  type="text"
                  id="newpassword"
                  placeholder="Enter a password"
                  value={newAdminPassword}
                  onChange={(e) => {
                    setNewAdminPassword(e.target.value);
                  }}
                />
              </div>
              <div className={classes.buttonSection}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    register();
                  }}
                >
                  {isSendingRequest ? (
                    <CircularProgress size={"1rem"} color="inherit" />
                  ) : (
                    "Register Admin"
                  )}
                </button>
              </div>
              <span
                className={classes.newPasswordSetupAlready}
                onClick={() => {
                  setNewUser(false);
                }}
              >
                Not a new admin?
              </span>
            </form>
          ) : (
            <form>
              <div>
                <label htmlFor="email">Cloudpact Email</label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Enter your email address"
                  value={adminEmail}
                  onChange={(e) => {
                    setAdminEmail(e.target.value);
                  }}
                />
              </div>

              <div>
                <label htmlFor="newpassword">New Admin Password</label>
                <Input
                  type="text"
                  id="newpassword"
                  placeholder="Enter a password"
                  value={adminPassword}
                  onChange={(e) => {
                    setAdminPassword(e.target.value);
                  }}
                />
              </div>

              <div className={classes.buttonSection}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    login();
                  }}
                >
                  {isSendingRequest ? (
                    <CircularProgress size={"1rem"} color="inherit" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
              <span
                className={classes.newPasswordSetupAlready}
                onClick={() => {
                  setNewUser(true);
                  console.log("Hmmm");
                }}
              >
                New admin?
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
