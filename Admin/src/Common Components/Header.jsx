// Importing React Icons
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { PiHouseLight } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { LuFileSpreadsheet } from "react-icons/lu";
import { FaUserAlt } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { MdOutlineBarChart } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { TbChartAreaFilled } from "react-icons/tb";

// Importing React Icons
import { useState } from "react";
import { Link } from "react-router-dom";

// Importing Local Components
import DarkTheme from './darkTheme.jsx'

export default function Header({ darkTheme, setDarkTheme }) {
  // Array of nav options
  const navOptions = [
    {
      type: "Data",
      options: [
        {
          option: "Manage Team",
          component: <MdPeopleAlt />,
          link: "team"
        },
        {
          option: "Contacts Information",
          component: <MdContacts />,
          link: ""
        },
        {
          option: "Invoices Balances",
          component: <LuFileSpreadsheet />,
          link: ""
        }
      ]
    },
    {
      type: "Pages",
      options: [
        {
          option: "Profile Form",
          component: <FaUserAlt />,
          link: ""
        },
        {
          option: "Calender",
          component: <SlCalender />,
          link: ""
        },
        {
          option: "FAQ Page",
          component: <HiOutlineQuestionMarkCircle />,
          link: ""
        }
      ]
    },
    {
      type: "Charts",
      options: [
        {
          option: "Bar Chart",
          component: <MdOutlineBarChart />,
          link: ""
        },
        {
          option: "Pie Chart",
          component: <FaChartPie />,
          link: ""
        },
        {
          option: "Line Chart",
          component: <VscGraphLine />,
          link: ""
        },
        {
          option: "Geography Chart",
          component: <TbChartAreaFilled />,
          link: ""
        }
      ]
    }
  ]

  // UseStates
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`py-8 px-5 flex flex-col gap-5 ${darkTheme ? "bg-gray-900" : "bg-gray-400"}`}>
      {/* Headlines */}
      <div className="flex flex-col items-center">
        <div className="text-2xl flex items-center gap-5">
          <h1 className="text-center font-bold">Admin Dashboard</h1>
          {showMenu
            ?<GiCrossMark onClick={() => setShowMenu(! showMenu)} className="cursor-pointer" />
            :<GiHamburgerMenu onClick={() => setShowMenu(! showMenu)} className="cursor-pointer" />
          }
        </div>

        <p className={`text-xl transition-all duration-1000 ${darkTheme ? "text-green-300" : "text-green-700"}`}>User name</p>
      </div>

      {/* Nav Options */}
      <nav className="flex flex-col gap-5 justify-center">
        <span className="text-lg font-semibold flex gap-2 justify-start items-center">
          <PiHouseLight />
          Dashboard
        </span>
        
        <section className="flex flex-col gap-10">{navOptions.map((e, i) => {
            return(
              <div key={i} className="w-full flex flex-col gap-5 items-start">
                <p className={`${darkTheme ? "text-gray-500" : "text-gray-700"}`}>{e.type}</p>
                <div className="flex flex-col gap-5">{e.options.map((f,j) => {
                    return(
                      <Link key={j} to={f?.link} className={`flex items-center gap-2 ${darkTheme ? "" : "text-gray-500"}`}>
                        <span>{f?.component}</span>
                        <span>{f.option}</span>
                      </Link>
                    )
                  })
                }</div>
              </div>
            )
          })
        }</section>

        <DarkTheme darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      </nav>
    </div>
  )
}