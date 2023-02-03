import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/Admin/Login/LoginForm";

const Login = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      navigate("/admin/dashboard/");
    }
  }, [navigate]);

  const onLoginHandler = async (user) => {
    setIsLoading(true);
    setError(false);
    try {
      const res = await fetch(
        "https://mgbackend.onrender.com/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!res.ok) {
        setError(true);
        setIsLoading(false);
        return;
      }

      const data = await res.json();
      localStorage.setItem("jwt", data.token);
      navigate("/admin/dashboard/schools");
    } catch (error) {}
  };

  return (
    <>
      <LoginForm
        errors={error}
        isLoading={isLoading}
        onLogin={onLoginHandler}
      />
    </>
  );
};

export default Login;
