import React from "react";
import SearchInput from "./SearchInput";

const Header = () => {
  return (
    <div className="bg-white rounded-bl-lg rounded-br-lg shadow-md">
      <div className="p-8 flex items-center justify-between">
        <div className="text-[#07570A]">
          <h1 className="font-semibold">Selamat Datang di SISNA</h1>
          <p>Sistem Informasi Akademik Pesantreen Al-Husna</p>
        </div>
        <div className="flex items-center gap-3">
          <SearchInput />
          <img src="/download (2) 1.png" alt="Foto" />
        </div>
      </div>
    </div>
  );
};

export default Header;
