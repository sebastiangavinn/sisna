import React from "react";
import Table from "../../components/Table";

import { AKUN_SANTRI } from "../../constants";

const multipleData = Array.from({ length: 7 }).flatMap(() => AKUN_SANTRI);

const DataSantriPage = () => {
  const columns = [
    { header: "No", accessor: "no" },
    { header: "Nama Lengkap", accessor: "name" },
    { header: "E-mail", accessor: "email" },
    { header: "No. Hp", accessor: "phoneNumber" },
    { header: "Password", accessor: "password" },
  ];
  return (
    <div className="py-5">
      <h1 className="text-lg font-extrabold text-center text-[#1F4918] mb-2">
        Data Akun Santri
      </h1>
      <Table columns={columns} data={multipleData} showActionColumn />
    </div>
  );
};

export default DataSantriPage;
