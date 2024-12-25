import React from "react";
import clsx from "clsx";

const Card = ({ title, totalData, variant, className }) => {
  const cardClass = clsx(
    {
      "bg-gradient-to-b from-[#A8E063] to-[#56AB2F]": variant === "green",
      "bg-gradient-to-b from-[#F80759] to-[#BC4E9C]": variant === "red",
      "bg-gradient-to-b from-[#74EBD5] to-[#3EA9E5]": variant === "blue",
      "bg-gradient-to-b from-[#FF6A00] to-[#E84545]": variant === "orange",
    },
    "text-center font-bold text-white px-8 py-6 rounded-3xl w-fit",
    className
  );

  return (
    <div className={cardClass}>
      <div className="py-6 px-8 space-y-3">
        <h1 className="text-base">{title}</h1>
        <p className="text-4xl">{totalData}</p>
      </div>
    </div>
  );
};

export default Card;
