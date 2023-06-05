import React, { useState } from "react";
import classes from "./Users.module.scss";
import Table from "../../../../../Components/Admin/CPanel/Users/Table";
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../../../../../Components/UI/Loader";
import Modal from "../../../../../Components/UI/Modal";
import NewUserForm from "../../../../../Components/Admin/CPanel/Users/NewUserForm";
const Users = () => {
  const { users } = useLoaderData();
  const [showNewUser, setShowNewUser] = useState(false);
  return (
    <>
      {showNewUser && (
        <Modal hide={(e) => setShowNewUser(false)}>
          <NewUserForm />
        </Modal>
      )}
      <div className={classes["new-user__div"]}>
        <button onClick={(e) => setShowNewUser(true)}>+</button>
      </div>
      <div className={classes.table}>
        <Suspense fallback={<Loader />}>
          <Await resolve={users}>
            {(loadedUsers) => <Table data={loadedUsers} />}
          </Await>
        </Suspense>
      </div>
    </>
  );
};

const fetchUsers = async () => {
  const res = await fetch("https://mgbackend.onrender.com/api/v1/users", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  });

  if (!res.ok) {
    throw new Response(JSON.stringify({ message: "Cloud't fetch data!" }), {
      status: 500,
    });
  } else {
    const data = await res.json();
    return data.data.docs;
  }
};

export const getUsers = () => {
  return defer({
    users: fetchUsers(),
  });
};

export default Users;
