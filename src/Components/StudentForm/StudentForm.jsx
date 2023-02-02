import { useRef } from "react";
import classes from "./StudentForm.module.css";

const StudentForm = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const NOC = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const user = {
      name: `${firstName.current.value.trim()} ${lastName.current.value.trim()}`,
      email: email.current.value,
      phone: phone.current.value,
      NOC: NOC.current.value,
    };

    props.submitHandler(user);
  };

  return (
    <div className={classes["form-wraper"]}>
      <form onSubmit={submitHandler} className={classes["student-form"]}>
        <h2 className={classes["student-form__title"]}>
          Welcome {props.schoolName} School
        </h2>
        <h1 className={classes["student-form__title"]}>
          Subscribe with us to get more gift(s)
        </h1>
        <p className={classes.error}>{props.errors}</p>
        <div className={classes["student-form__row"]}>
          <label htmlFor="firstname">First Name</label>
          <input
            ref={firstName}
            type="text"
            name="firstname"
            maxLength="10"
            minLength="3"
            id="firstname"
            placeholder="John"
            required
          />
        </div>
        <div className={classes["student-form__row"]}>
          <label htmlFor="lastname">Last Name</label>
          <input
            ref={lastName}
            type="text"
            name="lastname"
            maxLength="10"
            minLength="3"
            id="lastname"
            placeholder="Doe"
            required
          />
        </div>
        <div className={classes["student-form__row"]}>
          <label htmlFor="email">Email</label>
          <input
            ref={email}
            type="email"
            name="email"
            id="email"
            required
            placeholder="johnDoe@email.com"
          />
        </div>
        <div className={classes["student-form__row"]}>
          <label htmlFor="phone">phone</label>
          <input
            ref={phone}
            type="text"
            name="phone"
            maxLength="11"
            minLength="11"
            id="phone"
            placeholder="01234567890"
            required
          />
        </div>
        <div className={classes["student-form__row"]}>
          <label htmlFor="children">Number of Children in this school</label>
          <input
            type="number"
            name="children"
            min="1"
            max="6"
            id="children"
            placeholder="1"
            defaultValue="1"
            required
          />
        </div>
        <button type="submit" className={classes.btn}>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
