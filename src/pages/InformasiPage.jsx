import React from "react";
import CardInfo from "../components/CardInfo";

const InformasiPage = () => {
  return (
    <div className="my-12">
      <div className="rounded-xl bg-white w-full">
        <h1 className="font-extrabold text-base py-6 text-center text-[#347928]">
          Informasi Akademik Pesantren Mahasiswi Al-Husna{" "}
        </h1>
      </div>
      <div className="rounded-xl bg-white w-full my-8 min-h-screen">
        <div className="p-12 flex flex-row items-center gap-8">
          <CardInfo />
          <CardInfo />
        </div>
      </div>
    </div>
  );
};

export default InformasiPage;