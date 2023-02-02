import React from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../../../../Components/Admin/Table/Table";

const SchoolsPage = () => {
  const { schools } = useLoaderData();
  return (
    <>
      <Table data={schools} />
    </>
  );
};

export const fetchSchools = async () => {
  const res = await fetch("https://mgbackend.onrender.com/api/v1/schools", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  });
  const data = await res.json();

  return {
    schools: data.data.docs,
  };
};

export default SchoolsPage;
