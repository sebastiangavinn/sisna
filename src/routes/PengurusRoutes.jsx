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
      </Route>
    </Routes>
  );
};

export default PengurusRoutes;
