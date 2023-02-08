import React, { useState } from "react";
import { defer, redirect, useLoaderData, useNavigate } from "react-router-dom";
import EditStoreForm from "../../../../Components/Admin/Stores/EditStore";
import Modal from "../../../../Components/UI/Modal";
import classes from "./StoreDetail.module.scss";

let content = "";
const StoreDetail = () => {
  const { store } = useLoaderData();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  const deletestore = async () => {
    // const res = await fetch ()
    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/stores/${store._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ isActive: false }),
      }
    );

    if (!res.ok) {
      console.log("error");
      content = "Error happend plz try again..";
    } else {
      content = "store Deleted Successfully..";
    }

    setShowAlert(true);

    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  return (
    <main>
      {showAlert && (
        <Modal>
          <h1> {content} </h1>
        </Modal>
      )}
      <div className={classes["school-header"]}>
        <span>created At : {new Date(store.createdAt).toLocaleString()}</span>
        <span>Last Update : {new Date(store.updatedAt).toLocaleString()}</span>
        <span>Creator : {store.creator.name}</span>
        <button onClick={deletestore}>Delete</button>
      </div>
      <div className={classes.container}>
        <div className={classes["school-detail"]}>
          <EditStoreForm school={store} />
        </div>
      </div>
    </main>
  );
};

export const fetchStore = async ({ params }) => {
  const storeID = params.storeID;
  let store;

  try {
    const res = await fetch(
      `https://mgbackend.onrender.com/api/v1/stores/${storeID}`
    );

    if (!res.ok) {
      return redirect("../");
    }
    if (res.ok) {
      const data = await res.json();
      store = data.data.item;
    }
  } catch (error) {}

  return defer({
    store,
  });
};

export default StoreDetail;
