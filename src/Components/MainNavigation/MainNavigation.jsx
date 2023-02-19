import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={classes["main-nav"]}>
      <ul className={classes["main-nav__list"]}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/stores"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Stores
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainNavigation;
