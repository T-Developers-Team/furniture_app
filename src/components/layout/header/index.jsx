import React from "react";
import { FaSearch } from "react-icons/fa";

const HeaderComponent = () => {
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 py-4">
      <div className="flex max-w-6xl mx-auto items-center px-8">
        <figure className="text-orange-500 font-bold">Logo Naranja</figure>
        <div className="grow flex justify-end items-center">
          <nav className="px-4">
            <ul className="flex justify-between items-center mx-auto gap-4 font-semibold">
              <li className="cursor-pointer hover:text-orange-500">Home</li>
              <li className="cursor-pointer hover:text-orange-500">Office</li>
              <li className="cursor-pointer hover:text-orange-500">
                Case Studies
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Furniture of the Day
              </li>
              <li className="cursor-pointer hover:text-orange-500">About Us</li>
            </ul>
          </nav>
          <FaSearch className="cursor-pointer hover:text-orange-500" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
