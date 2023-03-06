import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./Root.module.scss";

const Root = () => {
  const [isPanelActive, setIsPanelActive] = useState(false);
  return (
    <>
      {!isPanelActive && (
        <button
          onClick={(e) => setIsPanelActive(true)}
          className={`${classes["open-btn"]}`}
        >
          <i className="material-icons">navigate_next</i>
        </button>
      )}
      <aside
        className={`${classes["side-nav"]} ${
          isPanelActive ? classes["acticv-nav"] : ""
        }`}
      >
        <span
          onClick={(e) => setIsPanelActive(false)}
          className={classes["close-btn"]}
        >
          <i className="material-icons">close</i>
        </span>
        <div className={classes.links}>
          <ul>
            <li onClick={(e) => setIsPanelActive(false)}>
              <NavLink
                to="users"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Users
              </NavLink>
            </li>
            <li onClick={(e) => setIsPanelActive(false)}>
              <NavLink
                to="schools"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Schools
              </NavLink>
            </li>
            <li onClick={(e) => setIsPanelActive(false)}>
              <NavLink
                to="stores"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Stores
              </NavLink>
            </li>
            <li onClick={(e) => setIsPanelActive(false)}>
              <NavLink
                to="clients"
                className={({ isActive }) => (isActive ? classes.active : "")}
              >
                Clients
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <Outlet />
    </>
  );
};

export default Root;
