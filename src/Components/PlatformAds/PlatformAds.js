import classes from "./PlatformAds.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../Components/Layout/Layout";
import AdsList from "../../Components/AdsList/AdsList";
import { useContext, useEffect } from "react";
import { AdContext } from "../../Context/AdContext";
import { Alert, Snackbar } from "@mui/material";

const PlatformAds = (props) => {
  // context
  const { alert, setAlert } = useContext(AdContext);

  const navItems = [
    {
      title: "GoalNowNow",
      isActive: false,
      route: `/ads/goalnownow/ng`,
    },
    {
      title: "SportDm",
      isActive: false,
      route: `/ads/sportdm/ng`,
    },
  ];

  // location
  const location = useLocation();

  // navigate
  const navigate = useNavigate();

  // Effects
  useEffect(() => {
    props?.fetchFunction();

    // eslint-disable-next-line
  }, []);

  console.log(location.pathname.split("/")[3]);

  return (
    <Layout>
      {alert && (
        <Snackbar
          open={Boolean(alert)}
          autoHideDuration={6000}
          onClose={() => {
            setAlert();
          }}
        >
          <Alert severity={alert} variant="outlined">
            Ad deleted successfully!
          </Alert>
        </Snackbar>
      )}
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
                  location.pathname.includes(`/ads/${data.title.toLowerCase()}`)
                    ? `${classes.activeNav}`
                    : undefined
                }
              >
                {location.pathname.includes(
                  `/ads/${data.title.toLowerCase()}`
                ) ? (
                  <div className={classes.activeIndicator}></div>
                ) : undefined}

                <div className={classes.navItem}>
                  <div>{data.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div>
          <div className={classes.clubNameNav}>
            <div
              className={`${classes.clubNameOuter} ${
                location.pathname.split("/")[3] === "ng" ? classes.active : null
              }`}
              onClick={() => {
                navigate(`/ads/${props.platform}/ng`);
              }}
            >
              NG
            </div>
            <div
              className={`${classes.clubNameOuter} ${
                location.pathname.split("/")[3] === "gh" ? classes.active : null
              }`}
              onClick={() => {
                navigate(`/ads/${props.platform}/gh`);
              }}
            >
              GH
            </div>
            <div
              className={`${classes.clubNameOuter} ${
                location.pathname.split("/")[3] === "ke" ? classes.active : null
              }`}
              onClick={() => {
                navigate(`/ads/${props.platform}/ke`);
              }}
            >
              KE
            </div>
          </div>
        </div>
        <div className={classes.goalNowNowAds}>
          <AdsList
            list={props.list}
            setList={props.setList}
            fetchFunction={props.fetchFunction}
          />
        </div>
      </div>
    </Layout>
  );
};

export default PlatformAds;
