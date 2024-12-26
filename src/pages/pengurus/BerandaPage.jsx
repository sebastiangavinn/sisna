import React from "react";
import { Link } from "react-router";
import Card from "../../components/Card";
import Calender from "../../components/Calender";
import CardModul from "../../components/CardModul";
import CardInfo from "../../components/CardInfo";
import ChartBelajar from "../../components/ChartBelajar";

import { EVENTS } from "../../constants";

const BerandaPage = () => {
  return (
    <>
      <section className="px-4 mt-10 mb-24 flex flex-wrap items-center justify-center gap-x-9 gap-y-4">
        <Card title="Jumlah Santri" totalData={169} variant="green" />
        <Card title="Jumlah Pelajar" totalData={21} variant="red" />
        <Card title="Jumlah Kelas" totalData={13} variant="blue" />
        <Card title="Mata Pelajaran" totalData={8} variant="orange" />
        <Card title="Data Tahun Ajaran" totalData={169} variant="orange" />
      </section>

      <section className="bg-gradient-to-r from-[#E3F1E1] to-[#E6FFE3]">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-5 px-12 gap-9">
          <div className="bg-white text-[#07570A] font-bold p-8 rounded-3xl">
            <div className="flex items-start gap-4">
              <div className="w-4 h-4 bg-[#07570A]"></div>
              <div className="text-xl">
                <h3>Kalender Akademik</h3>
                <p className="text-red-500">Semester Ganjil 2024/2025</p>
              </div>
            </div>
            <div className="text-center font-bold text-xl my-8">
              <div className="inline-table">
                {EVENTS.map((event, index) => (
                  <div key={index} className="table-row">
                    <div className="table-cell text-right pr-2">
                      {event.date}
                    </div>
                    <div className="table-cell">:</div>
                    <div className="table-cell text-left pl-1">
                      {event.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Calender />
        </div>
      </section>

      <div className="px-12">
        <section className="my-5">
          <div className="bg-white shadow-2xl rounded-3xl pt-5 pb-40">
            <h1 className="text-center font-bold text-2xl mb-8 text-[#347928]">
              Informasi Akademik Pesantren Mahasiswi Al-Husna
            </h1>
            <div className="flex items-center justify-center gap-9 px-6">
              <CardInfo />
              <CardInfo />
              <CardInfo />
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="px-8 py-9 shadow-2xl rounded-3xl mb-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-4 h-4 bg-[#795151]"></div>
              <h3 className="text-xl font-bold text-[#A26C6C]">
                Modul Pembelajaran
              </h3>
            </div>
            <div className="flex flex-row flex-wrap mx-auto justify-center gap-3 mb-10">
              <CardModul content="Perbedaan Isim, Fi’il, dan Huruf dalam ilmu Nahwu" />
              <CardModul content="Perbedaan Isim, Fi’il, dan Huruf dalam ilmu Nahwu" />
              <CardModul content="Perbedaan Isim, Fi’il, dan Huruf dalam ilmu Nahwu" />
            </div>
            <Link className="bg-red-500 italic p-3 rounded-xl text-white font-medium">
              Baca Selengkapnya
            </Link>
          </div>

          <div className="px-8 py-9 shadow-2xl rounded-3xl my-10">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-[#1F4918]"></div>
              <h3 className="text-xl font-bold text-[#1F4918]">
                Grafik Hasil Pembelajaran
              </h3>
            </div>
            <div className="w-3/4 mx-auto mt-9">
              <ChartBelajar />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BerandaPage;
