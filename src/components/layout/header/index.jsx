import React from 'react'
import {FaSearch} from "react-icons/fa"


const HeaderComponent = () => {
  return (
    <header className="w-full bg-green-500 fixed top-0 left-0 right-0">
      <div className="flex justify-between max-w-6xl mx-auto">
        <figure>
          Logo Colorido
        </figure>
        <div className="flex">
          <nav>
            <ul className="flex justify-between items-center mx-auto">
              <li> a </li>
            </ul>
          </nav>
          <FaSearch />
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
