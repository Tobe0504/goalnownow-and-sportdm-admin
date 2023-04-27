import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import classes from "./AdsList.module.css";
import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";
import { CircularProgress } from "@mui/material";

const AdsList = (props) => {
  // navigate
  const navigate = useNavigate();

  // context
  const { isSendingRequest } = useContext(AdContext);
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
                <div>
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AdsList;
