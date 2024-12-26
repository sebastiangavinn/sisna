import React from "react";

const LabelDescription = ({ label, required = false, rows, ...props }) => {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-10 items-start">
      <label className="text-left font-bold text-base">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-start gap-2">
        :
        <textarea
          rows={rows}
          className="w-full p-1 border-2 border-[#C3C3C3] rounded-md"
          {...props}
        ></textarea>
        =
      </div>
    </div>
  );
};

export default LabelDescription;
