import classes from "../GoalNowNowAds/GoalNowNowAds.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../Components/Layout/Layout";
import AdsList from "../../Components/AdsList/AdsList";
import { useContext, useEffect } from "react";
import { AdContext } from "../../Context/AdContext";

const SportDmAds = () => {
  // context
  const { fetchSportDmAds, sportDmAds, setSportDmAds } = useContext(AdContext);

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
    { name: "Budweiser", duration: "2 days left" },
    { name: "UBA", duration: "2 days left" },
    { name: "Milo", duration: "2 days left" },
  ];

  // location
  const location = useLocation();

  // navigate
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    fetchSportDmAds();
  }, []);

  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h4>SportDm Admin</h4>
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
          <AdsList
            list={sportDmAds}
            setList={setSportDmAds}
            fetchFunction={fetchSportDmAds}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SportDmAds;
