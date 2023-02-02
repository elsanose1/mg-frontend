import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SchoolStyles.module.scss";

const SubNav = () => {
  return (
    <nav className={classes["sub-nav"]}>
      <NavLink
        to="/admin/dashboard/schools"
        className={({ isActive }) => (isActive ? classes.active : "")}
        end
      >
        All Schools
      </NavLink>
      <NavLink
        to="/admin/dashboard/schools/new"
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        New School
      </NavLink>
    </nav>
  );
};

export default SubNav;
