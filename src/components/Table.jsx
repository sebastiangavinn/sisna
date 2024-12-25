import React from "react";
import { Link } from "react-router";

const Table = ({ columns, data, showDetailColumn = false }) => {
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
                    to={`/hasil-studi/detail/${rowIndex}`}
                    className="border border-[#388E3C] text-center px-2 py-1 bg-white font-medium text-xs border-lg"
                  >
                    Lihat Detail
                  </Link>
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
