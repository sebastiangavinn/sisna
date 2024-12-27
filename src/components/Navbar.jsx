import React, { useState } from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-5 bg-white sticky top-0 text-[#347928] shadow-lg rounded-bl-xl rounded-br-xl z-50">
      <div className="flex flex-row justify-between items-center">
        {/* Logo and Title */}
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

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl text-[#347928] focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="lg:flex flex-row items-center xl:gap-10 lg:gap-5 font-bold text-sm hidden">
          {[
            "beranda",
            "pengelolaan-pesantren",
            "hasil-studi",
            "modul-pembelajaran",
            "informasi-akademik",
          ].map((item) => (
            <NavLink
              key={item}
              className={({ isActive }) =>
                `block py-2 capitalize ${
                  isActive ? "text-[#CAA422] underline underline-offset-2" : ""
                }`
              }
              to={`/${item}`}
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.replace("-", " ")}
            </NavLink>
          ))}
        </ul>

        {/* Profile Icon */}
        <Link to="/profile" className="hidden lg:block">
          <img src="/download (2) 1.png" alt="profile" />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 bg-white w-full max-w-screen-lg mx-auto px-4 py-2 transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {[
          "beranda",
          "pengelolaan-pesantren",
          "hasil-studi",
          "modul-pembelajaran",
          "informasi-akademik",
        ].map((item) => (
          <NavLink
            key={item}
            className={({ isActive }) =>
              `block py-2 capitalize font-bold ${
                isActive ? "text-[#CAA422] underline underline-offset-2" : ""
              }`
            }
            to={`/${item}`}
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >
            {item.replace("-", " ")}
          </NavLink>
        ))}
        <Link to="/profile" className="block py-2">
          <img src="/download (2) 1.png" alt="profile" className="w-8 h-8" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
