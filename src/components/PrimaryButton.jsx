import React from "react";
import clsx from "clsx";

const PrimaryButton = ({
  text,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "bg",
}) => {
  const buttonClass = clsx(
    {
      "bg-[#347928] text-white": variant === "bg",
      "border border-[#347928] text-[#347928]": variant === "outline",

      "opacity-50 cursor-not-allowed": disabled,
    },
    "font-extrabold py-3 w-full rounded-lg",
    className
  );
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
