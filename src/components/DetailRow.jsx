import React from "react";

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex flex-col justify-start md:flex-row md:items-center py-2 font-bold text-base gap-1 w-full">
      {/* Label */}
      <div className="md:w-1/4 w-full text-gray-700">{label}</div>

      {/* Separator */}
      <div className="hidden md:block mx-2">:</div>

      {/* Value */}
      <div className="w-full text-gray-900">{value}</div>
    </div>
  );
};

export default DetailRow;
