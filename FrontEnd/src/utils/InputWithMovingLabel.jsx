// Importing React Icons
import { MdOutlineStarPurple500 } from "react-icons/md";

// Importing React Packages
import { useState ,useEffect } from "react";

// Importing Local Component
import Input from "../components/common/Input";

export default function InputWithMovingLabel({label, type="text", placeholder, required=false}) {
  // UseState
  // const [isInvalid, setIsInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Functions
  const handleChange = (e) => {
    if (e.target.value) {
      setInputValue(e.target.value);
    } else {
      setInputValue("");
      // setIsInvalid(true);
    }
  };

  const handleBlur = () => {
    const input = document.getElementById(label);
    if(!input.checkValidity()){
      setInputValue("");
    }
  }
  return (
    <>
      <label htmlFor={label} className="flex-1 relative flex">
        <Input
          id={label}
          type={type}
          placeholder={placeholder}
          required
          value={inputValue}
          onChange={(e) => handleChange(e)}
          onBlur={() => handleBlur()}
          className={`peer text-2xl w-full border-2 border-blue-400
            placeholder:pl-24 focus:placeholder:pl-0
            ${inputValue ? "invalid:border-red-400 valid:border-green-400" : ""}
          `}
        />

        <span
          className={`flex gap-2 absolute top-3 left-4
            peer-focus:-top-4 peer-focus:left-2
            duration-700 bg-white text-blue-500 rounded-lg cursor-text
            ${inputValue ? "peer-valid:-top-4 peer-valid:left-2 peer-valid:text-green-500 peer-invalid:-top-4 peer-invalid:left-2 peer-invalid:text-red-500" : ""}
          `}
        >
          {label}
          {required
            ?<MdOutlineStarPurple500 className="absolute -right-2 text-red-400 size-2" />
            :""
          }
        </span>
      </label>
    </>
  )
}

/*
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          className={`peer text-2xl w-full px-5 py-2 border-2 border-blue-400 rounded-md outline-none duration-700
            placeholder:pl-24 focus:placeholder:pl-0 placeholder:duration-700
            valid:border-green-400
            ${isInvalid ? "invalid:border-red-400" : ""}`}
          required
        />


*/