// Importing React Icons
import { IoSearchOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";

// Importing Local Components
import DarkTheme from './darkTheme.jsx'

export default function Header({ darkTheme, setDarkTheme }) {
  return (
    <div className="flex justify-between">
      {/* first section */}
      <div className="relative">
        <input type="text" placeholder="Search" className={`${darkTheme ? "bg-gray-900" : "bg-[#f4b718] placeholder:text-white"} text-sm px-2 py-1 pr-6 rounded-md`} />
        <IoSearchOutline className="absolute top-[5px] right-1" />
      </div>

      {/* Second Section */}
      <div className="flex gap-5 items-center">
        <DarkTheme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <IoMdNotificationsOutline className="size-5" />
        <CiSettings className="size-5" />
        <FaUser />
      </div>
    </div>
  )
}