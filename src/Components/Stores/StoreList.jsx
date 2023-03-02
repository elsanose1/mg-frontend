import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { govrnments } from "../Data/data";
import Banner from "./Banner";
import StoreCard from "./StoreCard";
import classes from "./Stores.module.scss";

const StoreList = ({ stores }) => {
  const isStoreAvilable = stores && stores.length > 0;
  const [selectedGov, setSelectedGov] = useState({});
  const [storesList, setStoresList] = useState([]);

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
          getOptionLabel={(option) => option.governorate_name_en}
          // fullWidth={true}
          sx={{ width: 200, margin: "auto" }}
          isOptionEqualToValue={(o, v) =>
            v.governorate_name_en === o.governorate_name_en
          }
          renderInput={(params) => (
            <TextField {...params} label="Governorate" />
          )}
        />
      </div>
      <div dir="rtl" className={classes["stores-container"]}>
        {isStoreAvilable &&
          storesList.map((store) => (
            <StoreCard key={store._id} store={store} />
          ))}
      </div>
    </>
  );
};

export default StoreList;
