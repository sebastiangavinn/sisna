import React from "react";
import { NavLink } from "react-router";

import { IoHomeOutline } from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";
import { MdOutlineShowChart } from "react-icons/md";
import { TbLibrary, TbSpeakerphone } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { FaChalkboardTeacher } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-[#EFEFEF] text-[#347928] h-screen sticky top-0 w-[450px]">
      <div className="flex flex-col text-lg font-bold py-5 px-8">
        <div className="flex items-center gap-3 mb-6">
          <img src="/LOGO PONDOK AL-HUSNA 1.png" alt="LOGO" className="w-36" />
          <div className="flex flex-col">
            <h1 className="text-4xl">SISNA</h1>
            <p className="text-sm">
              Sistem Informasi Akademik Pesantren Al-Husna
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/beranda"
          >
            <IoHomeOutline /> Beranda
          </NavLink>
          <h3 className="flex items-center gap-3">
            <AiFillPieChart /> Pengelolaan Data Pesantren
          </h3>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/santri"
          >
            Data Santri
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/pengajar"
          >
            Data Pengajar
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/kelas"
          >
            Data Kelas
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/mata-pelajaran"
          >
            Data Mata Pelajaran
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/tahun-ajaran"
          >
            Data Tahun Ajaran
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/hasil-studi"
          >
            <MdOutlineShowChart /> Hasil Studi
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/modul-pembelajaran"
          >
            <TbLibrary /> Modul Pembelajaran
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/informasi-akademik"
          >
            <TbSpeakerphone /> Informasi Akademik Pesantren
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/akun-santri"
          >
            <IoIosPeople /> Data Akun Santri
          </NavLink>{" "}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-[#CAA422] underline underline-offset-2 flex items-center gap-3"
                : "flex items-center gap-3"
            }
            to="/pengurus/akun-pengajar"
          >
            <FaChalkboardTeacher /> Data Akun Pengajar
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
