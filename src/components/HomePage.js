"use client";
import { useEffect, useState } from "react";
import Search from "./Search";
import HomeLoading from "./loaders/HomeLoading";
import { fetchCharacters } from "@/components/hooks/useFetch";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { debounce } from "lodash";
import Table from "./Table";

export default function HomePage() {
  const [name, setName] = useState("");
  const [debouncedName, setDebouncedName] = useState("");
  const debounceName = debounce((value) => {
    setDebouncedName(value);
    // setPage(1);
    console.log(debouncedName);
  }, 2000);
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

  // Update debouncedName when name changes
  useEffect(() => {
    debounceName(name);
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  if (isLoading) {
    return <HomeLoading />;
  }

  return (
    <main>
      <div class="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white">
        <Search
          name={name}
          setName={setName}
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
