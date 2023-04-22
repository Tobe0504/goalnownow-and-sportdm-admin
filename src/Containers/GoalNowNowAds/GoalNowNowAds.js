import Layout from "../../Components/Layout/Layout";
import classes from "./GoalNowNowAds.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdsList from "../../Components/AdsList/AdsList";

const GoalNowNowAds = () => {
  const navItems = [
    {
      title: "GoalNowNow",
      isActive: false,
      route: `/ads/goalnownow`,
    },
    {
      title: "SportDm",
      isActive: false,
      route: `/ads/sportdm`,
    },
  ];

  const adsList = [
    { name: "CocaCola", duration: "2 days left" },
    { name: "Wema Bank", duration: "2 days left" },
    { name: "University of Lagos", duration: "2 days left" },
  ];
  // location
  const location = useLocation();

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h4>GoalNowNow Admin</h4>
          <button>
            <span>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span>Create Ad</span>
          </button>
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
          <AdsList list={adsList} />
        </div>
      </div>
    </Layout>
  );
};

export default GoalNowNowAds;
