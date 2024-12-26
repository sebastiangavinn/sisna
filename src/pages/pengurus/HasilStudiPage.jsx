import React from "react";
import { SANTRI } from "../../constants";

import Table from "../../components/Table";
import LabelDropdown from "../../components/LabelDropdown";

const HasilStudiPage = () => {
  const multipleData = Array.from({ length: 7 }).flatMap(() => SANTRI);

  const handleDropdownChange = (value) => {
    console.log("Selected:", value);
  };

  const columns = [
    { header: "No", accessor: "no" },
    { header: "ID Santri", accessor: "nis" },
    { header: "Nama Santri", accessor: "nama" },
  ];

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="relative">
      <h1 className="text-center font-extrabold text-xl mb-12 text-[#1F4918]">
        Hasil Studi Santri Pondok Pesantren Al-Husna
      </h1>

      <div className="flex items-center gap-8 my-8">
        <LabelDropdown
          label="Nama Santri :"
          options={options}
          onChange={handleDropdownChange}
          id="namaSantri"
          name="namaSantri"
        />
        <LabelDropdown
          label="Kelas :"
          options={options}
          onChange={handleDropdownChange}
          id="kelas"
          name="kelas"
        />
      </div>

      <div className="bg-[#F5F4F4] rounded-xl mt-12 px-4 py-3">
        <h1 className="text-[#1F4918] text-lg font-extrabold text-center mb-5">
          Hasil Studi Kelas Ulya
        </h1>
        <div className="xl:w-1/2 w-full mx-auto">
          <Table columns={columns} data={multipleData} showDetailColumn />
        </div>
      </div>
    </div>
  );
};

export default HasilStudiPage;
