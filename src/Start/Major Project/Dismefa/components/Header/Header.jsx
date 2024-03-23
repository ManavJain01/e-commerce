import {useState} from 'react'

import InputBtn from '../InputBtn'
import SearchInput from './SearchInput'

import './header.css'

function Header(){
  const [navbar, setNavbar] = useState(false);

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
        <h1 className="font-bold text-xl text-red-700">Dismefa <span className="text-green-700">Medicose</span></h1>
        <p id="header-scrolledMsg">Buy Medicines</p>
        <InputBtn id="header-input" title="header-input" button="Search" placeholder="Search For medicines & wellness products..." />
        <div>
          <ul className="flex gap-5">
            <li><p>Login | Signup</p></li>
            <li><p>Cart</p></li>
          </ul>
        </div>
      </div>
      <SearchInput />
    </>
  )
}

export default Header