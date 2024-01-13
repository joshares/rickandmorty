"use client";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import Table from "./Table";
import HomeLoading from "./loaders/HomeLoading";
import Error from "./Error";
import { fetchCharacters, fetchSearchCharacter } from "@/hooks/useFetch";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [name, setName] = useState("");
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
    queryKey: name ? ["characters", name, page] : ["characters", page],
    queryFn: () => fetchCharacters(name, page),
    placeholderData: keepPreviousData,
  });

  // const {
  //   mutate: search,
  //   isPending,
  //   isError: searchError,
  //   data: searchData,
  // } = useMutation({
  //   mutationFn: async () => await fetchSearchCharacter(name, page),
  //   onError: (error) => {
  //     console.log(error);
  //   },
  //   onSuccess: (data) => {
  //     setCharacters(data);
  //     console.log(data);
  //   },
  // });

  // const characters = name && searchData ? searchData?.results : data?.results;

  useEffect(() => {
    setCharacters(data);
  }, [data]);

  if (isLoading) {
    return <HomeLoading />;
  }
  if (error || isError) {
    console.log(error);
    return <Error message={error?.response?.data?.error} />;
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
        <table class="w-full text-sm text-left text-black bg-white rounded-2xl">
          <thead class="text-xs text-[#8094ae] capitalize border-b">
            <tr>
              <th scope="col" class="px-4 py-5">
                #
              </th>
              <th scope="col" class="px-6 py-5">
                Name
              </th>
              <th scope="col" class="px-3 py-5">
                Status
              </th>
              <th scope="col" class="px-3 py-5">
                Species
              </th>
              <th scope="col" class="px-3 py-5">
                Type
              </th>
              <th scope="col" class="px-3 py-5">
                Gender
              </th>
              <th scope="col" class="px-3 py-5"></th>
            </tr>
          </thead>
          {characters?.results?.map((character, index) => {
            return (
              <Table
                key={index}
                character={character}
                index={index}
                page={page}
              />
            );
          })}
        </table>
        <Pagination
          page={page}
          setPage={setPage}
          total={characters?.info?.pages}
        />
      </div>
    </main>
  );
}
