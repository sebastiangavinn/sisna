import React from "react";
import { LuClock8 } from "react-icons/lu";
import { Link } from "react-router";

const CardInfo = () => {
  return (
    <Link to="/informasi-akademik/detail">
      <div className="border-2 border-[#5D9453] rounded-3xl px-6 pt-2 pb-8">
        <img
          src="src/assets/image 2.png"
          alt="info"
          className="mx-auto mb-4 w-full"
        />
        <div className="space-y-1">
          <h3 className="text-sm font-bold">
            Informasi dimulainya kegiatan diniyah
          </h3>
          <div className="flex items-center gap-1 font-bold text-[#6D6D6D] text-xs">
            <LuClock8 />
            <p>3 Agustus 2024</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardInfo;
