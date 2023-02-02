import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./StoreStyles.module.scss";

const SubNav = () => {
  return (
    <nav className={classes["sub-nav"]}>
      <NavLink
        to="/admin/dashboard/stores"
        className={({ isActive }) => (isActive ? classes.active : "")}
        end
      >
        All Stores
      </NavLink>
      <NavLink
        to="/admin/dashboard/stores/new"
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        New Store
      </NavLink>
    </nav>
  );
};

export default SubNav;
