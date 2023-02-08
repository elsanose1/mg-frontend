import React, { useRef } from "react";
import classes from "./EmployeeForm.module.scss";

const EmployeeForm = ({ onSubmit }) => {
  const nameInput = useRef();
  const roleInput = useRef();
  const phoneInput = useRef();
  const emailInput = useRef();

  const sendData = (e) => {
    e.preventDefault();
    const emp = {
      name: nameInput.current.value,
      role: roleInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value,
    };
    onSubmit(emp);
  };

  return (
    <form onSubmit={sendData} className={classes["emp-form"]}>
      <h2>Add Employee</h2>
      <div className={classes.row}>
        <label htmlFor="name">Name</label>
        <input
          ref={nameInput}
          required
          type="text"
          placeholder="Ahmed"
          name="name"
          id="name"
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="role">Role</label>
        <input
          ref={roleInput}
          type="text"
          placeholder="Marketer"
          name="role"
          id="role"
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="email">Email</label>
        <input
          ref={emailInput}
          type="email"
          placeholder="John@mail.com"
          name="email"
          id="email"
        />
      </div>
      <div className={classes.row}>
        <label htmlFor="phone">Phone</label>
        <input
          ref={phoneInput}
          type="text"
          placeholder="012345678910"
          name="phone"
          id="phone"
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default EmployeeForm;
