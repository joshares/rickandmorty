"use client";
import { Menu } from "@headlessui/react";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineEye } from "react-icons/hi";

export function MenuDrop({ setShow, id }) {
  return (
    <main className="relative w-full">
      <Menu>
        <Menu.Button>
          <BsThreeDots
            className="hidden sm:block"
            onClick={() => setShow(true)}
          />
          <p
            className="w-max font-bold sm:hidden"
            onClick={() => setShow(true)}
          >
            view more
          </p>
        </Menu.Button>
        <Menu.Items>
          <Menu.Item>
            <div className="absolute bottom-6 right-0 z-10 py-2 shadow-lg grid bg-white rounded-md text-md font-medium whitespace-nowrap">
              <Link
                href={`/character/${id}`}
                className="flex items-center gap-2 pl-6 pr-8 py-2.5 cursor-pointer text-[#526484] hover:bg-[#f5f6fa] hover:text-[#0971fe]"
              >
                <HiOutlineEye className="text-lg" />
                <p className="text-[0.75rem]">View Details</p>
              </Link>
            </div>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </main>
  );
}
