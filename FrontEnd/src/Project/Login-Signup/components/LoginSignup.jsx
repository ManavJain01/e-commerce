// Importing Icons from local Directory
import close from '../Images/close.png'


import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

// Importing Local components
import Signup from './Signup'
import OtpPage from './OtpPage'

function LoginSignup({ setLoginPage }){
  document.body.style.overflow = "hidden";

  const [ph, setPh] = useState("")
  const [generateOTP, setGenerateOTP] = useState(false)
  const [confirmation, setConfirmation] = useState("")

  
  //Function to close this component and sub-components
  function closePage(){
    setLoginPage(false)
    document.body.style.overflow = "scroll";
  }

  // Sent to Otp Page
  const onOtpSubmit = (otp) => {
    console.log(otp)
    const verifyOtp = async() =>{
      try{
        console.log("confirmation -> ")
        console.log(confirmation)

        console.log("otp -> ")
        console.log(otp)
        
        confirmation.confirm(otp)
        console.log(confirmation.confirm(otp))
        alert('Login Successful')
      }catch(err){
        console.log(err)
      }
    }

    verifyOtp();
  }


  return(
  <div className="z-50 w-[30rem] h-screen bg-green-500 flex flex-col items-end shadow-2xl shadow-black fixed right-0 top-0">
      {/* Button for closing this component */}
      <button onClick={()=>closePage()} className="mx-5 my-3"><img src={close} /></button>

      {/* This component Headline */}
      <h1 className="text-white text-2xl font-semibold my-10 ml-8 mr-16">Login/Sign up to continue with your order</h1>

      {/* Render Signup/Otp Component */}
      <div className="flex-grow w-full bg-white rounded-t-md" >
        <div className="mx-8 flex flex-col h-full justify-between">
          {!generateOTP
            ?<Signup setPh={setPh} setGenerateOTP={setGenerateOTP} setConfirmation={setConfirmation} />
            :<OtpPage ph={ph} length={6} onOtpSubmit={onOtpSubmit} generateOTP={generateOTP} setGenerateOTP={setGenerateOTP} />               
          }

          {/* This component footer */}
          <section className='mb-5'>
            <span className='text-gray-500 text-sm'>
              By continuing, you agree with our <Link to="Legal/Privacy-policy" className='text-gray-800 underline'><button className="hover:border-b hover:border-gray-600" onClick={()=>closePage()}>Privacy Policy</button></Link> and <Link to="Legal/Terms&Conditions" className='text-gray-800 underline'><button onClick={()=>closePage()} className="hover:border-b hover:border-gray-600">Terms and Conditions</button></Link>
            </span>
          </section>  
        </div>  
      </div>
    </div>
  )
}

export default LoginSignup;