import classes from "./Login.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress } from "@mui/material";
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
  } = useContext(AuthContext);

  // State
  const [newUser, setNewUser] = useState(false);

  return (
    <div className={classes.innerContainer1}>
      <div className={classes.innerContainer2Outer}>
        <div className={classes.innerContainer2}>
          <div className={classes.alert}>
            {/* {error && <Alert severity="error">{error}</Alert>} */}
            {/* {userIsLoggedIn && (
              <Alert severity="success">
                This user is logged in. Please log out of other account to login
              </Alert>
            )} */}
          </div>
          <div className={classes.header}>Admin Login</div>

          {newUser ? (
            <form>
              <div>
                <label htmlFor="fullName">Cloudpact Email</label>
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
                <label htmlFor="password">Cloudpact Admin Password</label>
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
                <label htmlFor="newpassword">New Admin Password</label>
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
                    // userLoginHandler();
                    // e.preventDefault();
                    // loginHandler();
                  }}
                >
                  {/* {isSendingRequest ? ( */}
                  <CircularProgress size={"1rem"} color="inherit" />
                  {/* ) : ( */}
                  {/* "Login" */}
                  {/* )} */}
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
                    // loginHandler();
                  }}
                >
                  {/* {isSendingRequest ? ( */}
                  <CircularProgress size={"1rem"} color="inherit" />
                  {/* ) : ( */}
                  {/* "Login" */}
                  {/* )} */}
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
