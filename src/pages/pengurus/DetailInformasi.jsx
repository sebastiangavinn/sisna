import React from "react";
import { useNavigate } from "react-router";
import { LuClock8 } from "react-icons/lu";

const DetailInformasi = () => {
  const navigate = useNavigate();

  return (
    <div className="py-5">
      <h3
        onClick={() => navigate(-1)}
        className="text-[#347928] flex items-center gap-1 font-extrabold text-base mb-3 cursor-pointer"
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 font-extrabold"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Halaman Informasi Akademik pesantren mahasiswi al-husna
      </h3>
      <div className="rounded-xl bg-white w-full my-8 min-h-screen">
        <div className="lg:px-12 px-6">
          <h1 className="font-bold text-lg text-center mb-2">
            Informasi dimulainya Kegiatan Diniyah
          </h1>
          <div className="flex items-center justify-center gap-1 font-bold text-[#6D6D6D] text-xs mb-5">
            <LuClock8 />
            <p>3 Agustus 2024</p>
          </div>
          <img src="/image 1.png" alt="informasi" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default DetailInformasi;
