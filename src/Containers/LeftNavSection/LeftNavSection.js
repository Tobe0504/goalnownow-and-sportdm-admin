import classes from "./LeftNavSection.module.css";
import { navItems } from "../../Utilities/navItems";
import { Link } from "react-router-dom";

const LeftNavSection = () => {
  return (
    <div className={classes.container}>
      {navItems.map((item, i) => {
        return (
          <Link to={item.route} className={classes.navItem} key={i}>
            <div>{item.icon}</div>
            <div>{item.title}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default LeftNavSection;
