import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Users.module.scss";
const UserForm = ({ user }) => {
  const navigate = useNavigate();
  const Fname = useRef();
  const Lname = useRef();
  const email = useRef();
  const role = useRef();

  useEffect(() => {
    Fname.current.value = user.name.split(" ")[0];
    Lname.current.value = user.name.split(" ")[1];
    email.current.value = user.email;
  }, [user.email, user.name, user.role]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const userData = {
      name: `${Fname.current.value.trim()} ${Lname.current.value.trim()}`,
      email: email.current.value,
      role: role.current.value.toLowerCase(),
    };

    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/users/${user._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(userData),
      }
    );

    if (!res.ok) {
      throw new Error("Something Wrong Happend");
    } else {
      navigate(0);
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes["form-row"]}>
        <label htmlFor="FName">First Name</label>
        <input
          required
          type="text"
          id="FName"
          name="FName"
          placeholder="First Name"
          ref={Fname}
        />
      </div>
      <div className={classes["form-row"]}>
        <label htmlFor="LName">Last Name</label>
        <input
          required
          type="text"
          id="LName"
          name="LName"
          placeholder="Last Name"
          ref={Lname}
        />
      </div>
      <div className={classes["form-row"]}>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          ref={email}
        />
      </div>
      <div className={classes["form-row"]}>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" ref={role}>
          <option selected={user.role === "user"} value="user">
            User
          </option>
          <option selected={user.role === "admin"} value="Admin">
            Admin
          </option>
        </select>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
