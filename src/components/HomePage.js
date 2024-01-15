"use client";
import { useState } from "react";
import Search from "./Search";
import HomeLoading from "./loaders/HomeLoading";
import { fetchCharacters } from "@/components/hooks/useFetch";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Table from "./Table";
import useDebounce from "./hooks/useDebounce";

export default function HomePage() {
  const [name, setName] = useState("");

  const debouncedName = useDebounce(name, 2000);

  const [page, setPage] = useState(1);
  const {
    isError,
    error,
    data,
    isFetching,
    isPlaceholderData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: debouncedName
      ? ["characters", debouncedName, page]
      : ["characters", page],
    queryFn: () => fetchCharacters(name, page),
    placeholderData: keepPreviousData,
  });

  const characters = data;

  if (isLoading) {
    return <HomeLoading />;
  }

  return (
    <main>
      <div class="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white">
        <Search
          name={name}
          setName={setName}
          setPage={setPage}
          search={refetch}
          searchError={""}
        />
        <Table
          page={page}
          setPage={setPage}
          characters={characters}
          error={error}
          isFetching={isFetching}
        />
      </div>
    </main>
  );
}
