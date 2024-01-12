"use client";
import Image from "next/image";
import ric from "../../public/roc.png";

import Link from "next/link";

export default function SingleCharacter() {
  return (
    <main className="relative pb-20 min-h-[30rem] overflow-x-auto shadow-md sm:rounded-lg  rounded-xl bg-white p-8">
      <div className="pb-5 text-center ">
        <p className="text-3xl font-semibold">Character Information</p>
        <p className="text-xs uppercase font-semibold">
          Basic character info, that gives client summary
        </p>
      </div>
      <section className="flex flex-col gap-2 justify-center items-center md:flex-row md:items-start md:gap-10">
        <div className="w-2/5 md:w-1/5 h-[10rem]md:h-[10rem]">
          <Image src={ric} alt="image" className="w-full rounded-full h-full" />
        </div>
        <article className="flex flex-col gap-2 uppercase md:text-xl md:px-10">
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">Name</p>
            <p>dara olu</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">species</p>
            <p>dara olu</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">type</p>
            <p>dara olu</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">gender</p>
            <p>dara olu</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">image</p>
            <p>dara olu</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">location</p>
            <p>dara olu</p>
          </div>
          <div className="flex gap-8 items-center">
            <p className="text-gray-500 w-20">origin</p>
            <p>dara olu</p>
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
