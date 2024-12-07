import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import MainLayout from "../layout/MainLayout/MainLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/Login/Login";
import AllCampaign from "../Pages/All Campaign/AllCampaign";
import MyCampaign from "../Pages/My  Campaign/myCampaign";
import AddNewCampaign from "../Pages/Add New Campaign/addNewCampaign";
import MyDonations from "../Pages/My Donations/myDonations";
import CampaignDetails from "../Pages/Campaigns Details/CampaignDetails";




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
        path: "/campaigns",
        element: <AllCampaign/>,
        loader: ()=> fetch('http://localhost:5000/campaigns')
      },
        {
          path: "/campaignDetails/:id",
          element: <PrivateRoute><CampaignDetails /></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/campaigns/${params.id}`)
        }
      ,
      {
        path: '/addNewCampaign',
        element:<PrivateRoute><AddNewCampaign></AddNewCampaign></PrivateRoute>
    },
      {
        path: '/myCampaigns',
        element:<PrivateRoute><MyCampaign></MyCampaign></PrivateRoute>
    },
      {
        path: "/myDonations",
        element: <PrivateRoute><MyDonations></MyDonations></PrivateRoute>,
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
