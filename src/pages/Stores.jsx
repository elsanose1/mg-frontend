import React from "react";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import MainNavigation from "../Components/MainNavigation/MainNavigation";
import StoreList from "../Components/Stores/StoreList";
import Loader from "../Components/UI/Loader";
const Stores = () => {
  const { stores } = useLoaderData();

  return (
    <>
      <MainNavigation />
      <Suspense fallback={<Loader />}>
        <Await resolve={stores}>
          {(loadedStores) => <StoreList stores={loadedStores} />}
        </Await>
      </Suspense>
      <Footer />
    </>
  );
};

export default Stores;
