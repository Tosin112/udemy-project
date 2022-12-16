import React from "react";
import logo from "../pictures/logo-udemy.svg";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className="px-5">
      <div className="flex items-center justify-between ">
        <div className="lg:hidden cursor-pointer p-2 rounded-full hover:bg-gray-100">
          <Bars3Icon className="w-7 justify-start lg:hidden" />
        </div>
        {/* left side */}
        <div className="flex items-center lg:space-x-3 mx-2 ">
          <img src={logo} alt="" className="h-20 w-20 cursor-pointer" />
          <h1 className="text-sm  hidden lg:inline-flex">Categories</h1>
        </div>
        {/* mid */}
        <div className="items-center space-x-5 flex-1 px-2 mx-2 hidden lg:inline-flex">
          <div className="flex items-center space-x-2 px-2 lg:px-5 py-2 bg-gray-100 border-black border flex-1 rounded-full">
            <MagnifyingGlassIcon className="w-7 text-gray-700" />
            <input
              className="flex-1 outline-none bg-gray-100"
              placeholder="search for anything"
              type="text"
            />
          </div>
        </div>
        {/* right side */}

        <div className="flex space-x-4 items-center mx-2">
          <h1 className="text-sm hidden lg:inline-flex">Udemy Business</h1>

          <h1 className="text-sm hidden lg:inline-flex">Teach on Udemy</h1>

          <div className="">
            <ShoppingCartIcon className="w-7 text-gray-700  cursor-pointer" />
          </div>
          <button className="hidden lg:inline-flex py-2 px-4 border border-gray-800 text-black hover:bg-gray-200 hover:transition hover:ease-in-out font-bold">
            Log in
          </button>
          <button className="hidden lg:inline-flex py-2 px-4 border border-gray-800 text-white bg-black/90 hover:bg-black hover:transition hover:ease-in-out font-bold">
            Sign Up
          </button>
          <div className="p-2 border border-gray-800 ">
            <GlobeAltIcon className="w-5 text-gray-700  cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
