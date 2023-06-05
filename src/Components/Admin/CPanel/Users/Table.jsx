import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Users.module.scss";

const Table = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const removeHandler = async (id) => {
    const premtion = window.confirm(
      "Are You sure You want to delete this Account"
    );
    if (!premtion) {
      return;
    }
    setIsLoading(true);
    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/users/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      }
    );

    if (!res.ok) {
      console.log("error");
    } else {
      navigate(0);
    }
    setIsLoading(false);
  };
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email </th>
          <th>Role</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.role}</td>
            <td className={classes.r}>
              <Link to={`${item._id}`}>View</Link>
              <button
                disabled={isLoading}
                onClick={(e) => removeHandler(item._id)}
                className={`${classes["table-btn"]} ${classes["red-btn"]}`}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
