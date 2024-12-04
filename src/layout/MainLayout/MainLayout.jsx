import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../componets/Footer/Footer";
import { ToastContainer } from "react-toastify";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../../componets/Header/Navbar";

const MainLayout = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex flex-col min-h-screen max-w-[1440px] mx-auto overflow-hidden">
      <ToastContainer />
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
