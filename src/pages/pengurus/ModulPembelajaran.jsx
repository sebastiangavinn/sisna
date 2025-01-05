import React, { useState } from "react";
import { Link } from "react-router";
import { FiTrash2, FiEdit } from "react-icons/fi";
import LabelDropdown from "../../components/LabelDropdown";
import Modal from "../../components/Modal";
import FormField from "../../components/FormField";
import LabelDescription from "../../components/LabelDescription";
import PrimaryButton from "../../components/PrimaryButton";

const ModulPembelajaran = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    tahun: "",
    mataPelajaran: "",
    judul: "",
    uploadVideo: "",
    uploadMateri: "",
    catatan: "",
    pertanyaan: "",
    soalGambar: "",
    pilihanA: "",
    pilihanB: "",
    pilihanC: "",
    pilihanD: "",
    kunciJawaban: "",
  });
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
  const handleInputChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleDropdownChange = (value) => {
    console.log("Selected:", value);
  };
  return (
    <div className="py-5">
      <div className="flex xl:items-center xl:flex-row flex-col justify-between">
        <div className="flex lg:items-center lg:flex-row flex-col gap-3">
          <LabelDropdown
            label="Tahun Ajaran :"
            options={options}
            onChange={handleDropdownChange}
            id="tahunAjaran"
            name="tahunAjaran"
          />{" "}
          <LabelDropdown
            label="Kelas :"
            options={options}
            onChange={handleDropdownChange}
            id="kelas"
            name="kelas"
          />{" "}
          <LabelDropdown
            label="Mata Pelajaran :"
            options={options}
            onChange={handleDropdownChange}
            id="mataPelajaran"
            name="mataPelajaran"
          />
        </div>
        <button
          onClick={handleModalOpen}
          className="bg-[#347928] text-white py-2 px-4 rounded-lg text-sm font-bold xl:mt-0 mt-9"
        >
          <span className="bg-white py-[0.5] px-2 font-extrabold rounded-md text-[#347928] text-lg">
            +
          </span>{" "}
          Tambah Materi
        </button>
      </div>

      {/* Title Section */}
      <div className="bg-gradient-to-r from-[#FAF0D0] to-[#F4F1E6] py-8 mb-16 mt-11 rounded-lg">
        <h1 className="text-center text-lg font-extrabold text-[#1F4918]">
          "Kitab Ilmu Nahwu & Sorf"
        </h1>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {materials.map((material) => (
          <Link to={`/pengurus/modul-pembelajaran/detail/${material.id}`}>
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

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="Tambah Materi"
      >
        <form className="space-y-4">
          <FormField
            label="Tahun Ajaran"
            required
            value={form.tahun}
            onChange={handleInputChange("tahun")}
          />
          <FormField
            label="Mata Pelajaran"
            required
            value={form.mataPelajaran}
            onChange={handleInputChange("mataPelajaran")}
          />
          <LabelDescription
            label="Judul Materi"
            rows={2}
            required
            value={form.tahun}
            onChange={handleInputChange("tahun")}
          />
          <FormField
            label="Upload Video Pembelajaran"
            type="file"
            accept="image/*"
            endAdorment={
              <div className="lg:w-1/4 w-full">
                <PrimaryButton text="Unggah" />
              </div>
            }
          />
          <FormField
            label="Upload Materi Pembelajaran"
            type="file"
            accept="image/*"
            endAdorment={
              <div className="lg:w-1/4 w-full">
                <PrimaryButton text="Unggah" />
              </div>
            }
          />
          <LabelDescription
            label="Catatan Materi"
            rows={5}
            value={form.catatan}
            onChange={handleInputChange("catatan")}
          />
          <p className="font-bold text-[#6D6D6D]">Latihan Soal</p>
          <LabelDescription
            label="Pertanyaan"
            rows={2}
            value={form.pertanyaan}
            onChange={handleInputChange("pertanyaan")}
          />
          <FormField
            label="Soal Gambar"
            type="file"
            accept="image/*"
            endAdorment={
              <div className="lg:w-1/4 w-full">
                <PrimaryButton text="Unggah" />
              </div>
            }
          />
          <FormField
            label="Pilihan A"
            value={form.pilihanA}
            onChange={handleInputChange("pilihanA")}
          />{" "}
          <FormField
            label="Pilihan B"
            value={form.pilihanB}
            onChange={handleInputChange("pilihanB")}
          />{" "}
          <FormField
            label="Pilihan C"
            value={form.pilihanC}
            onChange={handleInputChange("pilihanC")}
          />{" "}
          <FormField
            label="Pilihan D"
            value={form.pilihanD}
            onChange={handleInputChange("pilihanD")}
          />{" "}
          <FormField
            label="Kunci Jawaban"
            value={form.kunciJawaban}
            onChange={handleInputChange("kunciJawaban")}
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

export default ModulPembelajaran;
