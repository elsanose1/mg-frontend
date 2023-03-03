import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import classes from "./StudentForm.module.css";
import { useState, useRef } from "react";
import { cities, govrnments } from "../Data/data";
import { useEffect } from "react";

const StudentForm = (props) => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phone = useRef();
  const NOC = useRef();
  const [selectedSchool, setSelectedSchool] = useState({});
  const [selectedGov, setSelectedGov] = useState({});
  const [selectedCity, setSelectedCity] = useState({});
  const [shcoolsList, setSchoolsList] = useState([]);
  const [cityList, setCityList] = useState();

  // change city depend on gov
  useEffect(() => {
    if (!selectedGov) {
      setCityList([]);
      return;
    }
    const selectedCities = cities.filter(
      (item) => item.governorate_id === selectedGov.id
    );
    setCityList(selectedCities);
  }, [selectedGov]);

  // // change school depend on city
  useEffect(() => {
    if (!selectedCity) {
      setSchoolsList([]);
      return;
    }
    const selectedSchool = props.schools.filter(
      (item) => item.city.id === selectedCity.id
    );
    setSchoolsList(selectedSchool);
  }, [props.schools, selectedCity]);
  const submitHandler = (e) => {
    e.preventDefault();

    const user = {
      name: `${firstName.current.value.trim()} ${lastName.current.value.trim()}`,
      email: email.current.value,
      phone: phone.current.value,
      NOC: NOC.current.value,
      school: selectedSchool._id,
    };
    props.submitHandler(user);
  };

  return (
    <div className={classes["form-wraper"]}>
      <form onSubmit={submitHandler} className={classes["student-form"]}>
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
            placeholder="Ahmed"
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
            placeholder="Mohamed"
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
            placeholder="Ahmed@email.com"
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
            ref={NOC}
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
        <div className={classes["student-form__row"]}>
          <Autocomplete
            onChange={(e, v) => setSelectedGov(v)}
            options={govrnments}
            getOptionLabel={(option) => option.governorate_name_en}
            fullWidth={true}
            isOptionEqualToValue={(o, v) =>
              v.governorate_name_en === o.governorate_name_en
            }
            renderInput={(params) => (
              <TextField {...params} label="Governorate" />
            )}
          />
          <Autocomplete
            onChange={(e, v) => setSelectedCity(v)}
            disabled={!cityList || cityList.length === 0}
            options={cityList}
            getOptionLabel={(option) => option.city_name_en}
            isOptionEqualToValue={(o, v) => true}
            fullWidth={true}
            renderInput={(params) => <TextField {...params} label="City" />}
          />
          <Autocomplete
            onChange={(e, v) => setSelectedSchool(v)}
            disabled={false}
            options={shcoolsList}
            isOptionEqualToValue={(o, v) => true}
            fullWidth={true}
            renderInput={(params) => <TextField {...params} label="Shcool" />}
          />
        </div>
        <button
          type="submit"
          disabled={props.isLoading}
          className={classes.btn}
        >
          {props.isLoading ? "Loading..." : "Subscribe"}
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
