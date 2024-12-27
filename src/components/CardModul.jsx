import React from "react";

const CardModul = ({ content }) => {
  return (
    <div className="bg-[#CA8787] rounded-[36px] rounded-bl-[36px] rounded-br-[36px] lg:w-[400px] space-y-4">
      <img src="/empuan (1) 1.png" alt="EMpuan" className="w-full" />
      <div className="bg-[#795151] w-full h-20 rounded-full py-3 lg:px-16 px-3 text-white mt-auto flex items-center justify-center">
        <h1 className="font-bold lg:text-lg text-sm text-center">{content}</h1>
      </div>
    </div>
  );
};

export default CardModul;
