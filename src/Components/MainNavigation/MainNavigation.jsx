import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes["main-nav"]}>
      <ul className={classes["main-nav__list"]}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Stores</NavLink>
        </li>
        <li>
          <NavLink to="/">Products</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
