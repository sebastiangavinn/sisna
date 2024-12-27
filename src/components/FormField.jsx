import React from "react";

const FormField = ({
  label,
  required = false,
  type = "text",
  endAdorment,
  ...props
}) => {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-[200px_1fr] gap-4 items-start lg:items-center">
        {/* Label */}
        <label className="text-left font-bold text-base text-[#347928] lg:mb-0 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {/* Input Wrapper */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 w-full">
          {/* Colon for desktop only */}
          <span className="hidden lg:block">:</span>
          <input
            type={type}
            className="w-full p-2 border-2 border-[#C3C3C3] rounded-md focus:outline-none focus:ring focus:ring-[#347928]"
            {...props}
          />
          {endAdorment}
        </div>
      </div>
    </div>
  );
};

export default FormField;
