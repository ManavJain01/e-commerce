// Importing React-Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

// Importing Local Images
import cartLogo from './Images/cart.png'
import loginLogo from './Images/login.png'
import downArrowLogo from './Images/downArrow.png'

// Importing React Packages
import { useState, useMemo, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Importing React Redux
import { useSelector, useDispatch } from 'react-redux'
import { setOpenLoginPage } from "../../Redux/features/stateSlice";

// Importing Hooks
import { useServices } from '../../hooks/useServices'
import { useRefresh } from '../../hooks/useRefresh'

// Importing Local Files
import InputBtn from '../Buttons/InputBtn'
import UserNavbar from './sections/UserNavbar'
import Login from '../../pages/Login/Login'
import ProductsNavbar from './sections/ProductsNavbar'

import './header.css'

function Header(){
  // Custom Hooks
  const { getNavOptions, loading } = useServices();
  const { refresh } = useRefresh();

  // useDispatch
  const dispatch = useDispatch();

  // redux
  const cartItems = useSelector(state => state.cart.cartItems)
  const stateItems = useSelector(state => state.state.stateItems)
  const openLoginPage = useSelector(state => state.state.openLoginPage)
  // const customer = useSelector(state => state.user.user)

  // UseStates
  const [navbar, setNavbar] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [userName, setUserName] = useState({name: "", phone: "", isLoggedIn: false});
  const [itemsInCart, setItemsInCart] = useState(cartItems.length);
  const [navOptions, setNavOptions] = useState([]);

  // UseMemo
  useMemo(()=>{
    setItemsInCart(cartItems.length)
  },[cartItems])

  // UseEffect
  useEffect(() => {
    const runOnLoad = async () => {
      if(localStorage.getItem("authToken")){
        refresh(userName);
        setUserName(prevUsername => {return {...prevUsername, isLoggedIn: true}})
      }

      // Custom Hooks Functions Call
      setNavOptions(await getNavOptions());
    }
    
    runOnLoad();
  }, [])
  
  useEffect(() => {
    const tempUser = stateItems.filter(item => item?.stateName == 'userName')
    
    if(tempUser[0]?.message == "logging out"){
      setUserName(prevUsername => {return {...prevUsername, name: "", phone: "", isLoggedIn: false}})
    }
  }, [stateItems])
  
  useEffect(() => {
    if(openLoginPage) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [openLoginPage])
  
  useEffect(() => {
    if (!loading) {
      window.addEventListener('scroll', changeNavbar);
    }

    return () => {
      window.removeEventListener('scroll', changeNavbar);
    };
  }, [loading]);

  // Functions
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

  return(
    <>
      {/* <div className={`${navbar ? 'header active' : 'header'} z-[99999]`}> */}
      <div className={`fixed z-[99999]`}>
        {/* Login Page */}
        <div className="relative z-[9999999]">
          {openLoginPage
            ? <Login loginPage={openLoginPage} setUserName={setUserName} />
            : ""
          }
        </div>

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
            {userName.isLoggedIn
              ? <li id="UserBtn" className="mr-4">
                  <button className="flex gap-2 items-center">
                    <img src={loginLogo} className="object-contain w-6" />
                    <span>{userName.name ? userName.name : "User"}</span>
                    <img src={downArrowLogo} className="object-contain w-3" />
                  </button>
                
                  <div id="UserBtnDiv" className="hidden absolute right-10">
                    <UserNavbar userName={userName} setUserName={setUserName} />
                  </div>
                </li>
              : <li className="whitespace-nowrap">
                  <button onClick={()=>dispatch(setOpenLoginPage(true))}>Login | Signup</button>
                </li>
            }

            <li>
              <Link to="/Cart"
               className={`flex relative`}>
                <span className="absolute -top-1 left-4 text-[8px] text-center text-white bg-green-700 size-3 rounded-full">{itemsInCart}</span>
                <img src={cartLogo} className="object-contain w-5 mr-3" />
                Cart
              </Link>
            </li>
            
            <li className="relative">
              {loading
                ?<span className="absolute top-12 -right-10 bg-white w-lvw">
                  <AiOutlineLoading3Quarters className="size-5 mx-auto animate-spin" />
                </span>
                :<ProductsNavbar navOptions={navOptions} />
              }
            </li>
          </ul>

          <div className="flex sm:hidden relative">
            <GiHamburgerMenu onClick={()=>setNavbar(!navbar)} className="size-8 cursor-pointer" />
            {navbar
              &&<div className="bg-white absolute -right-6 -top-6 w-72 h-screen py-5 flex flex-col justify-between rounded-l-md shadow-md shadow-gray-600">
                  <RxCross2 onClick={()=>setNavbar(!navbar)} className="size-8 absolute right-5 cursor-pointer"/>

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
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Header