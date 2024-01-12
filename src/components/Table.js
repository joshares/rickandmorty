import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";
import Link from "next/link";
import { RxDotFilled } from "react-icons/rx";
import MenuModal, { MenuDrop } from "./menuModal";

export default function Table() {
  const [show, setShow] = useState(true);

  const closeModal = () => {
    setShow(false);
  };

  const checkInitials = (names) => {
    const words = names;
    const wordList = words.split(" ");
    const firstLetters = wordList.map((word) => word[0]);
    const joinedWord = firstLetters.join("");
    return joinedWord;
  };
  return (
    <tbody onClick={() => setShow(false)}>
      <tr class="bg-white border-b hover:bg-gray-50">
        <td class="px-4 py-3">
          <div className="flex items-center">1</div>
        </td>
        <th
          scope="row"
          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
        >
          <div className="flex items-center gap-2">
            <p className="p-2.5 bg-blue-500 rounded-full text-white hidden sm:block">
              ME
            </p>
            <div>
              <h2 className="font-medium">joshua</h2>
              <p className="text-xs text-[#8094ae]"> 08080000</p>
            </div>
          </div>
        </th>
        <td class="px-4 py-4">
          <div>
            <h3 className="font-medium text-black">jjjjj</h3>
            <p className="text-[#8094ae] text-xs">hhhhhh</p>
          </div>
        </td>
        <td class="px-4 py-4">bbbb</td>
        <td class="px-4 py-4 text-[#8094ae] text-[13px]">hhhh</td>
        <td class="px-6 py-4">hhhhh</td>
        <td class="px-6 py-4 text-lg cursor-pointer">
          <div className="">
            <MenuDrop setShow={setShow} />
          </div>
        </td>
      </tr>
    </tbody>
  );
}
