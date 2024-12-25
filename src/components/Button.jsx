import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`bg-[#1F4918] text-center font-bold text-2xl uppercase w-full py-3 rounded-xl ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
