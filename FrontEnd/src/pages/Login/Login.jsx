// Importing local Images
import close from './Images/close.png'

// Importing React Packages
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Importing Local files
import Signup from './Signup'

function Login({ loginPage, setLoginPage, setUserName }){
  // useRef
  const modalRef = useRef();

  // useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setLoginPage(false);
      }
    }

    if (loginPage) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [loginPage]);

  return(
    <div className="absolute top-0 left-0 w-lvw h-lvh">
      <div ref={modalRef} className={`${loginPage ? "overflow-hidden" : "overflow-scroll"} z-50 w-[30rem] h-screen bg-green-500 flex flex-col items-end shadow-2xl shadow-black fixed right-0 top-0`}>
        {/* Button for closing this component */}
        <button onClick={()=>setLoginPage(!loginPage)} className="mx-5 my-3"><img src={close} /></button>

        {/* This component Headline */}
        <h1 className="text-white text-2xl font-semibold my-10 ml-8 mr-16">Login/Sign up to continue with your order</h1>
        {/* Render Signup */}
        <div className="bg-white flex-grow flex flex-col justify-between h-full w-full px-8 rounded-t-md" >    
          <Signup />

          {/* This component -> footer */}
          <span className='text-gray-500 text-sm mb-5'>
            By continuing, you agree with our <Link to="Legal/Privacy-policy" className='text-gray-800 underline'><button className="hover:border-b hover:border-gray-600" onClick={()=>setLoginPage(!loginPage)}>Privacy Policy</button></Link> and <Link to="Legal/Terms&Conditions" className='text-gray-800 underline'><button onClick={()=>setLoginPage(!loginPage)} className="hover:border-b hover:border-gray-600">Terms and Conditions</button></Link>
          </span>  
        </div>
      </div>
    </div>
    )
}

export default Login;

/*
  user location
  // With User Permission
  // let location = "";
  // navigator.geolocation.getCurrentPosition(async pos=>{
    // const {latitude,longitude} = pos.coords;
    // const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    // location = await fetch(url).then(res=>res.json())
  // })

*/