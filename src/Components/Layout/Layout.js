import React from "react";
import Footer from "../../Containers/Footer/Footer";
import Header from "../../Containers/Header/Header";
import LeftNavSection from "../../Containers/LeftNavSection/LeftNavSection";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <>
      <div className={classes.outerContainer}>
        <div></div>
        <div className={classes.container}>
          <div className={classes.header}>
            <Header />
          </div>
          <div className={classes.body}>
            <div className={classes.leftSection}>
              <LeftNavSection />
            </div>
            <div className={classes.middleSection}>
              <div className={classes.children}>{props.children}</div>
            </div>
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Layout;
