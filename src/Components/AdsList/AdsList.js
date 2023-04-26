import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import classes from "./AdsList.module.css";

const AdsList = (props) => {
  // navigate
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      {props.list.map((item, i) => {
        return (
          <div className={classes.listItem}>
            <div className={classes.leftSection}>
              <div className={classes.adName}>{item.name}</div>
            </div>
            <div className={classes.rightSection}>
              <div className={classes.adDiration}>{item.duration}</div>
              <div>
                <FontAwesomeIcon
                  icon={faPencil}
                  onClick={() => {
                    navigate(`/ads/edit-ad/${i}`);
                  }}
                />
              </div>
              <div>
                <FontAwesomeIcon icon={faTrash} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AdsList;
