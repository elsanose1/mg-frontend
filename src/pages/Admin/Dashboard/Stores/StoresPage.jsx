import React from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../../../../Components/Admin/Table/Table";

const SchoolsPage = () => {
  const { stores } = useLoaderData();
  return (
    <>
      <Table data={stores} />
    </>
  );
};

export const fetchStores = async () => {
  const res = await fetch("https://mgbackend.onrender.com/api/v1/stores", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  });
  const data = await res.json();

  return {
    stores: data.data.docs,
  };
};

export default SchoolsPage;
