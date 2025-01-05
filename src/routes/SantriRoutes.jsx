import React from "react";
import { Routes, Route, Navigate } from "react-router";

import MainLayout from "../layouts/MainLayout";
import SecondLayout from "../layouts/SecondLayout";
import BerandaPage from "../pages/BerandaPage";
import PengelolaanPage from "../pages/PengelolaanPage";
import SantriPage from "../pages/pengelolaan/SantriPage";
import PengajarPage from "../pages/pengelolaan/PengajarPage";
import KelasPage from "../pages/pengelolaan/KelasPage";
import MapelPage from "../pages/pengelolaan/MapelPage";
import HasilStudiPage from "../pages/HasilStudiPage";
import DetailStudi from "../pages/DetailStudi";
import ModulPembelajaranPage from "../pages/ModulPembelajaranPage";
import DetailModul from "../pages/DetailModul";
import InformasiPage from "../pages/InformasiPage";
import InformasiDetailPage from "../pages/InformasiDetailPage";
import ProfilePage from "../pages/ProfilePage";

const SantriRoutes = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="beranda" element={<BerandaPage />} />
        <Route path="pengelolaan-pesantren">
          <Route index element={<PengelolaanPage />} />
          <Route path="santri" element={<SantriPage />} />
          <Route path="pengajar" element={<PengajarPage />} />
          <Route path="kelas" element={<KelasPage />} />
          <Route path="mata-pelajaran" element={<MapelPage />} />
        </Route>
        {user.role === "santri" && (
          <Route path="hasil-studi" element={<Navigate to="detail/1" />} />
        )}
        <Route path="hasil-studi" element={<HasilStudiPage />} />
        <Route path="hasil-studi/detail/:id" element={<DetailStudi />} />
        <Route path="modul-pembelajaran" element={<ModulPembelajaranPage />} />
        <Route path="modul-pembelajaran/detail/:id" element={<DetailModul />} />
      </Route>
      <Route element={<SecondLayout />}>
        <Route path="informasi-akademik" element={<InformasiPage />} />
        <Route
          path="informasi-akademik/detail"
          element={<InformasiDetailPage />}
        />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default SantriRoutes;
