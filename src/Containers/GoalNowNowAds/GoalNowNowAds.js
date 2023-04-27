import Layout from "../../Components/Layout/Layout";
import classes from "./GoalNowNowAds.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AdsList from "../../Components/AdsList/AdsList";
import { useContext, useEffect } from "react";
import { AdContext } from "../../Context/AdContext";

const GoalNowNowAds = () => {
  // Context
  const { fetchGoalNowNowAds, isSendingRequest, goalNowNowAds } =
    useContext(AdContext);

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

  // navigate
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    fetchGoalNowNowAds();
  }, []);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h4>GoalNowNow Admin</h4>
          <button
            onClick={() => {
              navigate("/ads/create-new-ad");
            }}
          >
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
          <AdsList list={goalNowNowAds} />
        </div>
      </div>
    </Layout>
  );
};

export default GoalNowNowAds;
