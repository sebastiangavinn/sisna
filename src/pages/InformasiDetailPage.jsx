import React from "react";
import { useNavigate } from "react-router";

const InformasiDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="my-12">
      <div className="rounded-xl bg-[#5D9453] w-full">
        <h1 className="font-extrabold text-base py-6 text-center text-white">
          Informasi Akademik Pesantren Mahasiswi Al-Husna{" "}
        </h1>
      </div>
      <div className="rounded-xl bg-white w-full my-8 min-h-screen">
        <div className="lg:px-12 px-6 py-8">
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
          <div className="mt-8">
            <h1 className="font-bold text-lg text-[#347928] mb-5 text-center">
              Informasi dimulainya Kegiatan Diniyah
            </h1>
            <img src="/image 1.png" alt="informasi" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformasiDetailPage;
