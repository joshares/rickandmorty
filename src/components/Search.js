"use client";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <form className="p-4 flex items-center ">
      <input
        type="text"
        placeholder="search character"
        className="w-full outline-none bg-gray-200 p-2 rounded-l-md"
      />
      <div className="bg-blue-500 rounded-r-md p-3 cursor-pointer">
        <IoSearch className="text-white" />
      </div>
    </form>
  );
}
