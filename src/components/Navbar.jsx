import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="py-4 px-10 bg-white sticky text-[#347928] shadow-lg rounded-bl-xl rounded-br-xl">
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="/LOGO PONDOK AL-HUSNA 1.png"
            alt="Logo Pondok"
            className="w-12"
          />
          <div className="font-bold leading-none max-w-fit xl:block hidden">
            <h1 className="text-2xl -mb-1">SISNA</h1>
            <p className="text-sm w-3/4 leading-none">
              Sistem Informasi Akademik Pesantren Al-Husna
            </p>
          </div>
        </div>

        <ul className="flex flex-row items-center xl:gap-10 lg:gap-5 font-bold text-sm">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#CAA422] underline underline-offset-2" : ""
            }
            to="/beranda"
          >
            Beranda
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#CAA422] underline underline-offset-2" : ""
            }
            to="/pengelolaan-pesantren"
          >
            Data Pengelolaan Pesantren
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#CAA422] underline underline-offset-2" : ""
            }
            to="/hasil-studi"
          >
            Hasil Studi
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#CAA422] underline underline-offset-2" : ""
            }
            to="/modul-pembelajaran"
          >
            Modul Pembelajaran
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#CAA422] underline underline-offset-2" : ""
            }
            to="/informasi-akademik"
          >
            Informasi Akademik Pesantren
          </NavLink>
        </ul>

        <Link to="/profile">
          <img src="/download (2) 1.png" alt="profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
