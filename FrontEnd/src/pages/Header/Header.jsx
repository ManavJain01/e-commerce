// Importing React-Icons
import { CiSearch } from "react-icons/ci";

// Importing React Packages
import { useState } from "react"
import { Link } from "react-router-dom";

// Importing Local Files
  // Navbar
import CategoriesNavbar from './navbar/CategoriesNavbar';
import UserNavbar from './navbar/UserNavbar';

export default function Header() {
  // useState
  const [isSearching, setIsSearching] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="fixed z-[999999] bg-white w-full p-9 shadow-md shadow-gray-500">
      {/* Upper section */}
      <div className="flex gap-5 justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl text-red-700">Dismefa <span className="text-green-700">Medicos</span></Link>
        
        {/* Search Input */}
        {isSearching
          ?<div></div>
          :<h1 className="text-xl text-green-600 animate-pulse">Buy Medicines</h1>
        }

        {/* Navbar */}
        <nav className="flex gap-8 items-center">
          <div className="relative group">
            <CiSearch className="size-6" />
            <span className="z-10 absolute -bottom-5 -left-2 hidden group-hover:block text-sm text-gray-600 backdrop-blur-lg">Search</span>
          </div>

          {isLoggedIn
            // User Navbar
            ?<div></div>

            // Login
            :<div>Login/Signup</div>
          }

          <div>Cart</div>
        </nav>
      </div>

      {/* Categories Section */}
      <CategoriesNavbar />
    </div>
  )
}