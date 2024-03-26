import {useState} from 'react'
import { Link } from 'react-router-dom'

import InputBtn from '../InputBtn'
import SearchInput from './SearchInput'

import LoginSignup from '../../../Login-Signup/components/LoginSignup'

import './header.css'

function Header(){
  const [navbar, setNavbar] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

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
        <Link to="/Home">
          <h1 className="font-bold text-xl text-red-700">Dismefa <span className="text-green-700">Medicose</span></h1>
        </Link>

        <p id="header-scrolledMsg">Buy Medicines</p>

        <InputBtn id="header-input" title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
        
        <div>
          <ul className="flex gap-5">
            <li><button onClick={()=>setIsLogin(true)}>Login | Signup</button></li>
            {isLogin ? <LoginSignup setIsLogin={setIsLogin} /> : ""}

            <li><Link to="/Cart">Cart</Link></li>
          </ul>
        </div>
      </div>
      <SearchInput />
    </>
  )
}

export default Header