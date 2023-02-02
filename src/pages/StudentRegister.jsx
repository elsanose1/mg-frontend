import MainNavigation from "../Components/MainNavigation/MainNavigation";
import StudentForm from "../Components/StudentForm/StudentForm";
import React, { useState } from "react";
import { defer, redirect, useLoaderData } from "react-router-dom";

const RegesterStudent = (props) => {
  const { schoolName, schoolID } = useLoaderData();
  const [errors, setErrors] = useState("");
  const submitHandler = async (user) => {
    setErrors("");
    try {
      const res = await fetch("http://127.0.0.1:8080/api/v1/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user, school: schoolID }),
      });

      const data = await res.json();
      if (!res.ok) {
        console.log(data);
        if (data.Error.keyValue) {
          setErrors(`${Object.keys(data.Error.keyValue)[0]} Alredy Exists`);
        } else {
          setErrors("Please Provide Valide Data");
        }
      }
      if (res.ok) {
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainNavigation />
      <StudentForm
        schoolName={schoolName}
        errors={errors}
        submitHandler={submitHandler}
      />
    </>
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

export default RegesterStudent;
