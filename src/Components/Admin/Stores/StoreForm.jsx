import React, { useState } from "react";
import classes from "./StoreStyles.module.scss";
import { cities, govrnments } from "../../Data/data";
import { useNavigate } from "react-router-dom";

const StoreForm = () => {
  const navigate = useNavigate();
  const [storeTitleInput, setstoreTitleInput] = useState();
  const [storeNameInput, setstoreNameInput] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();
  const [image, setImage] = useState();
  const [address, setAddress] = useState();
  const [cityInput, setCityInput] = useState();
  const [citiesArray, setCitiesArray] = useState([]);
  const [isError, setIsError] = useState(false);

  const govChangeHandler = (e) => {
    const tempCities = cities.filter(
      (city) => city.governorate_id === e.target.value
    );
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
      title: storeTitleInput,
      name: storeNameInput,
      address,
      map: location,
      phone,
      img: image,
      city: cityInput,
    };

    try {
      const res = await fetch("https://mgbackend.onrender.com/api/v1/stores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setIsError(true);
        return null;
      }

      navigate("/admin/dashboard/stores");
    } catch (error) {
      setIsError(true);
    }
  };
  return (
    <div className={classes["form-wraper"]}>
      <form onSubmit={submitHandler} className={classes["area-form"]}>
        {isError && <span>Somthing went wrong</span>}
        <div className={classes.row}>
          <label htmlFor="name">Store Title</label>
          <input
            value={storeTitleInput}
            onChange={(e) => setstoreTitleInput(e.target.value)}
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
            value={storeNameInput}
            onChange={(e) => setstoreNameInput(e.target.value)}
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
          <label htmlFor="img">Image</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="url"
            id="img"
            name="img"
            placeholder="Image Link"
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

          <select required onChange={govChangeHandler} name="gov" id="gov">
            <option value="">Select Government</option>
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

export default StoreForm;
