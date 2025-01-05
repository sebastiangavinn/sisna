import React, { useState } from "react";
import CardInfo from "../../components/CardInfo";
import SearchInput from "../../components/SearchInput";
import Modal from "../../components/Modal";
import FormField from "../../components/FormField";
import LabelDescription from "../../components/LabelDescription";
import PrimaryButton from "../../components/PrimaryButton";

const InformasiAkademik = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    judul: "",
    suratPemberitahuan: "",
    catatan: "",
  });

  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="py-5">
      <div className="rounded-xl bg-white w-full space-y-4">
        <h1 className="font-extrabold text-base text-center text-[#347928]">
          Informasi Akademik Pesantren Mahasiswi Al-Husna{" "}
        </h1>
        <div className="flex items-center gap-4 justify-end">
          <SearchInput />
          <button
            onClick={handleModalOpen}
            className="bg-[#347928] py-2 px-4 text-white font-sm rounded-lg font-bold"
          >
            Tambah Data
          </button>
        </div>
      </div>
      <div className="rounded-xl bg-white w-full my-8 min-h-screen">
        <div className="lg:p-12 p-4 flex flex-row flex-wrap items-center gap-8">
          <CardInfo />
          <CardInfo />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Materi"
      >
        <form className="space-y-4">
          <FormField
            label="Judul"
            required
            value={form.judul}
            onChange={handleInputChange("judul")}
          />
          <FormField
            label="Surat Pemberitahuan"
            type="file"
            accept="image/*"
            endAdorment={
              <div className="lg:w-1/4 w-full">
                <PrimaryButton text="Unggah" />
              </div>
            }
          />
          <LabelDescription
            label="Catatan"
            rows={5}
            value={form.catatan}
            onChange={handleInputChange("catatan")}
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

export default InformasiAkademik;
