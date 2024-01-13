"use client";
import { MdArrowBackIosNew, MdOutlineArrowForwardIos } from "react-icons/md";

export default function Pagination({ page, setPage, total }) {
  const nextPage = () => {
    if (page < total) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(total);
    }
  };
  const changePage = () => {
    setPage(total);
  };

  if (total < 2) {
    return null;
  }

  return (
    <main className="flex items-center justify-end p-2 mt-10 gap-5 font-bold">
      <div
        className="flex items-center gap-4 text-[1rem]  cursor-pointer"
        onClick={prevPage}
      >
        <MdArrowBackIosNew className="text-sm mt-1" />
        <p>Previous</p>
      </div>
      <div className="flex items-center gap-5">
        {page > 1 && <button onClick={prevPage}>{page > 1 && page - 1}</button>}
        <button className="bg-blue-500 text-white p-1 px-3 rounded-md">
          {page}
        </button>
        {page < total && <button onClick={nextPage}>{page + 1}</button>}
        <p>...</p>
        {page < total - 1 && <button onClick={changePage}>{total}</button>}
      </div>
      <div
        className="flex items-center gap-2 text-[1rem]  cursor-pointer"
        onClick={nextPage}
      >
        <p>Next</p>
        <MdOutlineArrowForwardIos className="text-sm mt-1" />
      </div>
    </main>
  );
}
