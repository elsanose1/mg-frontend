import React, { useState } from "react";
import { defer, useNavigate } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import StudentForm from "../Components/StudentForm/StudentForm";
import Modal from "../Components/UI/Modal";

const RegesterStudent = (props) => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isRegesterd, setIsRegesterd] = useState(false);
  const submitHandler = async (user) => {
    if (!user.school || user.school.length === 0) {
      setErrors("Please Select School");
      return;
    }
    setIsLoading(true);
    setErrors("");
    try {
      const res = await fetch("https://mgbackend.onrender.com/api/v1/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...user }),
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
        errors={errors}
        submitHandler={submitHandler}
        isLoading={isLoading}
      />
    </>
  );
};

const getSchoolsNames = async () => {
  const res = await fetch(
    "https://mgbackend.onrender.com/api/v1/schools/onlynames"
  );

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Cloud't fetch data!" }), {
      status: 500,
    });
  } else {
    const data = await res.json();
    const dataList = data.data.schools.map((el) => {
      return { ...el, label: el.title };
    });
    return dataList;
  }
};

export const fetchSchoolsNames = async () => {
  return defer({
    schools: await getSchoolsNames(),
  });
};
export default RegesterStudent;
