// Importing Icons from react-icons
import { CgSpinner } from "react-icons/cg";
import { BsFillShieldLockFill } from 'react-icons/bs'

// Importing React Packages
import { useState } from 'react'

function Signup({ setPh }){
  // Variables
  let tempPh = ""
  
  // UseStates
  const [notValid, setNotValid] = useState(false)
  const [loading, setLoading] = useState(false)

  // Functions
  function PhFormatOnChange(e){
    setNotValid(false);

    // If there exist a '0' before a phone number
    if(e.target.value[0] == 0 && e.target.value.length > 3){
      e.target.value = e.target.value.slice(1,e.target.value.length)
    }

    // If there exist a '+91' before a phone number
    if(e.target.value.slice(0,3) == "+91" && e.target.value.length >= 4){
      e.target.value = e.target.value.slice(3,e.target.length)
    }

    // Formatting phone number at the time of typing phone number
    if(e.target.value[0] != 0 && (e.target.value.length == 4 || e.target.value.length == 8)){
      e.target.value += '-'
    }

    // Formatting phone number at the time of copy-paste the whole phone number - part 1
    if(e.target.value.length > 5 && e.target.value[4] != '-'){
      e.target.value = e.target.value.slice(0,4) + '-' + e.target.value.slice(4,e.target.value.length)
    }

    // Formatting phone number at the time of copy-paste the whole phone number - part 2
    if(e.target.value.length > 9 && e.target.value[8] != '-'){
      e.target.value = e.target.value.slice(0,8) + '-' + e.target.value.slice(8,e.target.value.length)
    }
  }

  function PhFormatOnKeyDown(e){
    if(e.key==="Backspace" && (e.target.value.length == 5)){
      e.target.value = e.target.value.slice(0,4)
    }else if(e.key==="Backspace" && (e.target.value.length == 9)){
      e.target.value = e.target.value.slice(0,8)
    }
  }

  function checkValidNumber(e){
    const input = document.getElementById("validPhn");
    if(input.value == "" || String(input.value).length < 10){
      setNotValid(true);
    }else{
      e.target.disabled = true
      tempPh = "+91 " + input.value;
      setPh(prevPh => {return{...prevPh, phone: tempPh}})
    }
  }

  return(
    <div className='mt-10 flex flex-col relative'>
      <h1 className='mb-5 font-semibold text-lg flex gap-5 items-center relative before:absolute before:content-["+91"] before:text-gray-400 before:top-14 before:left-1'><BsFillShieldLockFill />Enter your mobile number</h1>
      <input
        // required
        // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        id="validPhn"
        type="tel"
        placeholder='Your Mobile Number'
        onChange={(e) => PhFormatOnChange(e)}
        onKeyDown={(e) => PhFormatOnKeyDown(e)}
        className="px-10 py-2 border-2 border-gray-400 rounded-lg outline-none"
        required
      />
      {notValid ?<span className="absolute top-24 left-10 text-sm text-red-500">
          Enter valid mobile number
        </span>
        : ""
      }
      <button onClick={(e) => checkValidNumber(e)} className="bg-green-700 text-white flex justify-center items-center gap-5 rounded-md mt-10 py-3 hover:opacity-80 active:opacity-90">
        { loading && <CgSpinner size={20} className="animate-spin" />}
        <span>Login / Signup</span>
      </button>
    </div>
  )
}

export default Signup;