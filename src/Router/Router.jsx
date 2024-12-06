import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/Login/Login";




const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch("/data.json"),
      },
      {
        path: "/allCampaigns",
        element: <allCampaign/>,
        loader: ()=> fetch('http://localhost:5000/campaigns')
      },
      {
        path: '/addNewCampaign',
        element:<PrivateRoute><addNewCampaign></addNewCampaign></PrivateRoute>
    },
      {
        path: '/myCampaigns',
        element:<PrivateRoute><myCampaign></myCampaign></PrivateRoute>
    },
      {
        path: "/myDonations",
        element: <PrivateRoute><myDonation></myDonation></PrivateRoute>,
      },
      
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default myCreateRoute;
