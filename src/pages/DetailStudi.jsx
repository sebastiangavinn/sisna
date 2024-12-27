import React from "react";
import { useNavigate } from "react-router";
import LabelDropdown from "../components/LabelDropdown";
import GradeTable from "../components/GradeTable";
import ChartBelajar from "../components/ChartBelajar";

const DetailStudi = () => {
  const navigate = useNavigate();
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleDropdownChange = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div className="mt-12 lg:px-12 px-6">
      <img
        src="/Rectangle 34.png"
        alt="hiasan"
        className="absolute top-0 right-0 hidden lg:block"
      />

      <h1 className="font-extrabold text-xl text-center text-[#1F4918] mb-12">
        Hasil Studi Santri Pondok Pesantren Al-Husna
      </h1>
      <div className="flex items-center flex-wrap gap-8 my-8">
        <LabelDropdown
          label="Tahun Ajaran :"
          options={options}
          onChange={handleDropdownChange}
          id="tahunAjaran"
          name="tahunAjaran"
        />
        <LabelDropdown
          label="Kelas :"
          options={options}
          onChange={handleDropdownChange}
          id="kelas"
          name="kelas"
        />
        <LabelDropdown
          label="Mata Pelajaran :"
          options={options}
          onChange={handleDropdownChange}
          id="mataPelajaran"
          name="mataPelajaran"
        />
        <button className="bg-[#347928] text-white font-semibold px-4 py-2 rounded-lg w-full md:w-fit">
          Download
        </button>
      </div>

      <div className="bg-[#F5F4F4] rounded-xl mt-12 py-3">
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
          Hasil Studi Kelas Alya
        </h3>
        <h1 className="text-center text-lg text-[#1F4918] font-extrabold">
          Nailatus Sa'adah
        </h1>
        <div className="xl:w-3/4 w-full mx-auto my-8">
          <GradeTable />
        </div>
        <div className="lg:w-1/2 w-full mx-auto">
          <ChartBelajar />
        </div>
      </div>
    </div>
  );
};

export default DetailStudi;
