import React from "react";
import { Outlet } from "react-router-dom";
import SubNav from "../../../../Components/Admin/Stores/SubNav";

const Root = () => {
  return (
    <>
      <SubNav />
      <Outlet />
    </>
  );
};

export default Root;
