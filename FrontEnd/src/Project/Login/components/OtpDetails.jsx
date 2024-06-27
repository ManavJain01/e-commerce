// Importing React Packages
import { useEffect } from "react";

// Importing Firebase configuration
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth"
import { auth } from "../../Firebase/firebase.config"

function OtpDetails({ ph, setPh, setOtp, length, setGenerateOtpPage }){
  // Variables
  let timerCount = 29

  // Functions
  const Timer = (timer) => {
    const button = document.getElementById("resendBtn");
    button.disabled = true;

    const span = document.getElementById("resendSpan");

    const interval = setInterval(()=>{
      if(timer > 1){
        span.innerHTML = " in " + timer-- + " seconds";
      }else if(timer == 1){
        span.innerHTML = " in " + timer-- + " second";
      }else if(timer < 1){
        clearInterval(interval)
        button.disabled = false;
        span.innerHTML = "";
      }
    },1000)
  }

  const resendOTP = async () => {
    try {
      setOtp(new Array(length).fill(""))

      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
      const confirm = await signInWithPhoneNumber(auth, ph.phone, recaptcha);
      await setPh(prevPh => {return{...prevPh, confirmation: confirm}})
    } catch (error) {
      console.log("Error While resending Otp: ", error);
    }
    Timer(timerCount);
  }

  // UseEffect
  useEffect(()=>{
    Timer(timerCount);
  },[])

  return(
    <div className="mt-10 flex flex-col gap-3">
      <h1 className="font-semibold text-lg">Enter OTP</h1>
      <span className="text-sm text-gray-400 font-semibold">
        we have sent an OTP on {ph.phone}
        <button
          onClick={()=>setGenerateOtpPage(false)} className="underline text-gray-500 ml-1">Edit Number
        </button>
      </span>

      <div className="flex gap-1">
        <button
          id="resendBtn"
          onClick={()=>resendOTP()}
          className="text-xs font-semibold text-green-700 disabled:text-gray-500">
            Resend OTP
          </button>
        <span id="resendSpan" className="text-xs"> in 30 seconds</span>
      </div>
    </div>
  )
}

export default OtpDetails;