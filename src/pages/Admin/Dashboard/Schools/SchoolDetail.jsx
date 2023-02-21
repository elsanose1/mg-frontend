import React, { useState } from "react";
import { defer, redirect, useLoaderData, useNavigate } from "react-router-dom";
import EditSchoolForm from "../../../../Components/Admin/Schools/EditSchool";
import EmployeeTable from "../../../../Components/Admin/Table/EmployeeTable";
import Modal from "../../../../Components/UI/Modal";
import classes from "./SchoolDetail.module.scss";

let content = "";
const SchoolDetail = () => {
  const { school } = useLoaderData();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const deleteSchool = async () => {
    // const res = await fetch ()
    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/schools/${school._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ isActive: false }),
      }
    );

    if (!res.ok) {
      content = "Error happend plz try again..";
    } else {
      content = "School Deleted Successfully..";
    }

    setShowAlert(true);

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  return (
    <main>
      {showAlert && (
        <Modal>
          <h1> {content} </h1>
        </Modal>
      )}
      <div className={classes["school-header"]}>
        <span>created At : {new Date(school.createdAt).toLocaleString()}</span>
        <span>Last Update : {new Date(school.updatedAt).toLocaleString()}</span>
        <span>Creator : {school.creator.name}</span>
        <button onClick={deleteSchool}>Delete</button>
      </div>
      <div className={classes.container}>
        <div className={classes["school-detail"]}>
          <EditSchoolForm school={school} />
        </div>
        <div className={classes["employe-detail"]}>
          <EmployeeTable school={school} />
        </div>
      </div>
    </main>
  );
};

export const fetchSchool = async ({ requset, params }) => {
  const schoolID = params.schoolID;
  let schoolName = "";
  let school;

  try {
    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/schools/${schoolID}`
    );

    if (!res.ok) {
      return redirect("/");
    }
    if (res.ok) {
      const data = await res.json();
      schoolName = data.data.item.title;
      school = data.data.item;
    }
  } catch (error) {}

  return defer({
    school,
    schoolName,
    schoolID,
  });
};

export default SchoolDetail;
