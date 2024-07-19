import { useState } from "react"

import OtpInput from './components/OtpInput'
import OtpDetails from './components/OtpDetails'

function OtpPage({ ph, setPh, length, generateOtpPage, setGenerateOtpPage, onOtpSubmit = () => {} }){
  const [otp, setOtp] = useState(new Array(length).fill(""));

  return(
    <div className="flex flex-col">
      <OtpDetails ph={ph} setPh={setPh} setOtp={setOtp} length={length} setGenerateOtpPage={setGenerateOtpPage} />

      <OtpInput otp={otp} setOtp={setOtp} length={length} onOtpSubmit={onOtpSubmit} />
    </div>
  )
}

export default OtpPage;