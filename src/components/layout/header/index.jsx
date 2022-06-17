import React from "react";
import { FaSearch } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 py-4 z-50">
      <div className="flex max-w-6xl mx-auto items-center px-8">
        <figure className="grow text-orange-500 font-bold">Logo Naranja</figure>
        <button className="inline-flex items-center text-sm rounded-lg md:hidden hover:text-gray-500">
          <TiThMenu className="w-6 h-6" />
        </button>
        <div className="hidden grow md:flex justify-end items-center">
          <nav className="px-4">
            <ul className="flex justify-between items-center mx-auto gap-4 font-semibold">
              <li className="cursor-pointer hover:text-orange-500">
                <Link to="/">Home</Link>
              </li>
              <li className="cursor-pointer hover:text-orange-500">Office</li>
              <li className="cursor-pointer hover:text-orange-500">
                Case Studies
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                Furniture of the Day
              </li>
              <li className="cursor-pointer hover:text-orange-500">
                <Link to="/about">About Us</Link>
              </li>
            </ul>
          </nav>
          <FaSearch className="cursor-pointer hover:text-orange-500" />
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
