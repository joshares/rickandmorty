import React from "react";
import { Skeleton } from "../ui/Skeleton";

export default function HomeLoading() {
  return (
    <main>
      <div class="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white">
        <div className="p-2">
          <Skeleton className="w-full h-16 bg-gray-400" />
        </div>
        <div className="p-2 flex flex-col gap-2">
          {[1, 2, 3, 4, 6, 7].map((_, i) => {
            return <Skeleton key={i} className="w-full h-24 bg-gray-400" />;
          })}
        </div>
        <div className="absolute bottom-4 right-4">
          <Skeleton className="w-32 h-6 bg-gray-400" />
        </div>
      </div>
    </main>
  );
}
