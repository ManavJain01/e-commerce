// Importing React Packages
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux';

// Importing Hooks
import { useRefresh } from '../../hooks/useRefresh'

// Importing Local Files
  // Navbar
import MainNavbar from "./navbar/MainNavbar";
import CategoriesNavbar from './navbar/CategoriesNavbar';
import HamMenu from './navbar/HamMenu'
  // login
import Login from '../Login/Login'
  // Components
import { handleResize } from "../../components/Screen Resize/ScreenResize";

export default function Header() {
  // Custom Hooks
  const { refresh } = useRefresh();
  

  // useSelector
  const openLoginPage = useSelector(state => state.state.openLoginPage);


  // useState
  const [hamMenu, setHamMenu] = useState(false);

  // useEffect
  useEffect(() => {
    const resizeHandler = () => handleResize(setHamMenu);

    // Add event listener
    window.addEventListener('resize', resizeHandler);

    // Call handleResize initially
    resizeHandler();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if(openLoginPage) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";

    const runOnLoad = async () => {
      if(localStorage.getItem("authToken")){
        refresh();
      }

    }
    
    runOnLoad();
  }, [openLoginPage]);

  return (
    <>
      {/* Login Page */}
      {openLoginPage && <Login loginPage={openLoginPage} />}
      
      {hamMenu
        ?<HamMenu />
        :<div className="fixed z-[999999] bg-white w-full h-[104px] shadow-md shadow-gray-500">
          {/* Upper section */}
          <MainNavbar />

          {/* Categories Section */}
          <CategoriesNavbar />
        </div>
      }
    </>
  )
}