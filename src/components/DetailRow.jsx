import React from "react";

const DetailRow = ({ label, value }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center py-2 font-extrabold">
      <div className="w-full md:w-3/4">{label}</div>
      <div className="w-full">: {value}</div>
    </div>
  );
};

export default DetailRow;
