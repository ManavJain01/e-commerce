import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import close from '../Images/close.png'

function LoginSignup({setLoginPage}){
  const [validNumber, setValidNumber] = useState(false)
  const [generateOTP, setGenerateOTP] = useState(false)

  document.body.style.overflow = "hidden";
  let storePhnNo;
  let timer30 = 30;
  let OTPArray = [1,2,3,4]

  function closePage(){
    setLoginPage(false)
    document.body.style.overflow = "scroll";
  }

  function checkValidNumber(){
    const input = document.getElementById("validPhn");
    if(input.value == "" || String(input.value).length < 10){
      setValidNumber(true);
    }else{
      storePhnNo = input.value+"bye";
      setValidNumber(false);
      openGenerateOTP()
    }
  }

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

  return(
    <>
      <div className="z-50 w-[30rem] h-screen bg-green-500 flex flex-col items-end shadow-2xl shadow-black fixed right-0 top-0">
        <button onClick={()=>closePage()} className="mx-5 my-3"><img src={close} /></button>

        <span className="text-white text-2xl font-semibold my-10 ml-8 mr-16">Login/Sign up to continue with your order</span>

        <div className="flex-grow w-full bg-white rounded-t-md" >
          <div className="mx-8 flex flex-col h-full justify-between">
            {generateOTP ?
              <section className="flex flex-col">
                <section className="mt-10">
                  <h1 className="font-semibold text-lg">Enter OTP</h1>
                  <span className="text-sm text-gray-400 font-semibold">
                    we have sent an OTP on +91 {storePhnNo+"hi"} <button 
                                                                    onClick={()=>setGenerateOTP(false)} className="underline text-gray-500 ml-1">Edit Number
                                                                 </button>
                  </span>
                  <div className="flex mt-5 mb-2 -mx-2">
                    {OTPArray.map((e)=>(
                      <div key={e} className="size-14 mx-2 text-gray-500 flex items-center justify-center border-2 rounded-md">{e}</div>
                    ))}
                  </div>
                    <button id="resendBtn" disabled={false} onClick={()=>timer30sec()} className="text-green-700 text-xs font-semibold">Resend OTP</button><span id="resendSpan" className="text-xs"> in 5 seconds</span>
                </section>

                <button className="bg-green-700 text-white mt-8 py-3 rounded-md hover:opacity-70 active:opacity-80">Continue</button>
              </section>

              :<section className='mt-10 flex flex-col relative'>
                <span className='mb-5 font-semibold text-lg relative before:absolute before:content-["+91"] before:text-gray-400 before:top-14 before:left-1'>Enter your mobile number</span>
                <input type="number" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="validPhn" placeholder='Your Mobile Number' onChange={()=>setValidNumber(false)}
                      className="px-10 py-2 border-2 border-gray-400 rounded-md" /> 
                {validNumber ? <span 
                                className="absolute top-24 left-10 text-sm text-red-500">
                                  Enter valid mobile number
                                </span> : ""
                }
                <button onClick={()=>checkValidNumber()} className="bg-green-700 text-white rounded-md mt-10 py-3 hover:opacity-80 active:opacity-90">Send OTP</button>
              </section>
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