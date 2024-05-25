"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="relative">
      <nav className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="flex max-w-[1100px] mx-auto justify-around items-center w-full h-28 px-4">
          <Link href="/">
            <Image
              src="/kppl-logo-1024x439.png"
              alt="Khyber Petroleum"
              width={200}
              height={85}
              className="cursor-pointer"
              title="Khyber Petroleum"
            />
          </Link>
          <div className="md:hidden">
            {/* <IoIosMenu
              className="text-slate-900 p-4 rounded text-black w-8"
              fill="black"
              strokeWidth={2}
            /> */}
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div className="hidden md:flex w-full justify-center">
            <ul className="flex flex-row gap-4 text-slate-700 items-center">
              <li className="relative group">
                <Link
                  href="/"
                  className="hover:bg-red-600 hover:text-white rounded-full py-1 px-3"
                >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="./management"
                  className="hover:bg-red-600 hover:text-white rounded-full py-1 px-3"
                >
                  Managemnet
                </Link>
              </li>
              <li className="relative group">
                <Link
                  onMouseEnter={() => toggleDropdown("about")}
                  // onMouseLeave={() => toggleDropdown(null)}
                  href="#"
                  className="rounded-full py-1 px-3 flex items-center gap-2"
                >
                  About
                  <MdKeyboardArrowDown className="text-slate-700 cursor-pointer" />
                </Link>
                {openDropdown === "about" && (
                  <ul
                    className="absolute left-0 mt-2 p-2 w-48 bg-white shadow-md rounded"
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <li className="hover:bg-red-600 hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="./our-company">Company Overview</Link>
                    </li>
                    <li className="hover:bg-red-600 hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="./our-journey">Our Journey</Link>
                    </li>
                    <li className="hover:bg-red-600 hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="./our-vision">Our Vision</Link>
                    </li>
                    <li className="hover:bg-red-600 hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="./our-mission">Our Mission</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <Link
                  href="#"
                  className="rounded-full py-1 px-3 flex gap-2 items-center"
                  onMouseEnter={() => toggleDropdown("storage")}
                >
                  Storage & Sites
                  <MdKeyboardArrowDown className="text-slate-700 cursor-pointer" />
                </Link>
                {openDropdown === "storage" && (
                  <ul
                    className="absolute left-0 mt-2 w-max p-2 py-4 bg-white shadow-md rounded"
                    onMouseLeave={() => toggleDropdown(null)}
                  >
                    <li className="hover:bg-red-600 hover:text-white rounded-full my-1 py-1 px-3">
                      <Link href="#">Province Wise Storage Capacity</Link>
                    </li>
                    <li className="hover:bg-red-600 hover:text-white rounded-full my-1 py-1 px-3">
                      <Link href="#">Allowed Number of Sites</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <Link
                  href="./hse"
                  className="hover:bg-red-600 hover:text-white rounded-full p-2"
                >
                  HSE
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="./investors-relations"
                  className="hover:bg-red-600 hover:text-white rounded-full p-2"
                >
                  Investor Relations
                </Link>
              </li>
              <li className="relative group">
                <Link
                  href="./contact-us"
                  className="hover:bg-red-600 hover:text-white rounded-full p-2"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
           <svg
            onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-32 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          <div className="absolute right-0 top-0 mt-28 bg-white h-full w-1/2 sm:w-1/3 z-50 p-4">
           

            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  Storage & Sites
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  HSE
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block hover:bg-red-600 hover:text-white rounded p-2"
                  onClick={toggleMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
