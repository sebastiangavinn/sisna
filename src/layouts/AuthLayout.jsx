import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="flex xl:flex-row flex-col items-center h-screen w-full xl:bg-gradient-to-t from-[#388E3C99] to-[#006B0599]">
      <div className="relative w-1/2 h-full xl:block hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#388E3C99] to-[#006B0599] z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center z-20 text-white">
          <div className="w-1/2">
            <h1 className="text-8xl font-extrabold">SISNA</h1>
            <p className="text-3xl mt-2 font-bold">
              SISTEM INFORMASI AKADEMIK PESANTREN AL-HUSNA
            </p>
          </div>
        </div>
        <div className="relative z-0 flex flex-col h-full">
          <img
            src="/IMG_9898.png"
            alt="Gambar 1"
            className="w-full h-1/2 object-cover"
          />
          <img
            src="/IMG_9903.png"
            alt="Gambar 2"
            className="w-full h-1/2 object-cover"
          />
        </div>
      </div>

      <div className="xl:w-1/2 w-full flex items-center justify-center h-screen bg-white rounded-3xl">
        <div className="md:w-3/5 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
