// Importing local Images
import close from './Images/close.png'

// Importing React Packages
import { useState } from 'react'
import { Link } from 'react-router-dom'

// Import Hooks
import { useLogin } from '../../hooks/useLogin'

// Importing Local files
import LoadingScreen from '../../components/loading/LoadingScreen'
import Signup from './Signup'
import OtpPage from './OtpPage'

function Login({ loginPage, setLoginPage, setUserName }){
  const { login } = useLogin();

  // UseStates
  const [ph, setPh] = useState({phone: "", confirmation: ""})
  const [generateOtpPage, setGenerateOtpPage] = useState(false)
  const [loading, setLoading] = useState(false)


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

    // When Submitting Otp
  const onOtpSubmit = async (otp) => {
    try{ 
      console.log("onOtpSubmit");  
      await ph.confirmation.confirm(otp)
      getCustomer();
    }catch(err){
      switch (err.code) {
        case 'auth/invalid-verification-code':
          
          break;
      
        default:
          console.log("Error when LogIn not successfull!!!", err)
          alert("Error While Loggin, Try Again!!!");
          setGenerateOtpPage(false);
          break;
      }
    }
  }

    // Practice Function
  const tempLogin = async () => {
    try {
      const ph = '+91 8269-543-305';

      // get Customer
      await login(ph);

    } catch (error) {
      console.log("Customer Logging In Error: ", error);
    } finally {
      setLoginPage(false);
      setUserName(prevUsername => {return {...prevUsername, name: "", phone: ph, isLoggedIn: true}});
    }
  }

  if (loading)
    return(
      <LoadingScreen />
    )
  else
    return(
    <div className={`${loginPage ? "overflow-hidden" : "overflow-scroll"} z-50 w-[30rem] h-screen bg-green-500 flex flex-col items-end shadow-2xl shadow-black fixed right-0 top-0`}>
        {/* Button for closing this component */}
        <button onClick={()=>setLoginPage(!loginPage)} className="mx-5 my-3"><img src={close} /></button>

        {/* This component Headline */}
        <h1 className="text-white text-2xl font-semibold my-10 ml-8 mr-16">Login/Sign up to continue with your order</h1>
        {/* Render Signup/Otp Component */}
        <div className="flex-grow w-full bg-white rounded-t-md" >
          <div className="mx-8 flex flex-col h-full justify-between">
            {!generateOtpPage
              ?<Signup ph={ph} setPh={setPh} setGenerateOtpPage={setGenerateOtpPage} setLoginPage={setLoginPage} tempLogin={tempLogin} />
              :<OtpPage ph={ph} setPh={setPh} length={6} onOtpSubmit={onOtpSubmit} generateOtpPage={generateOtpPage} setGenerateOtpPage={setGenerateOtpPage} />               
            }

            {/* This component footer */}
            <section className='mb-5'>
              <span className='text-gray-500 text-sm'>
                By continuing, you agree with our <Link to="Legal/Privacy-policy" className='text-gray-800 underline'><button className="hover:border-b hover:border-gray-600" onClick={()=>setLoginPage(!loginPage)}>Privacy Policy</button></Link> and <Link to="Legal/Terms&Conditions" className='text-gray-800 underline'><button onClick={()=>setLoginPage(!loginPage)} className="hover:border-b hover:border-gray-600">Terms and Conditions</button></Link>
              </span>
            </section>  
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