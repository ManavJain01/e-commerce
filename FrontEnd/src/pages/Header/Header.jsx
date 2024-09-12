// Importing React Packages
import { useState, useEffect } from "react"

// Importing Hooks
import { useRefresh } from '../../hooks/useRefresh'

// Importing Local Files
  // Navbar
import MainNavbar from "./navbar/MainNavbar";
import CategoriesNavbar from './navbar/CategoriesNavbar';
  // login
import Login from '../Login/Login'

export default function Header() {
  // Custom Hooks
  const { refresh } = useRefresh();

  // useState
  const [openLoginPage, setOpenLoginPage] = useState(false);

  // useEffect
  useEffect(() => {
    if(openLoginPage) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";

    const runOnLoad = async () => {
      if(localStorage.getItem("authToken")){
        refresh();
      }

    }
    
    runOnLoad();
  }, [openLoginPage])

  return (
    <>
      {/* Login Page */}
      {openLoginPage && <Login loginPage={openLoginPage} setLoginPage={setOpenLoginPage} />}
      
      <div className="fixed z-[999999] bg-white w-full h-[104px] shadow-md shadow-gray-500">
        {/* Upper section */}
        <MainNavbar setOpenLoginPage={setOpenLoginPage} />

        {/* Categories Section */}
        <CategoriesNavbar />
      </div>
    </>
  )
}