import React from "react";

const FormField = ({
  label,
  required = false,
  type = "text",
  endAdorment,
  ...props
}) => {
  return (
    <div className="grid grid-cols-[200px_1fr] gap-10 items-center">
      <label className="text-left font-bold text-base text-[#347928]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-center gap-2">
        :
        <input
          type={type}
          className="w-full p-1 border-2 border-[#C3C3C3] rounded-md"
          {...props}
        />
        {endAdorment}
      </div>
    </div>
  );
};

export default FormField;
