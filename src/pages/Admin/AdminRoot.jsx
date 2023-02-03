import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import AdminNavigation from "../../Components/Admin/Navigation/AdminNavigation";
import Modal from "../../Components/UI/Modal";
import classes from "./AdminRoot.module.css";

const AdminRoot = () => {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && (
        <Modal>
          <h2>Loading...</h2>
        </Modal>
      )}
      <AdminNavigation />
      <div className={classes.wrapper}>
        <React.Suspense>
          <Outlet />
        </React.Suspense>
      </div>
    </>
  );
};

export default AdminRoot;
