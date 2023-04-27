import React from "react";
import classes from "./Header.module.css";
import goalNowNowLogo from "../../Assets/Images/goalNowNowLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "100%";
  };

  const closeSideMenu = () => {
    document.getElementById("sideMenu").style.width = "0%";
  };

  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes.responsivemenu}>
        <FontAwesomeIcon icon={faBars} onClick={openSideMenu} />
      </div>
      <div className={classes.logosection}>GNN & Sportdm Admin</div>

      <div className={classes.dropdownSection}>
        <button
          className={classes.logoutButton}
          onClick={() => {
            localStorage.removeItem("gnn_and_sport_admin_user_token");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
      {/* <div className={classes.searchSection}>
        <FontAwesomeIcon icon={faSearch} />
      </div> */}

      <div id="sideMenu" className={classes.sideNav}>
        <div className={classes.sideNavInner}>
          <button className={classes.btnClose} onClick={closeSideMenu}>
            &times;
          </button>

          <div className={classes.sideContainer}>
            <img src={goalNowNowLogo} alt="Goalnownow Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
