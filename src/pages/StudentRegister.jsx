import React, { useState } from "react";
import { defer, redirect, useLoaderData, useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import StudentForm from "../Components/StudentForm/StudentForm";
import Modal from "../Components/UI/Modal";

const RegesterStudent = (props) => {
  const navigate = useNavigate();
  const { schoolName, schoolID } = useLoaderData();
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegesterd, setIsRegesterd] = useState(false);
  const submitHandler = async (user) => {
    setIsLoading(true);
    setErrors("");
    try {
      const res = await fetch("https://mgbackend.onrender.com/api/v1/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user, school: schoolID }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.Error.keyValue) {
          setErrors(`${Object.keys(data.Error.keyValue)[0]} Alredy Exists`);
        } else {
          setErrors("Please Provide Valide Data");
        }
      }
      if (res.ok) {
        setIsRegesterd(true);
        setTimeout(() => navigate("/products"), 1000);
      }
    } catch (error) {}

    setIsLoading(false);
  };
  return (
    <>
      {isRegesterd && (
        <Modal>
          <h1>Registered Successfully</h1>
        </Modal>
      )}
      <MainNavigation />
      <StudentForm
        schoolName={schoolName}
        errors={errors}
        submitHandler={submitHandler}
        isLoading={isLoading}
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
