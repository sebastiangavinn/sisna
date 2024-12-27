import React from "react";
import { useNavigate } from "react-router";
import { SANTRI } from "../../constants";

import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";

const multipleData = Array.from({ length: 10 }).flatMap(() => SANTRI);

const SantriPage = () => {
  const navigate = useNavigate();

  const columns = [
    { header: "No", accessor: "no" },
    { header: "NIS", accessor: "nis" },
    { header: "Nama Lengkap", accessor: "nama" },
    { header: "Tempat, Tanggal Lahir", accessor: "ttl" },
    { header: "Alamat Rumah (Sesuai dengan KTP)", accessor: "alamat" },
    { header: "Prodi/Fakultas", accessor: "prodi" },
    { header: "No. WA", accessor: "noWa" },
    { header: "Nama Wali", accessor: "namaWali" },
    { header: "No. Hp Wali", accessor: "noHpWali" },
  ];

  return (
    <div className="lg:px-20 px-6 py-5">
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
        Data Pengelolaan Pesantren
      </h3>

      <h1 className="font-extrabold text-2xl text-[#1F4918] text-center mb-5">
        Data Santri
      </h1>

      <div className="flex flex-row items-center gap-4 justify-end mb-6">
        <SearchInput />
        <button className="py-1 px-6 rounded-lg bg-[#5D9453] text-white font-semibold md:text-lg">
          Download
        </button>
      </div>

      <Table columns={columns} data={multipleData} />
    </div>
  );
};

export default SantriPage;
