import React from "react";
import { Outlet } from "react-router";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SecondLayout = () => {
  return (
    <div className="bg-[#E8E8E8]">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <main className="min-h-screen relative lg:px-12 px-6 my-12">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SecondLayout;
