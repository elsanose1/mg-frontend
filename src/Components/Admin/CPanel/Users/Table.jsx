import React from "react";
import { Link } from "react-router-dom";
import classes from "./Users.module.scss";

const Table = ({ data }) => {
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
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
