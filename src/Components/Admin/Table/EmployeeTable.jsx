import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../UI/Modal";
import EmployeeForm from "./EmployeeForm";
import classes from "./EmployeeTable.module.scss";

let isInit = true;
const EmployeeTable = ({ school }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [employeesList, setEmplyeeList] = useState(school.employees);
  const [showEmpForm, setShowEmpForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isSchool = location.pathname.includes("schools");
  const hideForm = () => {
    setShowEmpForm(false);
  };
  const removeEmp = (id) => {
    setIsLoading(true);
    const confirmation = window.confirm("Are you sure You want to delete this");
    if (!confirmation) {
      return;
    }
    const tempEmp = employeesList.filter((emp) => emp._id !== id);
    setEmplyeeList(tempEmp);

    setIsLoading(false);
  };

  const addEmp = (emp) => {
    setIsLoading(true);

    const tempList = [...employeesList, emp];
    setEmplyeeList(tempList);
    setShowEmpForm(false);

    setIsLoading(false);
  };

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }

    const updateEmployees = async () => {
      const res = await fetch(
        `https://mgbackend.onrender.com/api/v1/${
          isSchool ? "schools" : "stores"
        }/${school._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify({
            employees: employeesList,
          }),
        }
      );

      if (!res.ok) {
        return;
      }

      navigate(0);
    };
    updateEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeesList, isSchool, navigate]);

  return (
    <>
      {showEmpForm && (
        <Modal hide={hideForm}>
          <EmployeeForm school={school} onSubmit={addEmp} />
        </Modal>
      )}
      <button
        onClick={(e) => setShowEmpForm(true)}
        className={classes["add-emp"]}
        disabled={isLoading}
      >
        Add Employee
      </button>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button
                  disabled={isLoading}
                  onClick={(e) => removeEmp(item._id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeTable;
