import { useState, useEffect } from "react";

function OtpDetails({ ph, generateOTP, setGenerateOTP }){
  let timer30 = 30;

  useEffect(()=>{
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
    return () => {clearInterval(interval)}
  },[generateOTP])

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
    <div className="mt-10 flex flex-col gap-3">
      <h1 className="font-semibold text-lg">Enter OTP</h1>
      <span className="text-sm text-gray-400 font-semibold">
        we have sent an OTP on {ph}
        <button
          onClick={()=>setGenerateOTP(false)} className="underline text-gray-500 ml-1">Edit Number
        </button>
      </span>

      <div className="flex gap-1">
        <button
          id="resendBtn"
          onClick={()=>timer30sec()}
          className="text-green-700 text-xs font-semibold">
            Resend OTP
          </button>
        <span id="resendSpan" className="text-xs"> in 30 seconds</span>
      </div>
    </div>
  )
}

export default OtpDetails;