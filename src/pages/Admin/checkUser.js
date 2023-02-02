import jwtDecode from "jwt-decode";
import { redirect } from "react-router-dom";

export const isAuthonticated = async (role) => {
  const token = localStorage.getItem("jwt");

  if (!token) {
    return redirect("/admin/login");
  }
  const user = jwtDecode(token);

  const { exp } = user;
  if (exp < (new Date().getTime() + 1) / 1000) {
    return redirect("/admin/login");
  }

  if (role === "admin" && !(user.role === "admin")) {
    return redirect("/admin/dashboard/schools");
  }

  return user;
};
