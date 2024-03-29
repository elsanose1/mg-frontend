import React from "react";
import { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import Table from "../../../../Components/Admin/Table/Table";
import Loader from "../../../../Components/UI/Loader";

const SchoolsPage = () => {
  const { schools } = useLoaderData();
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Await resolve={schools}>{(data) => <Table data={data} />}</Await>
      </Suspense>
    </>
  );
};

const loadSchools = async () => {
  const res = await fetch("https://mgbackend.onrender.com/api/v1/schools", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Cloud't fetch data!" }), {
      status: 500,
    });
  } else {
    const data = await res.json();

    return data.data.docs;
  }
};
export const fetchSchools = async () => {
  return defer({
    schools: loadSchools(),
  });
};

export default SchoolsPage;
