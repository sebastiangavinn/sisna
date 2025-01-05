import React, { useState } from "react";
import { PENGAJAR } from "../../constants";

import Table from "../../components/Table";
import SearchInput from "../../components/SearchInput";
import Modal from "../../components/Modal";
import FormField from "../../components/FormField";
import PrimaryButton from "../../components/PrimaryButton";

const multipleData = Array.from({ length: 10 }).flatMap(() => PENGAJAR);

const PengajarPage = () => {
  const columns = [
    { header: "No", accessor: "no" },
    { header: "ID Pengajar", accessor: "id" },
    { header: "Nama Pengajar", accessor: "nama" },
    { header: "Tempat, Tanggal Lahir", accessor: "ttl" },
    { header: "Alamat Rumah (Sesuai dengan KTP)", accessor: "alamat" },
    { header: "Prodi/Fakultas", accessor: "prodi" },
    { header: "No. WA", accessor: "noWa" },
    { header: "Matapelajaran yang diajarkan", accessor: "mapel" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    id: "",
    nama: "",
    ttl: "",
    alamat: "",
    jurusan: "",
    noWA: "",
    mataPelajaran: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="py-5">
      <h1 className="font-extrabold text-2xl text-[#1F4918] text-center mb-5">
        Data Pengajar
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

      <Table columns={columns} data={multipleData} showActionColumn />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Data Pengajar"
      >
        <form className="space-y-4 w-3/4 mx-auto mt-14">
          <FormField
            label="NIS"
            required
            value={form.nis}
            onChange={handleInputChange("nis")}
          />
          <FormField
            label="Nama Lengkap"
            required
            value={form.nama}
            onChange={handleInputChange("nama")}
          />{" "}
          <FormField
            label="Tempat, tanggal lahir"
            required
            value={form.ttl}
            onChange={handleInputChange("ttl")}
          />{" "}
          <FormField
            label="Alamat rumah (sesuai dengan KTP)"
            required
            value={form.alamat}
            onChange={handleInputChange("alamat")}
          />{" "}
          <FormField
            label="Prodi/Fakultas"
            required
            value={form.jurusan}
            onChange={handleInputChange("jurusan")}
          />{" "}
          <FormField
            label="No. WA"
            required
            value={form.noWA}
            onChange={handleInputChange("noWA")}
          />{" "}
          <FormField
            label="Mata Pelajaran yang diajarkan"
            required
            value={form.mataPelajaran}
            onChange={handleInputChange("mataPelajaran")}
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

export default PengajarPage;
