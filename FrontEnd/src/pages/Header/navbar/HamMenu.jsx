// Importing React-Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { RxCrossCircled } from "react-icons/rx";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdHomeFilled } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { TbCoinRupee } from "react-icons/tb";
import { HiOutlineBookmark } from "react-icons/hi";
import { TfiArrowCircleRight } from "react-icons/tfi";

// Importing React Packages
import { useState, useEffect } from "react"
import { Link, NavLink } from "react-router-dom";

// Importing React Redux
import { useSelector } from 'react-redux'

// Importing Hooks
import { useServices } from '../../../hooks/useServices'

export default function HamMenu() {
  // redux
  const cartItems = useSelector(state => state.cart.cartItems);

  // Custom Hooks
  const { getNavOptions, loading } = useServices();

  // useState
  const [showNavbar, setShowNavbar] = useState(false);
  const [navOptions, setNavOptions] = useState([]);

  // UseEffect
  useEffect(() => {
    const runOnLoad = async () => {
      // Custom Hooks Functions Call
      setNavOptions(await getNavOptions());
    }
    
    runOnLoad();
  }, [])

  // Navbar
  if(showNavbar) return(
    <div className="z-[9999999] fixed bg-white h-lvh w-lvw flex flex-col gap-5">
      {/* Header */}
      <section className="flex gap-5 justify-between px-5 py-3">
        <h1 className="tracking-widest font-bold text-xl">Menu</h1>
        <button onClick={() => setShowNavbar(!showNavbar)}><RxCrossCircled className="size-8" /></button>
      </section>

      {/* Body */}
      <div className="flex flex-col gap-2 h-full">
        {/* Facilities */}
        <div>
          <Link to="/consult-doctors" className="flex gap-5 items-center justify-between pl-5 pr-2 py-2">
            <span className="font-semibold">Consult A Doctor</span>
            <MdOutlineKeyboardArrowRight className="size-7" />
          </Link>
          <Link to="/lab-tests" className="flex gap-5 items-center justify-between pl-5 pr-2 py-2">
            <span className="font-semibold">Book Lab Tests</span>
            <MdOutlineKeyboardArrowRight className="size-7" />
          </Link>
        </div>
        <hr className="border-2 border-gray-200" />

        {/* Categories */}
        <div className="flex flex-col">
          {Array.isArray(navOptions) && navOptions?.map((e, i) => {
            return e?.path && e.path
              ?<Link key={i} to={e?.path} className="flex gap-5 items-center justify-between pl-5 pr-2 py-2">
                <span className="font-semibold">{e?.item}</span>
                <MdOutlineKeyboardArrowRight className="size-7" />
              </Link>
              :<Link key={i} to={`Categories/${e?.item}`} state={{value: e?.item}} className="flex gap-5 items-center justify-between pl-5 pr-2 py-2">
                <span className="font-semibold">{e?.item}</span>
                <MdOutlineKeyboardArrowRight className="size-7" />
              </Link>
          })}
        </div>

        {/* Other Options */}
        <div className="bg-gray-200 flex flex-col h-full">
          <Link to="/User/myorders" className="bg-gray-200 flex gap-5 items-center justify-between pl-5 pr-2 py-2">
            <span className="font-semibold">My orders</span>
            <MdOutlineKeyboardArrowRight className="size-7" />
          </Link>

          <Link to="/User/Profile" className="bg-gray-200 flex gap-5 items-center justify-between pl-5 pr-2 py-2">
            <span className="font-semibold">Account</span>
            <MdOutlineKeyboardArrowRight className="size-7" />
          </Link>
        </div>
      </div>
    </div>
  )
  // Header
  else return (
    <>
      <div className="flex flex-col gap-3 px-5 py-3">
        {/* Header */}
        <div className="flex gap-5 items-center justify-between">
          {/* Logo and Navbar */}
          <div className="flex gap-5 items-center">
            <button onClick={() => setShowNavbar(!showNavbar)}><RxHamburgerMenu className="size-8" /></button>
            <Link to="/" className="font-bold text-2xl text-red-700 whitespace-nowrap">Dismefa <span className="text-green-700">Medicos</span></Link>
          </div>

          {/* cart */}
          <Link to="/cart"><IoCartOutline className="size-8" /></Link>
        </div>

        {/* Search and location */}
        <div className="flex flex-col gap-2">
          <p className="tracking-wider font-bold">Deliver to</p>
          <input type="text" placeholder="Search of medicine" className="w-full py-2 px-5 rounded-lg border border-gray-600 outline-none" />
        </div>
      </div>

      {/* Footer */}
      <div className="z-[9999999] fixed bottom-0 w-lvw">
        {/* Cart div */}
        {cartItems.length > 0 && <NavLink to="/cart" className="aria-[current=page]:hidden text-sm text-white bg-blue-800 flex gap-5 items-center justify-between min-w-72 mx-3 my-2 p-1 pr-3 rounded-md">
          <div className="flex gap-2">
            <div className="bg-blue-500 p-2 rounded-lg"><IoCartOutline className="size-8" /></div>
            <div>
              <p>{cartItems.length} item</p>
              <p className="tracking-wider font-bold">price</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="font-bold">View Cart</p>
            <TfiArrowCircleRight className="bg-white text-blue-800 size-5 rounded-full" />
          </div>
        </NavLink>}

        {/* Navbar */}
        <div className="bg-white flex justify-between h-20">
          <NavLink to="/" className="aria-[current=page]:text-blue-700 flex flex-col items-center p-3 aria-[current=page]:border-t-2 aria-[current=page]:border-blue-700">
            <MdHomeFilled className="size-8" />
            <span className="whitespace-nowrap">Home</span>
          </NavLink>

          <NavLink to="/User/Refer&Earn" className="aria-[current=page]:text-blue-700 flex flex-col items-center p-3 aria-[current=page]:border-t-2 aria-[current=page]:border-blue-700">
            <TbCoinRupee className="size-8" />
            <span className="whitespace-nowrap">Refer & Earn</span>
          </NavLink>

          <NavLink to="/User/myOrders" className="aria-[current=page]:text-blue-700 flex flex-col items-center p-3 aria-[current=page]:border-t-2 aria-[current=page]:border-blue-700">
            <HiOutlineBookmark className="size-8" />
            <span className="whitespace-nowrap">Orders</span>
          </NavLink>

          <NavLink to="/User/profile" className="aria-[current=page]:text-blue-700 flex flex-col items-center p-3 aria-[current=page]:border-t-2 aria-[current=page]:border-blue-700">
            <FiUser className="size-8" />
            <span className="whitespace-nowrap">Account</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}