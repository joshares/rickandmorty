import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import MenuModal, { MenuDrop } from "./menuModal";

export default function Table({ index, page, character }) {
  const [show, setShow] = useState(true);
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
  return (
    <tbody onClick={() => setShow(false)}>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-4 py-3">
          <div className="flex items-center">{numbers() + index + 1}</div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <p className="p-2.5 text-center w-10 bg-blue-500 rounded-full text-white hidden sm:block">
              {checkInitials(character?.name)}
            </p>
            <div>
              <h2 className="font-medium">{character?.name}</h2>
              {/* <p className="text-xs text-[#8094ae]"> 08080000</p> */}
            </div>
          </div>
        </th>
        <td class="px-3 py-4">
          <div>
            <h3
              className={`font-medium text-black w-max px-2 p-1 rounded-md ${
                character?.status === "Alive" ? "bg-green-400" : "bg-gray-400"
              } ${character?.status === "Dead" && "bg-red-400"}`}
            >
              {character?.status}
            </h3>
            {/* <p className="text-[#8094ae] text-xs">hhhhhh</p> */}
          </div>
        </td>
        <td class="px-3 py-4">{character?.species}</td>
        <td class="px-3 py-4 text-[#8094ae] text-[13px]">
          {character?.type || "Unknown"}
        </td>
        <td class="px-3 py-4">{character?.gender}</td>
        <td class="px-6 py-4 text-lg cursor-pointer">
          <div className="">
            <MenuDrop setShow={setShow} id={character?.id} />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
