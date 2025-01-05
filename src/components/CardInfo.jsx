import React from "react";
import { LuClock8 } from "react-icons/lu";
import { Link } from "react-router";
import { FiTrash2 } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";

const CardInfo = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Link to="detail">
      <div className="border-2 border-[#5D9453] rounded-3xl px-6 pt-2 pb-8">
        <img src="/image 2.png" alt="info" className="mx-auto mb-4 w-full" />
        <div className="space-y-1">
          <h3 className="text-sm font-bold">
            Informasi dimulainya kegiatan diniyah
          </h3>
          <div className="flex justify-between">
            <div className="flex items-center gap-1 font-bold text-[#6D6D6D] text-xs">
              <LuClock8 />
              <p>3 Agustus 2024</p>
            </div>
            {user.role === "pengurus" && (
              <div className="flex items-center gap-2">
                <button className="p-1 text-red-500 hover:bg-red-50 rounded">
                  <FiTrash2 className="w-4 h-4" />
                </button>
                <button className="p-1 text-blue-500 hover:bg-blue-50 rounded">
                  <FiEdit className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardInfo;
