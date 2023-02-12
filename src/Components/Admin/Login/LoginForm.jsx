import React, { useRef } from "react";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  const isLoading = props.isLoading;
  const emailInput = useRef();
  const passwordInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      email: emailInput.current.value,
      password: passwordInput.current.value,
    };
    props.onLogin(user);
  };

  return (
    <div className={classes["form-wraper"]}>
      <form onSubmit={submitHandler} className={classes["student-form"]}>
        <h1 className={classes["student-form__title"]}>Login</h1>
        {props.errors && (
          <p className={classes.error}>Email or Password is wrong...</p>
        )}

        <div className={classes["student-form__row"]}>
          <label htmlFor="email">Email</label>
          <input
            ref={emailInput}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className={classes["student-form__row"]}>
          <label htmlFor="password">password</label>
          <input
            ref={passwordInput}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>

        <button type="submit" disabled={isLoading} className={classes.btn}>
          {isLoading ? "Loading.." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
