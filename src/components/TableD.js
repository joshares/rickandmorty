import React from "react";
import Pagination from "./Pagination";
import TableList from "./TableList";
import HomeLoading from "./loaders/HomeLoading";
import Error from "./Error";
import TableListd from "./Tablelistd";
import { MenuDrop } from "./menuModal";

export default function Table({
  characters,
  error,
  isFetching,
  page,
  setPage,
}) {
  if (isFetching) {
    return <HomeLoading />;
  }
  if (error) {
    console.log(error);
    return <Error message={error?.response?.data?.error} />;
  }
  const data = {};

  //   <thead class="md:text-xs text-[0.7rem] text-[#8094ae] capitalize border-b ">
  //   <tr>
  //     <th scope="col" class="px-4 py-5 md:block hidden">
  //       #
  //     </th>
  //     <th scope="col" class="px-2 py-5">
  //       Name
  //     </th>
  //     <th scope="col" class="px-3 py-5">
  //       Status
  //     </th>
  //     <th scope="col" class="px-3 py-5">
  //       Species
  //     </th>
  //     <th scope="col" class="px-3 py-5">
  //       Type
  //     </th>
  //     <th scope="col" class="px-3 py-5">
  //       Gender
  //     </th>
  //     <th scope="col" class="px-3 py-5"></th>
  //   </tr>
  // </thead>

  return (
    <div>
      <table class="w-full  text-sm text-left text-black bg-white rounded-2xl"></table>
      <Pagination
        page={page}
        setPage={setPage}
        total={characters?.info?.pages}
      />
    </div>
  );
}
