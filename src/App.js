import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//utils
import { isAuthonticated } from "./pages/Admin/checkUser";
import ErrorPage from "./pages/ErrorPage";

// Admin Pages
import AdminRoot from "./pages/Admin/AdminRoot";
import Login from "./pages/Admin/Login";

// schools Pages
import SchoolsPage, {
  fetchSchools,
} from "./pages/Admin/Dashboard/Schools/SchoolsPage";
import SchoolDetail from "./pages/Admin/Dashboard/Schools/SchoolDetail";
import NewSchool from "./pages/Admin/Dashboard/Schools/NewSchool";
import SchoolRoot from "./pages/Admin/Dashboard/Schools/Root";

// stores Pages
import Stores, { fetchStores } from "./pages/Admin/Dashboard/Stores/StoresPage";
import StoreRoot from "./pages/Admin/Dashboard/Stores/Root";
import StoreDetail, {
  fetchStore,
} from "./pages/Admin/Dashboard/Stores/StoreDetail";
import NewStore from "./pages/Admin/Dashboard/Stores/NewStore";

//Home Page
import HomePage from "./pages/HomePage";
import RegesterStudent, { fetchSchool } from "./pages/StudentRegister";

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
        path: "register/:schoolID",
        element: <RegesterStudent />,
        loader: fetchSchool,
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
                    element: <Stores />,
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
