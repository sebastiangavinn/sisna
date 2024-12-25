export default function GradeTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-separate">
        <thead className="bg-[#6D6D6D]">
          <tr>
            <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md w-16">
              No
            </th>
            <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
              ID Mata Pelajaran
            </th>
            <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
              Nama Mata Pelajaran
            </th>
            <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
              Nilai KKM
            </th>
            <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
              Nilai Angka
            </th>
            <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
              Nilai Huruf
            </th>
          </tr>
        </thead>
        <tbody className="bg-[#DDDDDD]">
          <tr>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              1
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              NHW01
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Kitab Ilmu Nahwu & Sorf
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              60
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              92
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Sembilan Puluh Dua
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              2
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              MA001
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Al-Quran
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              60
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              96
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Sembilan Puluh Enam
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              3
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              FQ001
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Fiqih
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              60
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              86
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Delapan Puluh Enam
            </td>
          </tr>
          <tr>
            <td
              className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md"
              colSpan={3}
            >
              Rata-rata
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              :
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              91,3
            </td>
            <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md">
              Sembilan puluh satu koma tiga
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
