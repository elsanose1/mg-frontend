import { NavLink, useNavigate, useRouteLoaderData } from "react-router-dom";
import classes from "./AdminNavigation.module.scss";

const MainNavigation = () => {
  const navigate = useNavigate();
  const user = useRouteLoaderData("admin");
  const isAdmin = user.role === "admin";
  const onLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  return (
    <>
      <div className={classes["admin-nav"]}>
        <ul className={classes["admin-nav__list"]}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/admin/dashboard/schools"
            >
              Schools
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : "")}
              to="/admin/dashboard/stores"
            >
              Stores
            </NavLink>
          </li>
          {isAdmin && (
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? classes.active : "")}
                to="/admin/dashboard/cpanel"
              >
                Admin
              </NavLink>
            </li>
          )}
        </ul>
        <div className={classes["user-info"]}>
          <span>{user.name.split(" ")[0]}</span>
          <button onClick={onLogout}>Logout</button>
        </div>
      </div>
    </>
  );
};

export default MainNavigation;
