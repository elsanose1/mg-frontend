import React from "react";
import classes from "./Users.module.scss";
import PasswordForm from "../../../../../Components/Admin/CPanel/Users/PasswordForm";
import UserForm from "../../../../../Components/Admin/CPanel/Users/UserForm";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../../../../Components/UI/Loader";

const UserDetail = () => {
  const { user } = useLoaderData();
  return (
    <div className={classes["user-form__container"]}>
      <Suspense fallback={<Loader />}>
        <Await resolve={user}>
          {(loadedUser) => (
            <div className={classes.forms}>
              <UserForm user={loadedUser} />
              <PasswordForm user={loadedUser} />
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

const fetchUser = async (userID) => {
  const res = await fetch(
    `https://mgbackend.onrender.com/api/v1/users/${userID}`,
    {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    }
  );

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Cloud't fetch data!" }), {
      status: 500,
    });
  } else {
    const data = await res.json();
    return data.data.item;
  }
};

export const getUser = async ({ params }) => {
  const { userID } = params;
  return defer({
    user: fetchUser(userID),
  });
};
export default UserDetail;
