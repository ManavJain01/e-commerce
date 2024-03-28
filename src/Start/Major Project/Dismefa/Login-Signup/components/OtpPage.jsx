import { CgSpinner } from "react-icons/cg";

import OtpInput from 'otp-input-react';
import { useState } from "react"
import styled from "styled-components"
import { RecaptchaVerifier } from "firebase/auth"

import { auth } from "../../Firebase/firebase.config"

function OtpPage({ storePhnNo, setGenerateOTP }){
  let timer30 = 30;

  const [loading, setLoading] = useState(false)
  const [otp, setOtp] = useState("")
  const [showOTP, setShowOTP] = useState(false);

  function timer30sec(){
    const span = document.getElementById("resendSpan");
    timer30 = 29;
    resendEnable();

    const interval = setInterval(()=>{
      if(timer30 > 1){
        span.innerHTML = " in " + timer30-- + " seconds";
      }else if(timer30 == 1){
        span.innerHTML = " in " + timer30-- + " second";
      }else if(timer30 < 1){
        clearInterval(interval)
        resendEnable();
        span.innerHTML = "";
      }
    },1000)
  }

  function resendEnable(){
    const button = document.getElementById("resendBtn");
    if(button.disabled == false){
      button.style.color = "gray";
      button.disabled = true;
    }else{
      button.style.color = "green";
      button.disabled = false;
    }
  }

  return(
    <section className="flex flex-col">
                <section className="mt-10">
                  <h1 className="font-semibold text-lg">Enter OTP</h1>
                  <span className="text-sm text-gray-400 font-semibold">
                    we have sent an OTP on +91 {storePhnNo+"hi"} <button 
                                                                    onClick={()=>setGenerateOTP(false)} className="underline text-gray-500 ml-1">Edit Number
                                                                 </button>
                  </span>
                  <div className="flex mt-5 mb-2 -mx-2">
                    <OtpInputStyles>
                      <OtpInput 
                        value={otp}
                        onChange={setOtp}
                        OTPLength={6}
                        otpType="number"
                        disabled={false}
                        autoFocus
                        className="flex justify-between gap-2">
                      </OtpInput>
                    </OtpInputStyles>
                  </div>
                    <button id="resendBtn" disabled={false} onClick={()=>timer30sec()} className="text-green-700 text-xs font-semibold">Resend OTP</button><span id="resendSpan" className="text-xs"> in 5 seconds</span>
                </section>

                <button className="bg-green-700 text-white flex gap-2 justify-center items-center mt-8 py-3 rounded-md hover:opacity-70 active:opacity-80">
                  { loading && <CgSpinner size={20} className="animate-spin" />}
                  <span>Continue</span>
                </button>
              </section>
  )
}

export default OtpPage;

const OtpInputStyles = styled.div`
  input{
    border-radius: 5px;
    background-color: lightgreen;
  }
`