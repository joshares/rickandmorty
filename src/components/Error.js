"use client";

export default function Error({ message }) {
  const handleReload = () => {
    window.location.reload(true);
  };
  return (
    <main>
      <div class="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white flex flex-col justify-center items-center text-red-500 uppercase">
        <p>
          {message === "There is nothing here"
            ? "No character found"
            : "Error Loading page"}
        </p>
        <p>{message || "check connection and reload"}</p>
        <button
          className=" mt-10 bg-blue-500 text-white px-4 p-1 rounded-lg"
          onClick={handleReload}
        >
          Reload
        </button>
      </div>
    </main>
  );
}
