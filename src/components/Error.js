"use client";

export default function Error({ message }) {
  const handleReload = () => {
    window.location.reload(true);
  };
  return (
    <main className="w-full">
      <div class="relative pb-20 min-h-[30rem] overflow-x-auto bg-white sm:rounded-lg  rounded-xl  flex flex-col justify-center items-center text-red-500 uppercase">
        <p>
          {message === "There is nothing here"
            ? "No character found,,"
            : "Error Loading page"}
        </p>
        <p>
          {message === "There is nothing here"
            ? "Try another name or reload"
            : "check connection and reload"}
        </p>
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
