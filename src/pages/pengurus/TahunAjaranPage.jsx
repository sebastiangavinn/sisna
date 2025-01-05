import React, { useState } from "react";
import { TAHUN_AJARAN } from "../../constants";

import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import Modal from "../../components/Modal";
import PrimaryButton from "../../components/PrimaryButton";

const TahunAjaranPage = () => {
  const columns = [
    { header: "No", accessor: "no" },
    { header: "id Tahun Ajaran", accessor: "idTahunAjaran" },
    { header: "Tahun Ajaran", accessor: "tahunAjaran" },
    { header: "Jenis Semester", accessor: "jenisSemester" },
    { header: "Periode Semester", accessor: "periodeSemester" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    idSemester: "",
    namaSemester: "",
    jenisSemester: "ganjil",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="py-5">
      <h1 className="font-extrabold text-2xl text-[#1F4918] text-center mb-5">
        Data Tahun Ajaran
      </h1>

      <div className="flex items-center gap-4 justify-end mb-6">
        <SearchInput />
        <button
          onClick={handleModalOpen}
          className="py-1 px-6 rounded-lg bg-[#5D9453] text-white font-semibold text-lg"
        >
          Tambah Data
        </button>
        <button className="py-1 px-6 rounded-lg bg-[#5D9453] text-white font-semibold text-lg">
          Download
        </button>
      </div>

      <Table columns={columns} data={TAHUN_AJARAN} showActionColumn />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Data Tahun Ajaran"
      >
        <form className="space-y-6">
          <div>
            <label
              htmlFor="idSemester"
              className="block text-sm font-medium text-gray-700"
            >
              ID Semester <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="idSemester"
              name="idSemester"
              value={formData.idSemester}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47992B] focus:ring focus:ring-[#47992B] focus:ring-opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="namaSemester"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Semester <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="namaSemester"
              name="namaSemester"
              value={formData.namaSemester}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47992B] focus:ring focus:ring-[#47992B] focus:ring-opacity-50"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700">
              Jenis Semester
            </span>
            <div className="mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenisSemester"
                  value="ganjil"
                  checked={formData.jenisSemester === "ganjil"}
                  onChange={handleChange}
                  className="form-radio text-[#47992B] focus:ring-[#47992B]"
                />
                <span className="ml-2">Ganjil</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="jenisSemester"
                  value="genap"
                  checked={formData.jenisSemester === "genap"}
                  onChange={handleChange}
                  className="form-radio text-[#47992B] focus:ring-[#47992B]"
                />
                <span className="ml-2">Genap</span>
              </label>
            </div>
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700">
              Periode Semester
            </span>
            <div className="mt-2 flex items-center space-x-4">
              <div className="flex-1">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47992B] focus:ring focus:ring-[#47992B] focus:ring-opacity-50"
                />
              </div>
              <span>-</span>
              <div className="flex-1">
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#47992B] focus:ring focus:ring-[#47992B] focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 w-1/2">
              <PrimaryButton
                variant="outline"
                text="Batal"
                onClick={handleModalClose}
              />
              <PrimaryButton text="Simpan" />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TahunAjaranPage;
