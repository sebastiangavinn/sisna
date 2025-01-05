import React from "react";
import { Link } from "react-router";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const Table = ({
  columns,
  data,
  showDetailColumn = false,
  showActionColumn = false,
  onEditClick,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate table-auto border-gray-200">
        <thead className="bg-[#6D6D6D]">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md"
              >
                {column.header}
              </th>
            ))}
            {showDetailColumn && (
              <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
                Hasil Studi Santri
              </th>
            )}
            {showActionColumn && (
              <th className="px-2 py-2 text-center text-xs font-semibold text-white rounded-md">
                Aksi
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-[#DDDDDD]">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md"
                >
                  {column.accessor === "no"
                    ? rowIndex + 1
                    : row[column.accessor]}
                </td>
              ))}
              {showDetailColumn && (
                <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md text-center">
                  <Link
                    to={`detail/${rowIndex}`}
                    className="border border-[#388E3C] text-center px-2 py-1 bg-white font-medium text-xs border-lg"
                  >
                    Lihat Detail
                  </Link>
                </td>
              )}
              {showActionColumn && (
                <td className="border border-gray-200 px-2 py-2 text-xs font-semibold rounded-md text-center">
                  <div className="flex justify-center gap-2">
                    <CiEdit
                      onClick={() => onEditClick(row)}
                      className="bg-[#256589] cursor-pointer font-bold text-white w-5 h-5 rounded-md"
                    />
                    <RiDeleteBin6Line
                      onClick={() => alert("Hapus item")}
                      className="bg-red-500 cursor-pointer text-white font-bold w-5 h-5 rounded-md"
                    />
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
