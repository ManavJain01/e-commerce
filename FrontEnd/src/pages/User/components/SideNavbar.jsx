// Importing React Icons
import { FaUserAlt } from "react-icons/fa";
import { MdBorderColor } from "react-icons/md";
import { BsFillPlusSquareFill } from "react-icons/bs";
import { FaBookMedical } from "react-icons/fa6";
import { BiSave } from "react-icons/bi";
import { FaWallet } from "react-icons/fa";
import { VscReferences } from "react-icons/vsc";
import { MdLogout } from "react-icons/md";

// Importing React Packages
import { NavLink } from 'react-router-dom'

// Importing redux Files
import {useDispatch} from 'react-redux' 

export default function SideNavbar() {
  // Redux
  const dispatch = useDispatch();

  // Nav Options
  const navOptions = [
    {
      option: "profile",
      link: "profile",
      icon: <FaUserAlt />
    },
    {
      option: "My Orders",
      link: "myOrders",
      icon: <MdBorderColor />
    },
    {
      option: "My Refills",
      link: "myRefills",
      icon: <BsFillPlusSquareFill />
    },
    {
      option: "Medical Records",
      link: "medicalRecords",
      icon: <FaBookMedical />
    },
    // {
    //   option: "Saved for Later",
    //   link: "savedForLater",
    //   icon: <BiSave />
    // },
    {
      option: "Wallet",
      link: "wallet",
      icon: <FaWallet />
    },
    {
      option: "Refer&Earn",
      link: "Refer&Earn",
      icon: <VscReferences />
    },
    {
      option: "Log out",
      link: "/Home",
      icon: <MdLogout />,
      styles: "hover:text-red-600",
      onClick: () => {
        console.log("log out empty function in sideNavbar");
      }
    }
  ]

  return (
    <div className="min-h-[90vh] p-10 flex flex-col gap-7 justify-center items-center">
      <div className="relative h-16 w-16 bg-blue-700 rounded-full">
        <p className="text-white text-4xl absolute top-3 left-5">U</p>
      </div>

      <nav className="flex sm:flex-col border-2 border-gray-400 rounded-md shadow-md shadow-gray-400">
        {navOptions.map((e,i) => {
          return(
            <ul key={i} className="flex flex-col text-2xl">
              <li onClick={e?.onClick} className="hover:text-green-400"><NavLink to={e.link} className={`px-5 sm:px-20 py-5 flex items-center gap-5 whitespace-nowrap aria-[current=page]:text-green-600 hover:bg-gray-100 ${e?.styles}`}>
                {e?.icon}
                <span className="hidden md:block">{e.option}</span>
              </NavLink></li>
            </ul>
          )
        })}
      </nav>
    </div>
  )
}