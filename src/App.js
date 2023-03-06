import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//utils
import { isAdmin, isAuthonticated } from "./pages/Admin/checkUser";
import ErrorPage from "./pages/ErrorPage";

// Admin Pages
import AdminRoot from "./pages/Admin/AdminRoot";
import Login from "./pages/Admin/Login";

// Cpanel pages
import CpanelRoot from "./pages/Admin/Dashboard/Cpanel/Root";

import CUsers, { getUsers } from "./pages/Admin/Dashboard/Cpanel/Users/Users";
import CSchools from "./pages/Admin/Dashboard/Cpanel/Schools";
import CStores from "./pages/Admin/Dashboard/Cpanel/Stores";
import CClients from "./pages/Admin/Dashboard/Cpanel/Clients";

// schools Pages
import SchoolsPage, {
  fetchSchools,
} from "./pages/Admin/Dashboard/Schools/SchoolsPage";
import SchoolDetail, {
  fetchSchool,
} from "./pages/Admin/Dashboard/Schools/SchoolDetail";
import NewSchool from "./pages/Admin/Dashboard/Schools/NewSchool";
import SchoolRoot from "./pages/Admin/Dashboard/Schools/Root";

// stores Pages
import AdminStores, {
  fetchStores,
} from "./pages/Admin/Dashboard/Stores/StoresPage";
import StoreRoot from "./pages/Admin/Dashboard/Stores/Root";
import StoreDetail, {
  fetchStore,
} from "./pages/Admin/Dashboard/Stores/StoreDetail";
import NewStore from "./pages/Admin/Dashboard/Stores/NewStore";

//Home Page
import HomePage from "./pages/HomePage";
import RegesterStudent, { fetchSchoolsNames } from "./pages/StudentRegister";

// Product Page
import Products from "./pages/Products";

// Stores Page
import Stores from "./pages/Stores";
import UserDetail, {
  getUser,
} from "./pages/Admin/Dashboard/Cpanel/Users/UserDetail";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "stores",
        loader: fetchStores,
        element: <Stores />,
      },
      {
        path: "register/new",
        element: <RegesterStudent />,
        loader: fetchSchoolsNames,
      },
      {
        path: "admin",
        // errorElement: <ErrorPage />,
        children: [
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "dashboard",
            element: <AdminRoot />,
            loader: isAuthonticated,
            id: "admin",
            children: [
              {
                path: "schools",
                element: <SchoolRoot />,
                loader: isAuthonticated,
                children: [
                  {
                    index: true,
                    element: <SchoolsPage />,
                    loader: fetchSchools,
                  },
                  {
                    path: ":schoolID",
                    element: <SchoolDetail />,
                    loader: fetchSchool,
                  },
                  {
                    path: "new",
                    element: <NewSchool />,
                  },
                ],
              },
              {
                path: "stores",
                element: <StoreRoot />,
                loader: isAuthonticated,
                children: [
                  {
                    index: true,
                    element: <AdminStores />,
                    loader: fetchStores,
                  },
                  {
                    path: ":storeID",
                    element: <StoreDetail />,
                    loader: fetchStore,
                  },
                  {
                    path: "new",
                    element: <NewStore />,
                  },
                ],
              },
              {
                path: "cpanel",
                element: <CpanelRoot />,
                loader: isAdmin,
                children: [
                  {
                    path: "users",

                    children: [
                      {
                        index: true,
                        element: <CUsers />,
                        loader: getUsers,
                      },
                      {
                        path: ":userID",
                        element: <UserDetail />,
                        loader: getUser,
                      },
                    ],
                  },
                  {
                    path: "schools",
                    element: <CSchools />,
                  },
                  {
                    path: "stores",
                    element: <CStores />,
                  },
                  {
                    path: "clients",
                    element: <CClients />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
