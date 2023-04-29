import classes from "./SportDmNewsContainer.module.css";
import Layout from "../../Components/Layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const SportDmNewsContainer = () => {
  // context
  const { fetchAllHeadlines, headlines, setHeadlines } =
    useContext(SportDmNewsContext);
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

  //   Effects
  useEffect(() => {
    fetchAllHeadlines();

    console.log("Okay");
  }, []);

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

        <div className={classes.goalNowNowAds}>
          <NewsList
            list={headlines}
            setList={setHeadlines}
            fetchFunction={fetchAllHeadlines}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SportDmNewsContainer;
