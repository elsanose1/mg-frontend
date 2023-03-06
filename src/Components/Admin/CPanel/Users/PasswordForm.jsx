import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Users.module.scss";

const PasswordForm = ({ user }) => {
  const navigate = useNavigate();
  const newPassword = useRef();
  const confirmPassword = useRef();
  const [isError, setIsError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsError(false);
    const nPassword = newPassword.current.value.trim();
    const cPassword = confirmPassword.current.value.trim();
    if (nPassword !== cPassword) {
      setIsError(true);
      return;
    }

    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/users/update-user-password`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          email: user.email,
          newPassword: nPassword,
          confirmPassword: cPassword,
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Something Wrong Happend");
    } else {
      const data = await res.json();
      console.log(data);
      navigate(0);
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {isError && (
        <span className={classes.error}>Password Dose not Match</span>
      )}
      <div className={classes["form-row"]}>
        <label htmlFor="password">New Password</label>
        <input
          minLength="8"
          type="password"
          name="password"
          id="password"
          ref={newPassword}
        />
      </div>
      <div className={classes["form-row"]}>
        <label htmlFor="CPassword">Confirm Password</label>
        <input
          minLength="8"
          type="password"
          name="CPassword"
          id="CPassword"
          ref={confirmPassword}
        />
      </div>
      <button type="submit">Change Password</button>
    </form>
  );
};

export default PasswordForm;
