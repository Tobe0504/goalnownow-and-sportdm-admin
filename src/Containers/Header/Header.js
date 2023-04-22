import React from "react";
import classes from "./Header.module.css";
import goalNowNowLogo from "../../Assets/Images/goalNowNowLogo.png";
import sportDmLogo from "../../Assets/Images/sportdmLogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const openSideMenu = () => {
    document.getElementById("sideMenu").style.width = "100%";
  };

  const closeSideMenu = () => {
    document.getElementById("sideMenu").style.width = "0%";
  };

  return (
    <div className={classes.container}>
      <div className={classes.responsivemenu}>
        <FontAwesomeIcon icon={faBars} onClick={openSideMenu} />
      </div>
      <div className={classes.logosection}>
        <img src={goalNowNowLogo} alt="GoalNowNow Logo" /> &{" "}
        <img src={sportDmLogo} alt="GoalNowNow Logo" />
      </div>

      <div className={classes.dropdownSection}></div>
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
