// Importing React-Icons
import { TiShoppingCart } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

// Importing React Packages
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

// Importing React Redux
import { setOpenLoginPage } from "../../../Redux/features/stateSlice";
import { useDispatch, useSelector } from 'react-redux';

// Importing Local Files
  // Navbar
import UserNavbar from './UserNavbar';
  // searchbar
import InputBtn from '../../../components/Buttons/InputBtn';

export default function MainNavbar() {
  // redux
  const cartItems = useSelector(state => state.cart.cartItems);
  const userStore = useSelector(state => state.user.user);
  
  // useDispatch
  const dispatch = useDispatch();
  
  // useState
  const [isSearching, setIsSearching] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // UseEffect
  useEffect(() => {    
    if(localStorage.getItem("authToken")){
      setIsLoggedIn(true);
    }else setIsLoggedIn(false);
  }, [userStore])

  return (
    <div className="relative flex gap-5 items-center justify-between h-full px-9 pb-7">
      {/* Logo */}
      <Link to="/" className="font-bold text-2xl text-red-700 whitespace-nowrap">Dismefa <span className="text-green-700">Medicos</span></Link>
      
      {/* Search Input */}
      {isSearching
        ?<div className="group relative w-full px-4">
          <InputBtn id="enable" title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
          <button onClick={() => setIsSearching(!isSearching)} className="absolute -right-1 top-0 hidden group-hover:block"><RxCross1 className="size-4" /></button>
        </div>
        :<h1 className="text-xl text-green-600 animate-pulse">Buy Medicines</h1>
      }

      {/* Navbar */}
      <nav className="relative flex gap-8 items-center">
        {!isSearching && <button onClick={() => setIsSearching(!isSearching)} className="relative group">
          <div>
            <CiSearch className="size-6" />
            <span className="z-10 absolute -bottom-5 -left-2 hidden group-hover:block text-sm text-gray-600 backdrop-blur-lg">Search</span>
          </div>
        </button>}

        {!isSearching && <div className="flex items-center gap-5">
          <Link to="lab-tests">Lab Tests</Link>  
          <Link to="consult-doctors">Consult Doctors</Link>  
        </div>}

        {isLoggedIn
          // User Navbar
          ?<UserNavbar />

          // Login
          :<button onClick={() => dispatch(setOpenLoginPage(true))}>Login/Signup</button>
        }

        <Link to="/cart" className="relative flex gap-2 items-center">
          <TiShoppingCart />
          <span className="absolute -top-1 left-3 text-[8px] text-center text-white bg-green-700 size-3 rounded-full">{cartItems.length}</span>
          <span>Cart</span>
        </Link>
      </nav>
    </div>
  )
}