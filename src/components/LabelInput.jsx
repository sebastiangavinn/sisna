import React from "react";

const LabelInput = ({
  label,
  id,
  name,
  type = "text",
  required = false,
  value,
  onChange,
  placeholder,
  className,
  ...rest
}) => {
  return (
    <div className="w-full mb-4">
      <label htmlFor={id} className="block font-semibold text-xl mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className={`w-full p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default LabelInput;
