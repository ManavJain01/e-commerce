import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PhoneInput } from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

import { BsFillShieldLockFill, BsTelephoneFill } from 'react-icons/bs'
import { CgSpinner } from "react-icons/cg";
import { toast } from 'react-hot-toast'

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"

import { auth } from "../../Firebase/firebase.config"

import close from '../Images/close.png'

import OtpPage from './OtpPage'

function LoginSignup({setLoginPage}){
  // Done
  const [validNumber, setValidNumber] = useState(false)
  // Done
  const [generateOTP, setGenerateOTP] = useState(false)
  // Done
  const [ph, setPh] = useState("")
  // Not Needed
  const [storePhnNo, setStorePhnNo] = useState("");
  // Done
  const [loading, setLoading] = useState(false)

  // Done
  document.body.style.overflow = "hidden";

  // Done
  function closePage(){
    setLoginPage(false)
    document.body.style.overflow = "scroll";
  }

  
  // Done
  function openGenerateOTP(){
    setGenerateOTP(true)
    // timer30sec();
  }

  // function onCaptchVerify(){
  //   if(!window.recaptchaVerifier){
  //     window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
  //       'size': 'invisible',
  //       'callback': (response) => {
  //         onSignup();
  //       },
  //       'expired-callback': () => {
          
  //       }
  //     }, auth);
  //   }
  // }

  // function onSignup(){
  //   setLoading(true)
  //   onCaptchVerify()
  //   // appVerificationDisabledForTesting: false,
  //   const appVerifier = window.recaptchaVerifier

  //   const formatPh = '+' + ph
  //   signInWithPhoneNumber(auth, formatPh, appVerifier)
  //   .then((confirmationResult) => {
  //     window.confirmationResult = confirmationResult;
  //     setLoading(false)
  //     toast.success('OTP sended successfully!')
  //     alert("done")
  //   }).catch((error) => {
  //     console.log(error)
  //     setLoading(false)
  //   });
  // }
  

  return(
    <>
      <div className="z-50 w-[30rem] h-screen bg-green-500 flex flex-col items-end shadow-2xl shadow-black fixed right-0 top-0">
        <button onClick={()=>closePage()} className="mx-5 my-3"><img src={close} /></button>

        <span className="text-white text-2xl font-semibold my-10 ml-8 mr-16">Login/Sign up to continue with your order</span>

        <div className="flex-grow w-full bg-white rounded-t-md" >
          <div className="mx-8 flex flex-col h-full justify-between">
            {generateOTP ?
              <OtpPage storePhnNo={storePhnNo} setGenerateOTP={setGenerateOTP} />           
              
              :<section className='mt-10 flex flex-col relative'>
                <span className='mb-5 font-semibold text-lg flex gap-5 items-center relative before:absolute before:content-["+91"] before:text-gray-400 before:top-14 before:left-1'><BsFillShieldLockFill />Enter your mobile number</span>
                <input required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="validPhn" placeholder='Your Mobile Number' onChange={(e)=>setPh(e.target.value)}
                      className="px-10 py-2 border-2 border-gray-400 rounded-md" /> 
                {validNumber ?<span className="absolute top-24 left-10 text-sm text-red-500">
                                Enter valid mobile number
                              </span> : ""
                }
                <button onClick={sendOtp} className="bg-green-700 text-white flex justify-center items-center gap-5 rounded-md mt-10 py-3 hover:opacity-80 active:opacity-90">
                  { loading && <CgSpinner size={20} className="animate-spin" />}
                  Send OTP
                </button>
                <div id="recaptcha"></div>
              </section>
              // <PhoneInput country={"in"} value={ph} onChange={setPh} ></PhoneInput>
              
            }

            <section className='mb-5'>
              <span className='text-gray-500 text-sm'>
                By continuing, you agree with our <Link to="Legal/Privacy-policy" className='text-gray-800 underline'><button onClick={()=>closePage()}>Privacy Policy</button></Link> and <Link to="Legal/Terms&Conditions" className='text-gray-800 underline'><button onClick={()=>closePage()}>Terms and Conditions</button></Link>
              </span>
            </section>  
          </div>  
        </div>
      </div>
    </>
  )
}

export default LoginSignup;