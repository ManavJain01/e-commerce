import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";


import cartLogo from '../../Images/cart.png'
import loginLogo from '../../Images/login.png'
import downArrowLogo from '../../Images/downArrow.png'

import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import InputBtn from '../InputBtn'
import UserNavbar from './UserNavbar'
import LoginSignup from '../../../Login-Signup/components/LoginSignup'
import ProductsNavbar from './ProductsNavbar'

import './header.css'

function Header(){
  const reduxItems = useSelector(state => state.cartItems)

  const [navbar, setNavbar] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  // const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("Manav Jain");
  const [itemsInCart, setItemsInCart] = useState(reduxItems.length);
  const [hamMenu, setHamMenu] = useState(false)

  useMemo(()=>{
    setItemsInCart(reduxItems.length)
  },[reduxItems])

  const changeNavbar = () => {
    const inputBtn = document.getElementById("header-input");
    const p = document.getElementById("header-scrolledMsg");
    if(window.scrollY >= 250){
      setNavbar(true);
      inputBtn.style.display = "flex";
      p.style.display = "none";
    }else{
      setNavbar(false);
      inputBtn.style.display = "none";
      p.style.display = "flex";
    }
  }

  window.addEventListener('scroll', changeNavbar)

  return(
    <>
      <div className={navbar ? 'header active' : 'header'}>
        <div className="bg-white w-screen h-[5rem] px-10 flex justify-between items-center">
          <Link to="/Home">
            <h1 className="font-bold text-xl text-red-700">Dismefa <span className="text-green-700">Medicos</span></h1>
          </Link>

          <div className='hidden sm:flex sm:flex-1 sm:justify-center'>
            <p id="header-scrolledMsg" className="text-green-700 hover:scale-150 transition-all duration-300 delay-200 animate-pulse">Buy Medicines {/*with 15% OFF*/}</p>

            <InputBtn
              id="header-input"
              title="header-input"
              button="Search"
              placeholder="Search For medicines & wellness products..." />
          </div>

          <ul className="hidden sm:flex gap-5 relative">
            {isLogin ?<li id="UserBtn" className="mr-4"><button className="flex gap-2 items-center">
              <img src={loginLogo} className="object-contain w-6" />
              <span>{userName? userName : "User"}</span>
              <img src={downArrowLogo} className="object-contain w-3" />
              </button>
            
              <div id="UserBtnDiv" className="hidden absolute right-10">
                <UserNavbar setIsLogin={setIsLogin} />
              </div>
            </li>
            :<li className="whitespace-nowrap"><button onClick={()=>setLoginPage(true)}>Login | Signup</button></li>
            }
            {loginPage ? <LoginSignup setLoginPage={setLoginPage} setIsLogin={setIsLogin} /> : ""}

            <li>
              <Link to="/Cart"
               className={`flex relative`}>
                <span className="absolute -top-1 left-4 text-[8px] text-center text-white bg-green-700 size-3 rounded-full">{itemsInCart}</span>
                <img src={cartLogo} className="object-contain w-5 mr-3" />
                Cart
              </Link>
            </li>

            <li className="relative"><ProductsNavbar /></li>
          </ul>

          <div className="flex sm:hidden relative">
            <GiHamburgerMenu onClick={()=>setHamMenu(true)} className="size-8 cursor-pointer" />
            {hamMenu && <div className="bg-white absolute -right-6 -top-6 w-72 h-screen py-5 flex flex-col justify-between rounded-l-md shadow-md shadow-gray-600">
              <RxCross2 onClick={()=>setHamMenu(false)} className="size-8 absolute right-5 cursor-pointer"/>

              <ul className=" flex flex-col gap-5 py-10">
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Medicines</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Personal Care</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Health Conditions</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Vitamins & Supplements</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Diabetes Care</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Healthcare Devices</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">Health Article</li>
              </ul>

              <ul className="flex flex-col gap-5">
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">My orders</li>
                <li className="px-5 py-2 hover:bg-gray-200 hover:text-green-700 active:bg-gray-300 active:text-green-800">My Account</li>
              </ul>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header