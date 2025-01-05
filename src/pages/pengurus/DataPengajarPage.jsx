import React, { useState } from "react";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";

import { AKUN_PENGAJAR } from "../../constants";

const multipleData = Array.from({ length: 7 }).flatMap(() => AKUN_PENGAJAR);

const DataPengajarPage = () => {
  const columns = [
    { header: "No", accessor: "no" },
    { header: "Nama Lengkap", accessor: "name" },
    { header: "E-mail", accessor: "email" },
    { header: "No. Hp", accessor: "phoneNumber" },
    { header: "Password", accessor: "password" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="py-5">
      <h1 className="text-lg font-extrabold text-center text-[#1F4918] mb-2">
        Data Akun Pengajar
      </h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleModalOpen}
          className="flex justify-end bg-[#347928] text-white px-4 text-sm font-bold py-2 rounded-md"
        >
          Tambah Data
        </button>
      </div>
      <Table columns={columns} data={multipleData} showActionColumn />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Materi"
      >
        <form className="space-y-4">
          <FormField
            label="Nama Lengkap"
            required
            value={form.name}
            onChange={handleInputChange("name")}
          />
          <FormField
            label="E-mail"
            required
            value={form.email}
            onChange={handleInputChange("email")}
          />
          <FormField
            label="No. Hp"
            required
            value={form.phoneNumber}
            onChange={handleInputChange("phoneNumber")}
          />
          <FormField
            label="Password"
            required
            value={form.password}
            onChange={handleInputChange("password")}
          />
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 lg:w-1/2 w-full">
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

export default DataPengajarPage;
