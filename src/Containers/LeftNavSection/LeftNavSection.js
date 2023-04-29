import classes from "./LeftNavSection.module.css";
import { navItems } from "../../Utilities/navItems";
import { Link, useLocation } from "react-router-dom";

const LeftNavSection = () => {
  // location
  const location = useLocation();
  return (
    <div className={classes.container}>
      {navItems.map((item, i) => {
        return (
          <Link
            to={item.route}
            className={`${classes.navItem} ${
              location.pathname.split("/")[1].includes(item.route.split("/")[1])
                ? classes.active
                : null
            }`}
            key={i}
          >
            <div>{item.icon}</div>
            <div>{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftNavSection;
