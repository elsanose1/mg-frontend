import { Link } from "react-router-dom";
import classes from "./Table.module.scss";
import { cities, govrnments } from "../../Data/data";
import { useEffect, useState } from "react";

export default function Table({ data }) {
  const [datasList, setDatasList] = useState(data);
  const [fillterType, setFillterType] = useState("location");
  const [nameFilter, setNameFilter] = useState("");
  const [gov, setGov] = useState(0);
  const [city, setCity] = useState(0);
  const [citiesList, setCitiesList] = useState([]);

  const govChangeHandler = (e) => {
    setGov(e.target.value);
    if (+e.target.value === 0) {
      setCitiesList([]);
      setCity(0);
    } else {
      const tempCities = cities.filter(
        (city) => city.governorate_id === e.target.value
      );
      setCitiesList(tempCities);
      setCity(0);
    }
  };

  const nameFilterChangeHandler = (e) => {
    const input = e.target.value;
    setNameFilter(input);
    if (input.length === 0) {
      setDatasList(data);
      return;
    }
    const tempList = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDatasList(tempList);
  };

  useEffect(() => {
    if (+gov === 0) {
      setDatasList(data);
    } else {
      if (+city === 0) {
        const tempArr = data.filter(
          (school) => +school.city.governorate_id === +gov
        );
        setDatasList(tempArr);
      } else {
        const tempArr = data.filter((school) => +school.city.id === +city);
        setDatasList(tempArr);
      }
    }
  }, [setDatasList, gov, city, data]);

  return (
    <>
      <div className={classes.filter}>
        <div className={classes.row}>
          <button
            onClick={(e) => setFillterType("location")}
            className={`secnd-btn ${
              fillterType === "location" ? "active" : ""
            }`}
          >
            Location
          </button>
          <button
            onClick={(e) => setFillterType("name")}
            className={`secnd-btn ${fillterType === "name" ? "active" : ""}`}
          >
            Name
          </button>
        </div>
        {fillterType === "location" && (
          <>
            <div className={classes.row}>
              <label htmlFor="gov">Government</label>
              <select
                value={gov}
                onChange={govChangeHandler}
                name="gov"
                id="gov"
              >
                <option value="0">All</option>
                {govrnments.map((gov) => (
                  <option value={gov.id} key={gov.id}>
                    {gov.governorate_name_en}
                  </option>
                ))}
              </select>
            </div>
            <div className={classes.row}>
              <label htmlFor="gov">Cities</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                disabled={citiesList.length === 0}
                name="cities"
                id="cities"
              >
                <option value="0">All</option>
                {citiesList.map((city) => (
                  <option value={city.id} key={city.id}>
                    {city.city_name_en}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}
        {fillterType === "name" && (
          <div className={classes.row}>
            <input
              type="text"
              name="nameFilter"
              value={nameFilter}
              onChange={nameFilterChangeHandler}
            />
          </div>
        )}
        <span>NO of Rec: {datasList.length}</span>
      </div>
      <table className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Creator</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datasList.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.address}</td>
              <td>{item.city.city_name_en}</td>
              <td>{item.creator.name}</td>
              <td className={classes.r}>
                <Link to={`${item._id}`}>View</Link>
                <a href={item.map} target="_blank" rel="noreferrer">
                  Map
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
