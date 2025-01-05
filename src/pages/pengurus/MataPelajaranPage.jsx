import React, { useState } from "react";
import { MAPEL } from "../../constants";

import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import Modal from "../../components/Modal";
import PrimaryButton from "../../components/PrimaryButton";
import FormField from "../../components/FormField";

const MataPelajaranPage = () => {
  const columns = [
    { header: "No", accessor: "no" },
    { header: "Kode Mata Pelajaran", accessor: "kodeMataPelajaran" },
    { header: "Nama Mata Pelajaran", accessor: "namaMataPelajaran" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    kode: "",
    nama: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="py-5">
      <h1 className="font-extrabold text-2xl text-[#1F4918] text-center mb-5">
        Data Mata Pelajaran
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

      <Table columns={columns} data={MAPEL} showActionColumn />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Data Pengajar"
      >
        <form className="space-y-4 w-3/4 mx-auto mt-14">
          <FormField
            label="Kode Ruang"
            required
            value={form.kode}
            onChange={handleInputChange("nis")}
          />
          <FormField
            label="Nama Kelas"
            required
            value={form.nama}
            onChange={handleInputChange("nama")}
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
    </div>
  );
};

export default MataPelajaranPage;
