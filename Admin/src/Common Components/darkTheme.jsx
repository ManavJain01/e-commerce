// Importing React Icons
import { GoSun } from "react-icons/go";
import { IoMoonSharp } from "react-icons/io5";

export default function DarkTheme(props) {
  // Functions
  function getDarkTheme(){
    if(props.darkTheme == false) props.setDarkTheme(true)
      else props.setDarkTheme(false)
  }

  return (
    <div
      onClick={() => getDarkTheme()}
      className={`w-14 h-7 ${props.darkTheme ? "bg-blue-500" : "bg-[#a8a6a6]"} rounded-full cursor-pointer`}>
        <div
          className={`w-7 h-6 relative top-[2px] ${props.darkTheme ? "left-6" : "left-1"} bg-white pt-[2px] pl-1 rounded-full transition-all duration-1000`}>
          {props.darkTheme
            ?<IoMoonSharp className="size-5 z-10 text-black" />
            :<GoSun className="size-5 z-10 text-yellow-600" />
          }
        </div>
    </div>
  )
}