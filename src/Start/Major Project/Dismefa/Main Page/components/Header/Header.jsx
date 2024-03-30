import {useState} from 'react'
import { Link } from 'react-router-dom'

import cartLogo from '../../Images/cart.png'
import loginLogo from '../../Images/login.png'
import downArrowLogo from '../../Images/downArrow.png'

import InputBtn from '../InputBtn'
import SearchInput from './SearchInput'
import UserNavbar from './UserNavbar'

import LoginSignup from '../../../Login-Signup/components/LoginSignup'

import ProductsNavbar from './ProductsNavbar'

import './header.css'

function Header(){
  const [navbar, setNavbar] = useState(false);
  const [loginPage, setLoginPage] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState("Manav Jain");

  const [itemsInCart, setItemsInCart] = useState('2');

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

          <p id="header-scrolledMsg" className="text-green-700 hover:scale-150 transition-all duration-300 delay-200 animate-pulse">Buy Medicines {/*with 15% OFF*/}</p>

          <InputBtn id="header-input" title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
          
          <div>
            <ul className="flex gap-5 relative">
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
                <Link to="/Cart" className={`flex relative before:absolute before:content-['${itemsInCart}'] before:w-[13px] before:text-center before:z-20 before:-top-1 before:left-4
                before:bg-green-700 before:text-white before:rounded-full before:text-[10px]`}>
                  <img src={cartLogo} className="object-contain w-5 mr-3" />
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <ProductsNavbar />
      </div>
      <SearchInput />
    </>
  )
}

export default Header