import React from "react";
import { Routes, Route } from "react-router";
import PengurusLayout from "../layouts/PengurusLayout";
import BerandaPage from "../pages/pengurus/BerandaPage";
import SantriPage from "../pages/pengurus/SantriPage";
import PengajarPage from "../pages/pengurus/PengajarPage";
import KelasPage from "../pages/pengurus/KelasPage";
import MataPelajaranPage from "../pages/pengurus/MataPelajaranPage";
import TahunAjaranPage from "../pages/pengurus/TahunAjaranPage";
import HasilStudiPage from "../pages/pengurus/HasilStudiPage";
import DetailStudi from "../pages/pengurus/DetailStudi";
import ModulPembelajaran from "../pages/pengurus/ModulPembelajaran";
import DetailModul from "../pages/pengurus/DetailModul";
import InformasiAkademik from "../pages/pengurus/InformasiAkademik";
import DetailInformasi from "../pages/pengurus/DetailInformasi";
import DataSantriPage from "../pages/pengurus/DataSantriPage";
import DataPengajarPage from "../pages/pengurus/DataPengajarPage";

const PengurusRoutes = () => {
  return (
    <Routes>
      <Route element={<PengurusLayout />}>
        <Route path="/pengurus/beranda" element={<BerandaPage />} />
        <Route path="/pengurus/santri" element={<SantriPage />} />
        <Route path="/pengurus/pengajar" element={<PengajarPage />} />
        <Route path="/pengurus/kelas" element={<KelasPage />} />
        <Route
          path="/pengurus/mata-pelajaran"
          element={<MataPelajaranPage />}
        />
        <Route path="/pengurus/tahun-ajaran" element={<TahunAjaranPage />} />
        <Route path="/pengurus/hasil-studi" element={<HasilStudiPage />} />
        <Route
          path="/pengurus/hasil-studi/detail/:id"
          element={<DetailStudi />}
        />
        <Route
          path="/pengurus/modul-pembelajaran"
          element={<ModulPembelajaran />}
        />
        <Route
          path="/pengurus/modul-pembelajaran/detail/:id"
          element={<DetailModul />}
        />
        <Route
          path="/pengurus/informasi-akademik"
          element={<InformasiAkademik />}
        />
        <Route
          path="/pengurus/informasi-akademik/detail"
          element={<DetailInformasi />}
        />
        <Route path="/pengurus/akun-santri" element={<DataSantriPage />} />
        <Route path="/pengurus/akun-pengajar" element={<DataPengajarPage />} />
      </Route>
    </Routes>
  );
};

export default PengurusRoutes;
