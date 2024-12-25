import React, { useState } from "react";

const LabelDropdown = ({
  label = "Select an option",
  options = [],
  onChange = () => {},
  name = "",
  id = "",
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label htmlFor={id} className="text-sm font-bold text-[#1F4918]">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={selectedValue}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
      >
        <option value="" disabled>
          {label}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabelDropdown;
