import React from "react";
import { Skeleton } from "../ui/Skeleton";

export default function SinglePageLoader() {
  return (
    <main>
      <div class="relative  pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white">
        <div className="p-2 flex items-center justify-center">
          <Skeleton className="w-3/6 h-10 bg-gray-400" />
        </div>
        <div className="p-2 flex items-center justify-center gap-10 md:flex-row flex-col">
          <Skeleton className=" h-[18rem] bg-gray-400 rounded-full w-[18rem]" />
          <Skeleton className="w-[15rem] h-[20rem] bg-gray-400" />
        </div>
        <div className="mt-10 flex justify-center items-center">
          <Skeleton className="w-32 h-6 bg-gray-400" />
        </div>
      </div>
    </main>
  );
}
