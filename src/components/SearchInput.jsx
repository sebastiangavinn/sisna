import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <div className="border border-[#D9D9D9] flex items-center w-max h-full px-1 py-2 rounded-lg">
      <input type="text" className="w-36 h-full focus:border-none border-none ml-2 text-sm" />
      <IoMdSearch className="w-5 h-5 ml-1 text-[#5D9453]" />
    </div>
  );
};

export default SearchInput;
