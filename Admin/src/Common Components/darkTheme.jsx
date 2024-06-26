// Importing React Icons
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

export default function DarkTheme(props) {
  return (
    <div
      onClick={() => props.setDarkTheme(!props.darkTheme)}
      className={`p-[2px] hover:shadow-inner ${props.darkTheme ? "hover:shadow-gray-800" : "hover:shadow-gray-300"} rounded-full cursor-pointer`}>
        {props.darkTheme
          ?<IoMoonOutline className="size-5 z-10 text-gray-400" />
          :<GoSun className="size-5 z-10 text-yellow-600" />
        }
    </div>
  )
}