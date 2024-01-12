"use client";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export default function Pagination() {
  return (
    <main className="flex items-center justify-end p-2 mt-10 gap-5 font-bold">
      <div className="flex items-center gap-4 text-[1rem]  cursor-pointer">
        <MdArrowBackIosNew className="text-sm mt-1" />
        <p>Previous</p>
      </div>
      <div className="flex items-center gap-5">
        <button>1</button>
        <button className="bg-blue-500 text-white p-1 px-3 rounded-md">
          2
        </button>
        <button>3</button>
        <p>...</p>
        <button>20</button>
      </div>
      <div className="flex items-center gap-2 text-[1rem]  cursor-pointer">
        <p>Next</p>
        <MdOutlineArrowForwardIos className="text-sm mt-1" />
      </div>
    </main>
  );
}
