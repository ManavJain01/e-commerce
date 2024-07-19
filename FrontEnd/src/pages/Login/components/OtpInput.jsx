// Importing React Packages
import { useRef, useEffect } from "react"

function OtpInput({ otp, setOtp, length, onOtpSubmit = () => {} }){
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
      <div>
        {otp.map((value, index) => {
          return <input
            key={index}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
            value={value}
            onChange={(e) => otpOnChange(index, e)}
            onClick={() => otpOnClick(index)}
            onKeyDown={(e) => otpOnKeyDown(index, e)}
            id='otpInput'
            className='text-center text-black border border-black w-8 py-1 mx-2 my-5 rounded-full' />
        })}
      </div>

       {/* Here Firebase CheckBot Comes */}
       <div id="recaptcha" className="mt-5 m-auto" />
    </div>
  )
}

export default OtpInput;