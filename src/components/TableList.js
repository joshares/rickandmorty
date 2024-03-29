import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import MenuModal, { MenuDrop } from "./menuModal";

export default function TableList({ index, page, character }) {
  const [show, setShow] = useState(true);
  const [hovered, setHovered] = useState({
    name: false,
    status: false,
    type: false,
  });
  const numbers = () => {
    const num = eval(page * 20 - 20);
    return num;
  };

  const closeModal = () => {
    setShow(false);
  };

  const checkInitials = (names) => {
    const words = names;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    const firstTwoWords = joinedWord.slice(0, 2);
    return firstTwoWords;
  };
  const firstTwoWords = (names) => {
    const words = names;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    const firstTwoWords = joinedWord.slice(0, 2);
    return firstTwoWords;
  };
  return (
    <tbody className="text-sm md:text-sm">
      <tr className="flex flex-col gap-2 sm:hidden  pt-10 pl-10 p-10 justify-start items-start border-b hover:bg-gray-50 relative">
        <div className="flex gap-8 items-center">
          <p className="text-gray-500 w-20 font-bold">#</p>
          <p className="">{numbers() + index + 1}</p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="text-gray-500 w-20 font-bold">Name</p>
          <p className="">{character?.name}</p>
        </div>

        <div className="flex gap-8 items-center w-full ">
          <p className="text-gray-500 w-20 font-bold">Status</p>
          <p
            className={` font-medium text-black w-max px-2 p-1 rounded-md ${
              character?.status === "Alive" ? "bg-green-400" : "bg-gray-400"
            } ${character?.status === "Dead" && "bg-red-400"}`}
          >
            {character?.status}
          </p>
        </div>
        <div className="flex gap-8 items-center ">
          <p className="text-gray-500 w-20 font-bold">species</p>
          <p>{character?.species} </p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="text-gray-500 w-20 font-bold">type</p>
          <p>{character?.type || "Unknown"}</p>
        </div>
        <div className="flex gap-8 items-center">
          <p className="text-gray-500 w-20 font-bold">gender</p>
          <p>{character?.gender}</p>
        </div>
        <div className="absolute bottom-5 right-5">
          <MenuDrop id={character?.id} setShow={setShow} />
        </div>
      </tr>

      <tr class="hidden sm:table-row bg-white border-b hover:bg-gray-50 ">
        <td class="px-4 py-3 md:block hidden">
          <div className="flex items-center mt-2">{numbers() + index + 1}</div>
        </td>
        <th
          scope="row"
          class="px-2 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <p className="p-2.5 text-center w-10 bg-blue-500 rounded-full text-white hidden md:block">
              {checkInitials(character?.name)}
            </p>
            <div>
              <h2 className="font-medium md:block md:w-auto sm:w-auto w-14 whitespace-normal overflow-hidden">
                {character?.name}
              </h2>
            </div>
          </div>
        </th>
        <td class="px-3 py-4">
          <div>
            <h3
              className={`hidden md:block font-medium text-black w-max px-2 p-1 rounded-md ${
                character?.status === "Alive" ? "bg-green-400" : "bg-gray-400"
              } ${character?.status === "Dead" && "bg-red-400"}`}
            >
              {character?.status}
            </h3>
            <h3
              className={`md:hidden font-medium text-black w-max px-2 p-1 rounded-md ${
                character?.status === "Alive" ? "bg-green-400" : "bg-gray-400"
              } ${character?.status === "Dead" && "bg-red-400"}`}
            >
              {character?.status.slice(0, 1)}
            </h3>
          </div>
        </td>
        <td class="px-3 py-4">{character?.species}</td>
        <td class="px-3 py-4 text-[#8094ae] text-[13px] md:whitespace-nowrap md:w-28  sm:w-14 sm:whitespace-normal overflow-hidden">
          {character?.type || "Unknown"}
        </td>
        <td class="px-3 py-4 mt-2 md:block hidden">{character?.gender}</td>
        <td class="px-3 py-4 text-center md:hidden mt-4">
          {character?.gender.slice(0, 1)}
        </td>
        <td class="px-6 py-4 text-lg cursor-pointer ">
          <div className="">
            <MenuDrop setShow={setShow} id={character?.id} />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
