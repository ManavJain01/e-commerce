import { useState, useRef, useEffect } from "react"
import styled from "styled-components"

function OtpPage({ ph, length, generateOTP, setGenerateOTP, onOtpSubmit = () => {} }){
  const [otp, setOtp] = useState(new Array(length).fill(""));
  
  let timer30 = 30;
  
  useEffect(()=>{
    timer30sec();
  },[generateOTP])

  function openGenerateOTP(){
    setGenerateOTP(true)
    timer30sec();
  }

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

//----------------------------------------------------------------------------------------------------------------
  const inputRefs = useRef([])

  useEffect(() => {
    if(inputRefs.current[0]){
      inputRefs.current[0].focus();
    }

  },[])

  const otpOnChange = (index, e) => {
    const value = e.target.value;
    if(isNaN(value)) return
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1)
    setOtp(newOtp)

    // submit trigger
    const combinedOtp = newOtp.join("")
    if(combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if(value && index < length-1 && inputRefs.current[index+1]){
      inputRefs.current[index + 1].focus()
    }

    //optional
    if(index > 0 && !otp[index - 1]){
      inputRefs.current[otp.indexOf("")].focus();
    } 
  }

  const otpOnClick = (index) => {
    inputRefs.current[index].setSelectionRange(1,1);
  }

  const otpOnKeyDown = (index, e) => {
    if(e.key==="Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]){
      // Move focus to the previous input field on backspace
      inputRefs.current[index - 1].focus()
    }
  }

  return(
    <div className="flex flex-col">
      <section className="mt-10">
        <h1 className="font-semibold text-lg">Enter OTP</h1>
        <span className="text-sm text-gray-400 font-semibold">
          we have sent an OTP on +91 {ph}
          <button
            onClick={()=>setGenerateOTP(false)} className="underline text-gray-500 ml-1">Edit Number
          </button>
        </span>
        <div className="flex mt-5 mb-2 -mx-2">

        </div>
          <button id="resendBtn" disabled={false} onClick={()=>timer30sec()} className="text-green-700 text-xs font-semibold">Resend OTP</button><span id="resendSpan" className="text-xs"> in 30 seconds</span>
      </section>


      <div>
        {otp.map((value, index) => {
          return <input
            key={index}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => otpOnChange(index, e)}
            onClick={() => otpOnClick(index)}
            onKeyDown={() => otpOnKeyDown(index, e)}
            id='otpInput'
            className='text-center text-black border border-black w-8 py-1 mx-2 my-5 rounded-full' />
        })} 
      </div>
    </div>
  )
}

export default OtpPage;