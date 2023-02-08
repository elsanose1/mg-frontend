import React, { useEffect, useState } from "react";
import classes from "./StoreStyles.module.scss";
import { cities, govrnments } from "../../Data/data";
import { useNavigate } from "react-router-dom";

const EditSchoolForm = ({ school }) => {
  const navigate = useNavigate();
  const [schoolNameInput, setSchoolNameInput] = useState();
  const [schoolTitleInput, setSchoolTitleInput] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [cityInput, setCityInput] = useState();
  const [citiesArray, setCitiesArray] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setSchoolTitleInput(school.title);
    setSchoolNameInput(school.name);
    setAddress(school.address);
    setLocation(school.map);
    setPhone(school.phone);
    govChangeHandler(school.city.governorate_id);
    setCityInput(school.city);
  }, [
    school.address,
    school.city,
    school.map,
    school.name,
    school.phone,
    school.title,
  ]);

  const govChangeHandler = (gov_id) => {
    const tempCities = cities.filter((city) => city.governorate_id === gov_id);
    setCitiesArray(tempCities);
    setCityInput(tempCities[0]);
  };
  const cityChangeHandler = (e) => {
    const tempCity = cities.find((item) => item.id === e.target.value);
    setCityInput(tempCity);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      title: schoolTitleInput,
      name: schoolNameInput,
      address,
      phone,
      map: location,
      city: cityInput,
    };

    try {
      const res = await fetch(
        `https://mgbackend.onrender.com/api/v1/stores/${school._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
          },
          body: JSON.stringify({ ...data }),
        }
      );

      if (!res.ok) {
        setIsError(true);
        return null;
      }

      navigate(0);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  return (
    <div className={classes["form-wraper"]}>
      <form onSubmit={submitHandler} className={classes["area-form"]}>
        {isError && <span>Somthing went wrong</span>}
        <div className={classes.row}>
          <label htmlFor="title">Store Title</label>
          <input
            value={schoolTitleInput}
            onChange={(e) => setSchoolTitleInput(e.target.value)}
            type="text"
            id="title"
            name="title"
            placeholder="Nile"
            required
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="name">Store Name</label>
          <input
            value={schoolNameInput}
            onChange={(e) => setSchoolNameInput(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="Nile"
            required
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="address">Address</label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            required
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="address">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            id="phone"
            name="phone"
            placeholder="01234567891"
            required
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="location">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="url"
            id="location"
            name="location"
            placeholder="Google Map Link"
            required
          />
        </div>
        <div className={classes.row}>
          <label htmlFor="gov">Government</label>
          <select
            defaultValue={school.city.governorate_id}
            required
            onChange={(e) => govChangeHandler(e.target.value)}
            name="gov"
            id="gov"
          >
            {govrnments.map((gov) => (
              <option value={gov.id} key={gov.id}>
                {gov.governorate_name_en}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.row}>
          <label htmlFor="gov">City</label>

          <select
            defaultValue={school.city.city_name_en}
            required
            onChange={cityChangeHandler}
            name="city"
            id="city"
            disabled={citiesArray.length === 0}
          >
            {citiesArray.map((city) => (
              <option value={city.id} key={city.id}>
                {city.city_name_en}
              </option>
            ))}
          </select>
        </div>

        <button className={classes.btn}>Save</button>
      </form>
    </div>
  );
};

export default EditSchoolForm;
