import classes from "./SportDmNewsContainer.module.css";
import Layout from "../Layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const SportDmNewsContainer = (props) => {
  // Utils
  const navItems = [
    {
      title: "All Headlines",
      isActive: false,
      route: `/sportdm-news/all-headlines`,
    },
    {
      title: "Top Stories",
      isActive: false,
      route: `/sportdm-news/top-stories`,
    },
    {
      title: "Football News",
      isActive: false,
      route: `/sportdm-news/football-news`,
    },
    {
      title: "Transfer News",
      isActive: false,
      route: `/sportdm-news/transfer-news`,
    },
    {
      title: "This Day Last Year",
      isActive: false,
      route: `/sportdm-news/this-day-last-year`,
    },
    {
      title: "Champions League News",
      isActive: false,
      route: `/sportdm-news/champions-league-news`,
    },
  ];

  // location
  const location = useLocation();

  // Refs
  const containerRef = useRef(null);

  // Effects
  useEffect(() => {
    const acTiveScorePageMatchNavItem = navItems?.find((navItem) => {
      return navItem?.route === location?.pathname;
    });

    const activeDateElement = containerRef?.current.querySelector(
      `[data-date="${acTiveScorePageMatchNavItem?.title}"]`
    );

    activeDateElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h4>SportDm News Admin</h4>
        </div>
        <div className={classes.navSection} ref={containerRef}>
          {navItems.map((data, i) => {
            return (
              <Link
                key={i}
                to={data.route}
                replace
                className={
                  location.pathname.includes(data.route)
                    ? `${classes.activeNav}`
                    : undefined
                }
                data-date={data.title}
              >
                {location.pathname.includes(data.route) ? (
                  <div className={classes.activeIndicator}></div>
                ) : undefined}

                <div className={classes.navItem}>
                  <div>{data.title}</div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={classes.goalNowNowAds}>{props.children}</div>
      </div>
    </Layout>
  );
};

export default SportDmNewsContainer;
