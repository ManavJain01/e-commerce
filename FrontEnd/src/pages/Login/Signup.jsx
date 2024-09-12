// Importing Icons from react-icons
import { CgSpinner } from "react-icons/cg";
import { BsFillShieldLockFill } from 'react-icons/bs'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// Importing React Packages
import { useState } from 'react'

// Import Hooks
import { useLogin } from '../../hooks/useLogin'

function Signup({ setLoginPage }){
  // Custom Hooks
  const { loading, login, signup } = useLogin();
  
  // UseStates
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  // Functions
  function PhFormatOnChange(e){
    setError(false);

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

  async function checkValidNumber(e){
    e.preventDefault();
    try {
      const phone = "+91 " + e.target[0].value;
      const password = e.target[1].value;
      let res = "";
      if(isLogin) res = await login({phone: phone, password: password});
      else res = await signup({phone: phone, password: password});

      if(res === "User Already Exist" || res === "User Not Found" || res === "Password is incorrect") setError(res);
      else if(res === "success") setLoginPage(false);
    } catch (error) {
     setError(error.message); 
    }
  }

  return(
    <div className='mt-10 flex flex-col relative'>
      <h1 className='mb-5 font-semibold text-lg flex gap-5 items-center relative before:absolute before:content-["+91"] before:text-gray-400 before:top-14 before:left-1'><BsFillShieldLockFill />Enter your mobile number</h1>

      <form onSubmit={checkValidNumber} className="flex flex-col gap-5">
        {/* Enter mobile number */}
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

        {/* Enter password */}
        <div className="relative flex flex-col">
          <input type={showPassword ? "text" : "password"} id="signup_password" placeholder="Enter Password" className="px-5 py-2 border-2 border-gray-400 rounded-lg outline-none" />
          <label htmlFor="signup_password" className="absolute right-5 top-3"><button type="button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword
              ?<FaEyeSlash className="size-5" />
              :<FaEye className="size-5" />  
            }</button></label>
        </div>

        {/* Display Error */}
        {error && <span className="tracking-wider font-semibold text-center text-red-600">{error}</span>}

        {/* Submit button */}
        <button className="bg-green-700 text-white rounded-md py-3 hover:opacity-80 active:opacity-90">
          {loading
            ?<span className="flex gap-5 items-center justify-center">
              <CgSpinner size={20} className="animate-spin" />
              Processing...
            </span>
            : isLogin ? "Login" : "Signup"}
        </button>

        {isLogin
          ?<span className="text-lg text-center">New User? <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-green-600">Create a New Account</button></span>
          :<span className="text-lg text-center">Already have a Account? <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-green-600">Login here</button></span>
        }
      </form>
    </div>
  )
}

export default Signup;