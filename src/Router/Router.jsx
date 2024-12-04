import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/Login/Login";
import DonationCampaign from "../Pages/DonationCampaign/DonationCampaign";
import DonationItemsDetails from "../Pages/DonationCampaign/DonationItemsDetails";
import HowToHelp from "../Pages/HowToHelp/HowToHelp";
import Dashboard from "../Pages/Dashboard/Dashboard";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import ForgetPassword from "../Pages/ForgetPassword/ForgetPassword";



const myCreateRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/donationCampaign",
        element: <DonationCampaign></DonationCampaign>,
        loader: () => fetch("/campaign.json"),
      }
      ,
      {
        path: '/campaignDetails/:id',
        element:<PrivateRoute><DonationItemsDetails></DonationItemsDetails></PrivateRoute>,
        loader: () => fetch('/campaign.json')
    },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
      {
        path: "/howToHelp",
        element: (
            <HowToHelp></HowToHelp>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRoute>
           <UpdateProfile></UpdateProfile>
          </PrivateRoute>
            
        ),
      },
      {
        path: "/forgot-password",
        element: (
         
           <ForgetPassword></ForgetPassword>
            
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
           <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default myCreateRoute;
