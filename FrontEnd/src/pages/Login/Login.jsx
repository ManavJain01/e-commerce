// Importing local Images
import close from './Images/close.png'

// Importing React Packages
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// Import Hooks
import { useLogin } from '../../hooks/useLogin'

// Importing Local files
import Signup from './Signup'

function Login({ loginPage, setLoginPage, setUserName }){
  // Custom Hooks
  const { login } = useLogin();

  // useRef
  const modalRef = useRef();

  // UseStates
  const [ph, setPh] = useState({phone: "", confirmation: ""});
  const [loading, setLoading] = useState(false)

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

  // Functions
    // Customer Logging/Signing In
  const getCustomer = async () => {
    try {
      // get Customer
      await login(ph.phone /*, location.address*/);
      
    } catch (error) {
      console.log("Customer Logging In Error: ", error);
    } finally {
      setUserName(prevUsername => {return {...prevUsername, name: data?.name, phone: ph.phone, isLoggedIn: true}});
      setLoginPage(!loginPage);
    }
  }

  return(
    <div className="absolute top-0 left-0 w-lvw h-lvh">
      <div ref={modalRef} className={`${loginPage ? "overflow-hidden" : "overflow-scroll"} z-50 w-[30rem] h-screen bg-green-500 flex flex-col items-end shadow-2xl shadow-black fixed right-0 top-0`}>
        {/* Button for closing this component */}
        <button onClick={()=>setLoginPage(!loginPage)} className="mx-5 my-3"><img src={close} /></button>

        {/* This component Headline */}
        <h1 className="text-white text-2xl font-semibold my-10 ml-8 mr-16">Login/Sign up to continue with your order</h1>
        {/* Render Signup/Otp Component */}
        <div className="flex-grow w-full bg-white rounded-t-md" >
          <div className="mx-8 flex flex-col h-full justify-between">
            
            <Signup ph={ph} setPh={setPh} />

            {/* This component -> footer */}
            <section className='mb-5'>
              <span className='text-gray-500 text-sm'>
                By continuing, you agree with our <Link to="Legal/Privacy-policy" className='text-gray-800 underline'><button className="hover:border-b hover:border-gray-600" onClick={()=>setLoginPage(!loginPage)}>Privacy Policy</button></Link> and <Link to="Legal/Terms&Conditions" className='text-gray-800 underline'><button onClick={()=>setLoginPage(!loginPage)} className="hover:border-b hover:border-gray-600">Terms and Conditions</button></Link>
              </span>
            </section>  
          </div>  
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