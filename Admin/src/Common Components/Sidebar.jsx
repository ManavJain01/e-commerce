// Importing React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
// Dashboard
import { PiHouseLight } from "react-icons/pi";
// Data
import { MdPeopleAlt } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { GoBroadcast } from "react-icons/go";
// Client
import { AiOutlineProduct } from "react-icons/ai";
import { MdBorderColor } from "react-icons/md";
// Pages
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
// Charts
import { MdOutlineBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { TbChartAreaFilled } from "react-icons/tb";

// Importing local Images
import dashBoard from '../../public/dashboard.png'


// Importing React Icons
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ darkTheme }) {
  // Array of nav options
  const navOptions = [
    {
      option: "Dashboard",
      component: <PiHouseLight />,
      link: "/"
    },
    {
      type: "Data",
      options: [
        {
          option: "Manage Team",
          component: <MdPeopleAlt />,
          link: "/team"
        },
        {
          option: "Contacts Information",
          component: <MdContacts />,
          link: "/contacts"
        },
        {
          option: "Invoices Balances",
          component: <LuFileSpreadsheet />,
          link: "/invoices"
        },
        {
          option: "Broadcast",
          component: <GoBroadcast />,
          link: "/Broadcast"
        }
      ]
    },
    {
      type: "Client",
      options: [
        {
          option: "Orders",
          component: <MdBorderColor />,
          link: "/orders"
        },
        {
          option: "Customers",
          component: <MdPeopleAlt />,
          link: "/customers"
        },
        {
          option: "Products",
          component: <AiOutlineProduct />,
          link: "/products"
        }
      ]
    },
    {
      type: "Pages",
      options: [
        {
          option: "Profile Form",
          component: <FaUserAlt />,
          link: "/profile"
        },
        {
          option: "Calender",
          component: <SlCalender />,
          link: "/calender"
        },
        {
          option: "FAQ Page",
          component: <HiOutlineQuestionMarkCircle />,
          link: "/faq"
        }
      ]
    },
    {
      type: "Charts",
      options: [
        {
          option: "Bar Chart",
          component: <MdOutlineBarChart />,
          link: "/barChart"
        },
        {
          option: "Pie Chart",
          component: <FaChartPie />,
          link: "/pieChart"
        },
        {
          option: "Line Chart",
          component: <VscGraphLine />,
          link: "/lineChart"
        },
        {
          option: "Geography Chart",
          component: <TbChartAreaFilled />,
          link: "/geographyChart"
        }
      ]
    }
  ]

  // UseStates
  const [showMenu, setShowMenu] = useState(true);
  if(showMenu){
    return (
      <div className={`py-8 px-5 flex flex-col gap-8 ${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"}`}>
        {/* Headlines */}
        <div className="flex flex-col items-center gap-10">
          <div className="text-2xl flex items-center gap-5">
            <h1 className="text-center font-bold whitespace-nowrap">Admin Dashboard</h1>
            {showMenu
              ?<GiCrossMark onClick={() => setShowMenu(! showMenu)} className="cursor-pointer" />
              :<GiHamburgerMenu onClick={() => setShowMenu(! showMenu)} className="cursor-pointer" />
            }
          </div>
          
          <div className="flex flex-col items-center">
            <img src={dashBoard} alt="dashboard" className="size-20 rounded-full" />
            <p className={`text-xl transition-all duration-1000 ${darkTheme ? "text-green-300" : "text-green-700"}`}>User name</p>
            <p>Admin</p>
          </div>
        </div>

        {/* Nav Options */}
        <nav className="flex flex-col">{navOptions.map((e, i) => {
          return(
            <div key={i} className="flex flex-col gap-4 items-start">
              <NavLink to={e?.link} className={`text-lg font-semibold flex gap-2 justify-start items-center duration-700 ${darkTheme ? "aria-[current=page]:text-blue-800 hover:text-blue-600" : "aria-[current=page]:text-[#ca9509] hover:text-yellow-500"}`}>
                {e?.component}
                {e?.option}
              </NavLink>
              {e.options
                ? <div className="flex flex-col gap-5 items-start">
                    <p className={`${darkTheme ? "text-gray-500" : "text-gray-700"}`}>{e?.type}</p>
                    <div className="flex flex-col gap-5">{e?.options?.map((f,j) => {
                      return(
                        <NavLink key={j} to={f?.link} className={`flex items-center gap-2 py-1 duration-700 ${darkTheme ? "aria-[current=page]:text-blue-800 hover:text-blue-600" : "aria-[current=page]:text-[#ca9509] hover:text-yellow-500 text-gray-500"}`}>
                          <span>{f?.component}</span>
                          <span>{f?.option}</span>
                        </NavLink>
                      )
                    })}</div>
                  </div>
                : ""
              }
            </div>
          )
        })}</nav>
      </div>
    )
  }else{
    return(
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="relative cursor-pointer">
          <GiHamburgerMenu className={`relative top-7 left-3 size-8 ${darkTheme ? "" : "text-[#ca9509]"}`} />
      </div>
    )
  }
}