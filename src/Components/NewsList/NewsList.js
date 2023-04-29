import classes from "./NewsList.module.css";
import { CircularProgress } from "@mui/material";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  activeToggler,
  activeTogglerAllFalse,
} from "../../HelperFunctions/ActiveToggler";
import { useContext, useEffect } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";

const NewsList = (props) => {
  // Context
  const { isSendingRequest, setOffsetValue, offsetValue } =
    useContext(SportDmNewsContext);

  //   Navigate
  const navigate = useNavigate();

  useEffect(() => {
    setOffsetValue(0);
  }, []);

  useEffect(() => {
    props.fetchFunction();
  }, [offsetValue]);

  return (
    <div className={classes.container}>
      {isSendingRequest && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <CircularProgress
            size="1rem"
            color="inherit"
            style={{ color: "#ffd91b" }}
          />
        </div>
      )}

      {props.list.length < 0 && !isSendingRequest ? (
        <div>No Ads found</div>
      ) : (
        props.list.map((item, i) => {
          return (
            <div className={classes.listItemOuter} key={i}>
              <div className={classes.listItem}>
                <div
                  className={classes.leftSection}
                  onClick={() => {
                    navigate(`/sportdm-news/edit/${item.uri}`);
                  }}
                >
                  <div className={classes.adName}>{item.headline}</div>
                </div>
                <div className={classes.rightSection}>
                  <div>
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        navigate(`/sportdm-news/edit/${item.id}`);
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      activeToggler(i, props.list, props.setList);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              </div>
              <div
                className={classes.deleteOption}
                style={
                  item.isActive
                    ? { maxHeight: "200px" }
                    : { maxHeight: "0px", visibility: "hidden" }
                }
              >
                <p>Are you sure you want to delete?</p>
                <button
                  className={classes.uploadButton}
                  //   onClick={() => {
                  //     deteleAd(item.id);
                  //   }}
                >
                  Yes
                </button>
                <button
                  className={classes.uploadButton2}
                  onClick={() => {
                    activeTogglerAllFalse(i, props.list, props.setList);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          );
        })
      )}

      <div
        className={classes.showMore}
        onClick={() => {
          setOffsetValue((prevState) => prevState + 10);
        }}
      >
        Show more
      </div>
    </div>
  );
};

export default NewsList;
