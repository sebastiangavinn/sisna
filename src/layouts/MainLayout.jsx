import React from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto bg-white">
        <Navbar />
        <main className="min-h-screen relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
