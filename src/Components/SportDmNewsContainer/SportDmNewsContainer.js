import classes from "./SportDmNewsContainer.module.css";
import Layout from "../Layout/Layout";
import { Link, useLocation } from "react-router-dom";

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

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h4>SportDm News Admin</h4>
        </div>
        <div className={classes.navSection}>
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
