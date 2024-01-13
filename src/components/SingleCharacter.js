"use client";
import Image from "next/image";
import ric from "../../public/roc.png";
import Link from "next/link";
import HomeLoading from "./loaders/HomeLoading";
import Error from "./Error";
import { useState } from "react";
import SinglePageLoader from "./loaders/SinglePageLoader";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleCharacter } from "@/hooks/useFetch";

export default function SingleCharacter() {
  const router = useRouter();
  const { characterId } = router.query;
  const { isError, error, data, isFetching, isPlaceholderData, isLoading } =
    useQuery({
      queryKey: ["character"],
      queryFn: async () => await fetchSingleCharacter(characterId),
    });

  console.log(data);

  if (isFetching || isLoading) {
    return <SinglePageLoader />;
  }
  if (error || isError) {
    return <Error message="bad connection" />;
  }

  return (
    <main className="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white p-8">
      <div className="pb-5 text-center ">
        <p className="text-3xl font-semibold uppercase">
          Character Information
        </p>
        <p className="text-xs uppercase font-semibold text-blue-500">
          Basic character info
        </p>
      </div>
      <section className="flex flex-col gap-2 justify-center items-center md:flex-row md:items-start md:gap-10 py-10">
        <div className="w-2/5 md:w-1/5 h-[10rem]md:h-[10rem]">
          <Image
            src={data?.image || ric}
            width={100}
            height={100}
            alt="image"
            className="w-full rounded-full h-full"
          />
        </div>
        <article className="flex flex-col gap-2  uppercase   md:px-10 md:pt-2 pt-10 pl-10 md:pl-0">
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">Name</p>
            <p className="">{data?.name}</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">species</p>
            <p>{data?.species}</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">type</p>
            <p>{data?.type || "Unknown"}</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">gender</p>
            <p>{data?.gender}</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">location</p>
            <p>{data?.location?.name.replace(/\s*\(.*\)\s*/, "")}</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">origin</p>
            <p>{data?.origin?.name.replace(/\s*\(.*\)\s*/, "")}</p>
          </div>
        </article>
      </section>
      <footer className="uppercase pt-10 text-xs text-center">
        <p>Is this your favorite character? go back and see more characters</p>
        <Link href="/" className="underline text-blue-500">
          Go back
        </Link>
      </footer>
    </main>
  );
}
