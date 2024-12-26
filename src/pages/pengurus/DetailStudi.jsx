import React, { useState } from "react";
import { useNavigate } from "react-router";

import LabelDropdown from "../../components/LabelDropdown";
import GradeTable from "../../components/GradeTable";
import ChartBelajar from "../../components/ChartBelajar";
import Modal from "../../components/Modal";
import PrimaryButton from "../../components/PrimaryButton";
import FormField from "../../components/FormField";

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

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    tahun: "",
    semester: "",
    idMapel: "",
    namaMapel: "",
    nilaiKKM: "",
    nilaiAngka: "",
    nilaiHuruf: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <>
      <h1 className="font-extrabold text-xl text-center text-[#1F4918] mb-12">
        Hasil Studi Santri Pondok Pesantren Al-Husna
      </h1>
      <div className="flex items-center gap-8 my-8">
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
        <button
          onClick={handleModalOpen}
          className="bg-[#347928] text-white font-semibold px-4 py-2 rounded-lg"
        >
          Tambah Data
        </button>
      </div>

      <div className="bg-[#F5F4F4] rounded-xl mt-12 px-4 py-3">
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
        <div className="w-1/2 mx-auto">
          <ChartBelajar />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Data Hasil Studi"
      >
        <form className="space-y-4 w-3/4 mx-auto mt-14">
          <FormField
            label="Tahun Ajaran"
            required
            value={form.tahun}
            onChange={handleInputChange("tahun")}
          />
          <FormField
            label="Semester"
            required
            value={form.semester}
            onChange={handleInputChange("semester")}
          />{" "}
          <FormField
            label="ID Mata Pelajaran"
            required
            value={form.idMapel}
            onChange={handleInputChange("idMapel")}
          />{" "}
          <FormField
            label="Nama Mata Pelajaran"
            required
            value={form.namaMapel}
            onChange={handleInputChange("namaMapel")}
          />{" "}
          <FormField
            label="Nilai KKM"
            required
            value={form.nilaiKKM}
            onChange={handleInputChange("nilaiKKM")}
          />{" "}
          <FormField
            label="Nilai Angka"
            required
            value={form.nilaiAngka}
            onChange={handleInputChange("nilaiAngka")}
          />{" "}
          <FormField
            label="Nilai Huruf"
            required
            value={form.nilaiHuruf}
            onChange={handleInputChange("nilaiHuruf")}
          />{" "}
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
    </>
  );
};

export default DetailStudi;
