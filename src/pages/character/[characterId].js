import SingleCharacter from "@/components/SingleCharacter";
import Link from "next/link";
import React from "react";

export default function CharacterId() {
  return (
    <main className="bg-gray-200 md:p-10 p-5 min-h-screen shadow-inner ">
      <header className=" pb-10 flex font-serif flex-col font-semibold gap-0">
        <p className="uppercase text-2xl">rick and morty</p>
        <p className="text-xs uppercase text-gray-600">Character</p>
      </header>
      <SingleCharacter />
    </main>
  );
}
