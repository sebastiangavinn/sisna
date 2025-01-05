export const USERS = [
  {
    username: "santri",
    password: "santri",
    role: "santri",
  },
  {
    username: "pengajar",
    password: "pengajar",
    role: "pengajar",
  },
  {
    username: "pengurus",
    password: "pengurus",
    role: "pengurus",
  },
];

export const EVENTS = [
  { date: "1 Agustus 2024", name: "Masuk Pondok" },
  { date: "17 Agustus 2024", name: "Masa Orientasi Santri Baru" },
  { date: "6 September 2024", name: "Ikhtibar" },
  { date: "5 Desember 2024", name: "Ujian Tengah Semester" },
  { date: "20 Desember 2024", name: "Ziarah Wali" },
  { date: "26 Desember 2024", name: "Libur Semester Ganjil" },
  { date: "1 Februari 2024", name: "Kembali ke Pondok" },
];

export const SANTRI = [
  {
    nis: "2020786457001",
    nama: "Naimatul Muthmainnah",
    ttl: "Jember, 26 Juli 2001",
    alamat: "Dusun Krajan A, RT 002/RW 006, Wono rejo Kencong Jember",
    prodi: "Pendidikan Biologi/FKIP",
    noWa: "083678567495",
    namaWali: "Nurhidayat",
    noHpWali: "082579356784",
  },
  {
    nis: "2020786457002",
    nama: "Zahratun Nisa'",
    ttl: "Lumajang, 19 Maret 2002",
    alamat: "Desa Kemirian Dusun Lumbung RT016/RW005 Tamanan Bondowoso",
    prodi: "Ilmu Tanah/FAPERTA",
    noWa: "085432785465",
    namaWali: "Supriyadi",
    noHpWali: "083875396846",
  },
];

export const PENGAJAR = [
  {
    id: "20180001",
    nama: "Nailatus Sa’adah",
    ttl: "Jambi, 28 Mei 2000",
    alamat: "Jl. Sultan Thaha No. 42,RT 016/RW 004 Pasar Jambi, Kota Jambi,",
    prodi: "Pendidikan Biologi/FKIP",
    noWa: "083678567495",
    mapel: "Nahwu",
  },
  {
    id: "20190002",
    nama: "Nur Aisyah Maharani",
    ttl: "Kediri, 16 Juli 2001",
    alamat: "Dsn. Tegalrejo 003/002 Ds. Wonorejo Kec. Ngadiluwih Kab. Kediri",
    prodi: "Ilmu Tanah/FAPERTA",
    noWa: "085432785465",
    mapel: "Tilawati 6",
  },
];

export const KELAS = [
  { kodeRuang: "KT001", namaKelas: "Ulya", kapasitasKelas: 20 },
  { kodeRuang: "KT002", namaKelas: "Wustho", kapasitasKelas: 20 },
  { kodeRuang: "KT003", namaKelas: "Kitab AB", kapasitasKelas: 15 },
  { kodeRuang: "LA001", namaKelas: "Ula 1", kapasitasKelas: 40 },
  { kodeRuang: "LA002", namaKelas: "Ula 2", kapasitasKelas: 30 },
  { kodeRuang: "LA004", namaKelas: "Ula 3", kapasitasKelas: 30 },
  { kodeRuang: "MB001", namaKelas: "Pra Ula", kapasitasKelas: 40 },
  { kodeRuang: "MA001", namaKelas: "Kitab A2", kapasitasKelas: 20 },
  { kodeRuang: "GZ001", namaKelas: "Tahfidzul Qur'an", kapasitasKelas: 40 },
  { kodeRuang: "MA001", namaKelas: "Tilawati 3", kapasitasKelas: 15 },
  { kodeRuang: "GZ001", namaKelas: "Tilawati 4", kapasitasKelas: 25 },
  { kodeRuang: "GZ001", namaKelas: "Tilawati 5", kapasitasKelas: 15 },
  { kodeRuang: "MA001", namaKelas: "Tilawati 6", kapasitasKelas: 20 },
  { kodeRuang: "GZ001", namaKelas: "Al-Qur'an", kapasitasKelas: 32 },
];

export const MAPEL = [
  { kodeMataPelajaran: "NHW01", namaMataPelajaran: "Kitab Ilmu Nahwu & Sorf" },
  { kodeMataPelajaran: "NHW03", namaMataPelajaran: "Kitab Fathul Qorib" },
  { kodeMataPelajaran: "TLW01", namaMataPelajaran: "Tilawati Jilid 3" },
  { kodeMataPelajaran: "TLW02", namaMataPelajaran: "Tilawati Jilid 4" },
  { kodeMataPelajaran: "TLW03", namaMataPelajaran: "Tilawati Jilid 5" },
  { kodeMataPelajaran: "MB001", namaMataPelajaran: "Tilawati Jilid 6" },
  { kodeMataPelajaran: "MA001", namaMataPelajaran: "Al-Quran" },
  { kodeMataPelajaran: "FQ001", namaMataPelajaran: "Fiqih" },
];

export const PROFILE = {
  name: "Zahrotun Nisa'",
  ttl: "Jember, 19 Juli 2002",
  alamat: "Jln. Kalimantan x no. 173, Sumbersari, Jember",
  jurusan: "Ilmu Tanah/FAPERTA",
  nomerWA: "083147695742",
  namaWali: "Supriyadi",
  nomerWali: "0838753965486",
};

export const TAHUN_AJARAN = [
  {
    idTahunAjaran: 20211,
    tahunAjaran: 2021,
    jenisSemester: "Ganjil",
    periodeSemester: "08/08/2020 - 22/12/2020",
  },
  {
    idTahunAjaran: 20212,
    tahunAjaran: 2021,
    jenisSemester: "Genap",
    periodeSemester: "01/02/2021 - 26/06/2021",
  },
  {
    idTahunAjaran: 21221,
    tahunAjaran: 2122,
    jenisSemester: "Ganjil",
    periodeSemester: "07/08/2021 - 22/12/2021",
  },
];

export const AKUN_SANTRI = [
  {
    name: "Naimatul Mutamimah",
    email: "naimatulmtmhh0@gmail.com",
    phoneNumber: "083678567495",
    password: "********",
  },
  {
    name: "Zahrotun Nisa’",
    email: "zahroonisa68@gmail.com",
    phoneNumber: "085432785465",
    password: "********",
  },
];

export const AKUN_PENGAJAR = [
  {
    name: "Nailatus Sa’adah",
    email: "nailatussdah980@gmail.com",
    phoneNumber: "083678567495",
    password: "********",
  },
  {
    name: "Nur Aisyah Maharani",
    email: "aisyahmhrni87@gmail.com",
    phoneNumber: "085432785465",
    password: "********",
  },
];
