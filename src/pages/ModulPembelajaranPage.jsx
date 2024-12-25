import React from "react";
import { Link } from "react-router";
import { FiTrash2, FiEdit } from "react-icons/fi";
import LabelDropdown from "../components/LabelDropdown";

const ModulPembelajaranPage = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const materials = [
    {
      id: 1,
      title: "Pengenalan Kalimah dalam bahasa arab",
      date: "13/10/2024",
      image: "/empuan (3) 1.png",
    },
    {
      id: 2,
      title: "Pengenalan Kalimah dalam bahasa arab",
      date: "13/10/2024",
      image: "/empuan (3) 1.png",
    },
    {
      id: 3,
      title: "Pengenalan Kalimah dalam bahasa arab",
      date: "13/10/2024",
      image: "/empuan (3) 1.png",
    },
    {
      id: 4,
      title: "Pengenalan Kalimah dalam bahasa arab",
      date: "13/10/2024",
      image: "/empuan (3) 1.png",
    },
  ];

  const handleDropdownChange = (value) => {
    console.log("Selected:", value);
  };

  return (
    <div className="mt-12 px-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LabelDropdown
            label="Tahun Ajaran :"
            options={options}
            onChange={handleDropdownChange}
            id="tahunAjaran"
            name="tahunAjaran"
          />{" "}
          <LabelDropdown
            label="Tahun Ajaran :"
            options={options}
            onChange={handleDropdownChange}
            id="tahunAjaran"
            name="tahunAjaran"
          />{" "}
          <LabelDropdown
            label="Tahun Ajaran :"
            options={options}
            onChange={handleDropdownChange}
            id="tahunAjaran"
            name="tahunAjaran"
          />
        </div>
        <Link className="bg-[#347928] text-white py-2 px-4 rounded-lg text-sm font-bold">
          <span className="bg-white py-[0.5] px-2 font-extrabold rounded-md text-[#347928] text-lg">
            +
          </span>{" "}
          Tambah Materi
        </Link>
      </div>

      {/* Title Section */}
      <div className="bg-gradient-to-r from-[#FAF0D0] to-[#F4F1E6] py-8 mb-16 mt-11 rounded-lg">
        <h1 className="text-center text-lg font-extrabold text-[#1F4918]">
          "Kitab Ilmu Nahwu & Sorf"
        </h1>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {materials.map((material) => (
          <Link to={`/modul-pembelajaran/detail/${material.id}`}>
            <div
              key={material.id}
              className="border-2 border-[#CAA422] rounded-lg p-4 bg-white"
            >
              <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={material.image}
                  alt="image"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <h3 className="font-bold mb-2 text-center">{material.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{material.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                    <FiEdit className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ModulPembelajaranPage;
