import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import DetailRow from "../components/DetailRow";
import Modal from "../components/Modal";
import FormField from "../components/FormField";

import { PROFILE } from "../constants";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    nama: "",
    ttl: "",
    alamat: "",
    prodi: "",
    noWA: "",
    namaWali: "",
    noWAWali: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="bg-white w-full rounded-lg">
      <div className="lg:px-6 px-0 py-8">
        <h1 className="font-extrabold text-xl text-center text-[#347928] mb-9">
          Detail Profile
        </h1>
        <div className="grid md:grid-cols-[250px_1fr] gap-12 w-3/4 mx-auto">
          <div className="border-2 border-[#5D9453] rounded-xl p-5">
            <img src="/download (2) 3.png" alt="foto cewe" className="mb-4" />
            <PrimaryButton text="Unggah Foto" className="text-xs" />
          </div>
          <div className="space-y-1">
            <DetailRow label="Nama" value={PROFILE.name} />
            <DetailRow label="Tempat, tanggal lahir" value={PROFILE.ttl} />
            <DetailRow label="Alamat" value={PROFILE.alamat} />
            <DetailRow label="Prodi/Fakultas" value={PROFILE.jurusan} />
            <DetailRow label="No. Wa" value={PROFILE.nomerWA} />
            <DetailRow label="Nama Wali" value={PROFILE.namaWali} />
            <DetailRow label="No. Hp Wali" value={PROFILE.nomerWali} />
            <PrimaryButton text="Edit Profil" onClick={handleModalOpen} />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Edit Profile"
      >
        <form className="space-y-4">
          <FormField
            label="Unggah Foto"
            type="file"
            accept="image/*"
            endAdorment={
              <div className="md:w-1/4 w-full">
                <PrimaryButton text="Unggah" />
              </div>
            }
          />
          <FormField
            label="Nama"
            required
            value={form.nama}
            onChange={handleInputChange("nama")}
          />
          <FormField
            label="Tempat, tanggal lahir"
            value={form.ttl}
            onChange={handleInputChange("ttl")}
          />
          <FormField
            label="Alamat"
            value={form.alamat}
            onChange={handleInputChange("alamat")}
          />
          <FormField
            label="Prodi/Fakultas"
            value={form.prodi}
            onChange={handleInputChange("prodi")}
          />
          <FormField
            label="No. WA"
            type="tel"
            value={form.noWA}
            onChange={handleInputChange("noWA")}
          />
          <FormField
            label="Nama Wali"
            value={form.namaWali}
            onChange={handleInputChange("namaWali")}
          />
          <FormField
            label="No. HP Wali"
            type="tel"
            value={form.noWAWali}
            onChange={handleInputChange("noWAWali")}
          />
          <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 md:w-1/2 w-full">
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

export default ProfilePage;
