// Importing Icons from react-icons
import { CgSpinner } from "react-icons/cg";
import { BsFillShieldLockFill } from 'react-icons/bs'

import { useState } from 'react'

// Importing Firebase configuration
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
// import { auth } from "../../Firebase/firebase.config"

function Signup({ ph, setPh }){
  const [notValid, setNotValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState(null)

  function checkValidNumber(){
    const input = document.getElementById("validPhn");
    if(input.value == "" || String(input.value).length < 10){
      setNotValid(true);
    }else{
      setPh(input.value)
      setNotValid(false);
      console.log(ph + "hia")
      sendOtp();

      // onSignup()
      // openGenerateOTP()
    }
  }
  
  function PhFormatOnChange(e){
    // if(e.target.value[0] == 0 && (e.target.value.length == 5 || e.target.value.length == 9)){
    //   e.target.value += ' '
    // }else if(e.target.value[0] != 0 && (e.target.value.length == 4 || e.target.value.length == 8)){
    //   e.target.value += ' '
    // }
  }

  const sendOtp = async() => {
    try{
      setLoading(true)
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
      const confirmation = signInWithPhoneNumber(auth, ph, recaptcha)
      setUser(confirmation)
    }catch(err){
      console.log(err)
    }
  }


  return(
    <div className='mt-10 flex flex-col relative'>
      <h1 className='mb-5 font-semibold text-lg flex gap-5 items-center relative before:absolute before:content-["+91"] before:text-gray-400 before:top-14 before:left-1'><BsFillShieldLockFill />Enter your mobile number</h1>
      <input
        // required
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        id="validPhn"
        type="text"
        placeholder='Your Mobile Number'
        // onChange={() => setNotValid(false)}
        onChange={(e) => PhFormatOnChange(e)}
        className="px-10 py-2 border-2 border-gray-400 rounded-md"
      /> 
      {notValid ?<span className="absolute top-24 left-10 text-sm text-red-500">
          Enter valid mobile number
        </span>
        : ""
      }
      <button onClick={() => checkValidNumber()} className="bg-green-700 text-white flex justify-center items-center gap-5 rounded-md mt-10 py-3 hover:opacity-80 active:opacity-90">
        { loading && <CgSpinner size={20} className="animate-spin" />}
        Send OTP
      </button>

      {/* Here Firebase CheckBot Comes */}
      <div id="recaptcha" className="mt-5 m-auto" />
    </div>
  )
}

export default Signup;