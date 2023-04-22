import {
  faEllipsisVertical,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./AdsList.module.css";

const AdsList = (props) => {
  return (
    <div className={classes.container}>
      {props.list.map((item) => {
        return (
          <div className={classes.listItem}>
            <div className={classes.leftSection}>
              <div className={classes.adName}>{item.name}</div>
            </div>
            <div className={classes.rightSection}>
              <div className={classes.adDiration}>{item.duration}</div>
              <div>
                <FontAwesomeIcon icon={faPencil} />
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
