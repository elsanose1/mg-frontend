import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-div">
      <h1>404</h1>
      <h1>Somthing Went Wrong</h1>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default ErrorPage;
