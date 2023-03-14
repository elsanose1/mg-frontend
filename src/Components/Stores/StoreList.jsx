import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { govrnments, cities } from "../Data/data";
import Banner from "./Banner";
import StoreCard from "./StoreCard";
import classes from "./Stores.module.scss";

const StoreList = ({ stores }) => {
  const isStoreAvilable = stores && stores.length > 0;
  const [selectedCity, setSelectedCity] = useState();
  const [selectedGov, setSelectedGov] = useState({});
  const [storesList, setStoresList] = useState([]);
  const [cityList, setCityList] = useState([]);

  // change store depend on city
  useEffect(() => {
    if (!selectedGov) {
      return;
    }
    // if city null or all
    if (!selectedCity || selectedCity.id === "0") {
      const selectedStores = stores.filter(
        (item) => item.city.governorate_id === selectedGov.id
      );
      setStoresList([...selectedStores].reverse());
      return;
    }

    const selectedStores = stores.filter(
      (item) => item.city.id === selectedCity.id
    );
    setStoresList(selectedStores);
  }, [selectedCity, selectedGov, stores]);

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

  // gov change handler
  useEffect(() => {
    if (!selectedGov || selectedGov.id === "0") {
      setStoresList([...stores].reverse());
      return;
    }

    const selectedStores = stores.filter(
      (item) => item.city.governorate_id === selectedGov.id
    );

    setStoresList(selectedStores.reverse());
  }, [selectedGov, stores]);

  useEffect(() => {
    setStoresList([...stores].reverse());
  }, [stores]);
  return (
    <>
      <Banner />
      <div className={classes.filter}>
        <Autocomplete
          onChange={(e, v) => setSelectedGov(v)}
          options={[
            {
              id: "0",
              governorate_name_ar: "الكل",
              governorate_name_en: "All",
            },
            ...govrnments,
          ]}
          getOptionLabel={(option) => option.governorate_name_ar}
          fullWidth={true}
          // sx={{ width: 200, margin: "auto" }}
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
          options={[
            {
              id: "0",
              governorate_id: "0",
              city_name_ar: "الكل",
              city_name_en: "All",
            },
            ...cityList,
          ]}
          getOptionLabel={(option) => option.city_name_ar}
          isOptionEqualToValue={(o, v) => true}
          fullWidth={true}
          renderInput={(params) => <TextField {...params} label="City" />}
        />
      </div>
      <div dir="rtl" className={classes.results}>
        <span>عدد المكتبات : {storesList.length}</span>
      </div>
      <div dir="rtl" className={classes["stores-container"]}>
        {isStoreAvilable &&
          storesList.length > 0 &&
          storesList.map((store) => (
            <StoreCard key={store._id} store={store} />
          ))}
        {storesList.length === 0 && <h1>لا يوجد مكتبات</h1>}
      </div>
    </>
  );
};

export default StoreList;
