import React from "react";
import { Outlet } from "react-router";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const PengurusLayout = () => {
  return (
    <div className="bg-white flex items-start">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="px-12 py-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PengurusLayout;
