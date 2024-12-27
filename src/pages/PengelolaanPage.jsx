import React from "react";
import { Outlet, Link } from "react-router";

const PengelolaanPage = () => {
  return (
    <div className="px-12 py-5">
      <div className="mx-auto flex flex-row flex-wrap items-center gap-4 justify-center">
        <Link
          to="santri"
          className="py-2 px-4 bg-[#1F4918] text-white rounded-lg"
        >
          Santri
        </Link>
        <Link
          to="pengajar"
          className="py-2 px-4 bg-[#1F4918] text-white rounded-lg"
        >
          Pengajar
        </Link>
        <Link
          to="kelas"
          className="py-2 px-4 bg-[#1F4918] text-white rounded-lg"
        >
          Kelas
        </Link>
        <Link
          to="mata-pelajaran"
          className="py-2 px-4 bg-[#1F4918] text-white rounded-lg"
        >
          Mata Pelajaran
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default PengelolaanPage;
