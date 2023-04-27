import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import classes from "./AdsList.module.css";
import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";
import { CircularProgress } from "@mui/material";
import {
  activeToggler,
  activeTogglerAllFalse,
} from "../../HelperFunctions/ActiveToggler";

const AdsList = (props) => {
  // navigate
  const navigate = useNavigate();

  // context
  const { isSendingRequest, deteleAd } = useContext(AdContext);
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
            <div
              className={classes.listItemOuter}
              onClick={() => {
                navigate(`/ad-info/${item.id}`);
              }}
            >
              <div className={classes.listItem}>
                <div className={classes.leftSection}>
                  <div className={classes.adName}>{item.name}</div>
                </div>
                <div className={classes.rightSection}>
                  <div className={classes.adDiration}>
                    {item.duration} days left
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        navigate(`/ads/edit-ad/${item.id}`);
                      }}
                    />
                  </div>
                  <div
                    onClick={() => {
                      activeToggler(i, props.list, props.setList);
                      console.log(props.list);
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
                  onClick={() => {
                    deteleAd(item.id);
                  }}
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
    </div>
  );
};

export default AdsList;
