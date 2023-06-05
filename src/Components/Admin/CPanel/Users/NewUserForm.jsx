import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Users.module.scss";

const NewUserForm = () => {
  const navigate = useNavigate();
  const Fname = useRef();
  const Lname = useRef();
  const email = useRef();
  const role = useRef();
  const password = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsLoading(true);
    const user = {
      name: `${Fname.current.value.trim()} ${Lname.current.value.trim()}`,
      email: email.current.value,
      role: role.current.value.toLowerCase(),
      password: password.current.value,
      confirmPassword: password.current.value,
    };

    try {
      const res = await fetch(
        "https://mgbackend.onrender.com/api/v1/users/createUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify(user),
        }
      );

      if (!res.ok) {
        setIsError(true);
      } else {
        navigate(0);
        return;
      }
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {isError && <span style={{ color: "red" }}>Email is alredy exsits</span>}
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
        <label htmlFor="newemail">Email</label>
        <input
          required
          type="email"
          id="newemail"
          name="newemail"
          placeholder="Email"
          ref={email}
        />
      </div>
      <div className={classes["form-row"]}>
        <label htmlFor="newpassword">Password</label>
        <input
          required
          type="password"
          id="newpassword"
          name="newpassword"
          placeholder="Password"
          ref={password}
        />
      </div>
      <div className={classes["form-row"]}>
        <label htmlFor="role">Role</label>
        <select name="role" id="role" ref={role}>
          <option value="user">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      <button type="submit">{isLoading ? "Loading.." : "Save"}</button>
    </form>
  );
};

export default NewUserForm;
