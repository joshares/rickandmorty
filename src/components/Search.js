"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function Search({ name, setName, search, searchError }) {
  const handlesubmit = (e) => {
    e.preventDefault();
    // search();
  };

  return (
    <form
      className="p-4 flex items-center  md:text-sm text-xs"
      onSubmit={handlesubmit}
    >
      {searchError && (
        <p className="text-red-500 absolute text-center text-xs uppercase font-bold top-[80%]">
          Character not found
        </p>
      )}
      <input
        name="name"
        required
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="search character"
        className="w-full outline-none bg-gray-200 p-2 rounded-l-md"
      />
      <button
        type="submit"
        className="bg-blue-500 rounded-r-md p-[0.65rem] md:p-3 cursor-pointer"
      >
        <IoSearch className="text-white" />
      </button>
    </form>
  );
}
