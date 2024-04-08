import { useState } from "react"

import OtpInput from './OtpInput'
import OtpDetails from './OtpDetails'

function OtpPage({ ph, length, generateOTP, setGenerateOTP, onOtpSubmit = () => {} }){
  const [otp, setOtp] = useState(new Array(length).fill(""));

  // function openGenerateOTP(){
  //   setGenerateOTP(true)
  //   timer30sec();
  // }
// const ref = useRef();


  // const verifyOtp = async() =>{
  //   try{
  //     user.confirm(otp)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  return(
    <div className="flex flex-col">
      <OtpDetails ph={ph} generateOTP={generateOTP} setGenerateOTP={setGenerateOTP} />

      <OtpInput otp={otp} setOtp={setOtp} length={6} onOtpSubmit={onOtpSubmit} />
    </div>
  )
}

export default OtpPage;