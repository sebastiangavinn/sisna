import React from "react";

import Card from "../components/Card";
import CardInfo from "../components/CardInfo";
import CardModul from "../components/CardModul";
import Calender from "../components/Calender";
import ChartBelajar from "../components/ChartBelajar";

import { EVENTS } from "../constants";
import { Link } from "react-router";

const BerandaPage = () => {
  return (
    <>
      <div className="px-6">
        <img
          src="/Black Yellow Modern Digital Marketing Agency Facebook Cover (1286 x 394 piksel) (1) 1.png"
          alt="banner"
          className="mx-auto mt-16 mb-3 hidden lg:block"
        />

        <section className="px-4 mt-10 mb-24 flex items-center flex-wrap justify-center gap-9">
          <Link to="/pengelolaan-pesantren/santri">
            <Card title="Jumlah Santri" totalData={169} variant="green" />
          </Link>
          <Link to="/pengelolaan-pesantren/pengajar">
            <Card title="Jumlah Pengajar" totalData={21} variant="red" />
          </Link>
          <Link to="/pengelolaan-pesantren/kelas">
            <Card title="Jumlah Kelas" totalData={13} variant="blue" />
          </Link>
          <Link to="/pengelolaan-pesantren/mata-pelajaran">
            <Card title="Mata Pelajaran" totalData={8} variant="orange" />
          </Link>
        </section>
      </div>

      <section className="bg-gradient-to-r from-[#E3F1E1] to-[#E6FFE3]">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 lg:px-12 px-6 gap-9">
          <div className="bg-white text-[#07570A] font-bold p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-[#07570A]"></div>
              <div className="text-xl">
                <h3>Kalender Akademik</h3>
                <p className="text-red-500">Semester Ganjil 2024/2025</p>
              </div>
            </div>
            <div className="text-center font-bold text-base sm:text-xl my-4 sm:my-8">
              <div className="grid grid-cols-[auto_1rem_auto] gap-x-2 sm:gap-x-4 mx-auto">
                {EVENTS.map((event, index) => (
                  <React.Fragment key={index}>
                    <div className="text-right pr-2 text-sm sm:text-base">
                      {event.date}
                    </div>
                    <div className="text-center">:</div>
                    <div className="text-left pl-1 text-sm sm:text-base">
                      {event.name}
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <Calender />
        </div>
      </section>

      <div className="lg:px-12 px-6">
        <section className="my-5">
          <div className="bg-white shadow-2xl rounded-3xl pt-5 pb-40">
            <h1 className="text-center font-bold text-2xl mb-8 text-[#347928]">
              Informasi Akademik Pesantren Mahasiswi Al-Husna
            </h1>
            <div className="flex items-center flex-wrap justify-center gap-9 px-6">
              <CardInfo />
              <CardInfo />
              <CardInfo />
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="px-8 py-9 shadow-2xl rounded-3xl mb-5">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#795151]"></div>
              <h3 className="text-xl font-bold text-[#A26C6C]">
                Modul Pembelajaran
              </h3>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-7 grid-cols-1 my-10 place-items-center">
              <CardModul content="Perbedaan Isim, Fi’il, dan Huruf dalam ilmu Nahwu" />
              <CardModul content="Fiil Madhi, Mudhori’, Amar" />
              <CardModul content="Fi’il mujarod dan Mazid" />
            </div>
            <Link className="bg-red-500 italic p-3 mt-12 rounded-xl text-white font-medium">
              Baca Selengkapnya
            </Link>
          </div>

          <div className="px-8 py-9 shadow-2xl rounded-3xl my-10">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#1F4918]"></div>A
              <h3 className="text-xl font-bold text-[#1F4918]">
                Grafik Hasil Pembelajaran
              </h3>
            </div>
            <div className="lg:w-3/4 w-full mx-auto mt-9">
              <ChartBelajar />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BerandaPage;
