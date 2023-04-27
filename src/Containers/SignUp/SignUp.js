import classes from "../Login/Login.module.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress, Alert, Snackbar } from "@mui/material";
import Input from "../../Components/Input/Input";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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
  } = useContext(AuthContext);

  //   navigate
  const navigate = useNavigate();
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

          <div className={classes.header}>Admin Sign Up</div>
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
                navigate("/login");
              }}
            >
              Go to Login
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
