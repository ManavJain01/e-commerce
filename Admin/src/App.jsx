// Importing React Icons
import { MdOutlineMail } from "react-icons/md";
import { MdPointOfSale } from "react-icons/md";
import { HiUserAdd } from "react-icons/hi";
import { FaTrafficLight } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

// Importing React Packages
import { useState } from "react"
import { useOutletContext } from "react-router-dom";

// Importing local files
import StatBox from "./Common Components/Dashboard/StatBox"
import ProgressCircle from "./Common Components/Dashboard/ProgressCircle"
import LineGraph from "./pages/Charts/Line Chart/components/Line"
import BarGraph from './pages/Charts/Bar Chart/components/Bar'
import GeographyChart from './pages/Charts/Geography Chart/components/Geography'

export default function App() {
  // getting darkTheme state
  const [darkTheme] = useOutletContext();

  const data = [
    {
      title: "12,361",
      subtitle: "Emails Sent",
      progress: "0.75",
      increase: "+14%",
      icon: <MdOutlineMail className="text-green-500 text-2xl" />
    },
    {
      title: "431,225",
      subtitle: "Sails Obtained",
      progress: "0.50",
      increase: "+21%",
      icon: <MdPointOfSale className="text-green-500 text-2xl" />
    },
    {
      title: "32,441",
      subtitle: "New Clients",
      progress: "0.30",
      increase: "+5%",
      icon: <HiUserAdd className="text-green-500 text-2xl" />
    },
    {
      title: "1,325,134",
      subtitle: "Traffic Received",
      progress: "0.80",
      increase: "+43%",
      icon: <FaTrafficLight className="text-green-500 text-2xl" />
    }
  ]

  const row2_Data = [
    {
      id: "01e4dsa",
      name: "johndoe",
      date: "2024-09-01",
      money: "$43.95"
    },
    {
      id: "0315dsaa",
      name: "jackdower",
      date: "2024-04-01",
      money: "$133.45"
    },
    {
      id: "01e4dsa",
      name: "aberdohnny",
      date: "2024-09-01",
      money: "$43.95"
    },
    {
      id: "0315dsaa",
      name: "devanshbhatia",
      date: "2024-04-01",
      money: "$133.45"
    },
    {
      id: "01e4dsa",
      name: "shashanksingh",
      date: "2024-09-01",
      money: "$43.95"
    },
  ]

  return (
    <div className="flex flex-col gap-10">
      <span>
        <h1 className="text-4xl font-bold">DASHBOARD</h1>
        <p className="text-green-600">Welcome to Dismefa Dashboard</p>
      </span>
      
      <div className="flex flex-col gap-10">
        {/* Row 1 */}
        <div className="flex gap-5 flex-wrap">
          {data.map((e,i) => {
            return(
              <div key={i} className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} flex-1 min-w-[15rem] px-5 rounded-md`}>
                <StatBox
                key={i}
                title={e.title}
                subtitle={e.subtitle}
                progress={e.progress}
                increase={e.increase}
                icon={e.icon} />
              </div>
            )
          })} 
        </div>

        {/* Row 2 */}
        <div className="flex gap-5">
          <div className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} flex-1 flex flex-col h-[20rem] max-w-[50rem] px-5 py-2 rounded-md`}>
            <section className="flex justify-between">
              <span>
                <p>Revenue Generated</p>
                <p className="text-green-500">$59,342.32</p>
              </span>
              <MdFileDownload className="text-green-500 text-2xl" />
            </section>

            <LineGraph isDashboard={true} />
          </div>
          <div className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} h-[20rem] py-2 rounded-md overflow-y-scroll`}>
            <p className="pb-2 px-5">Recent Transactions</p>
            <hr className={`${darkTheme ? "border-gray-950" : "border-white"} border-2`}/>

            <div className="flex flex-col">
              {row2_Data.map((e, i) => {
                return(
                  <div key={i}>
                    <div className="flex gap-3 justify-between py-2 px-5">
                      <div>
                        <p>{e.id}</p>
                        <p>{e.name}</p>
                      </div>

                      <div>{e.date}</div>
                      <div className="bg-green-500 size-fit py-1 px-2 rounded-md">{e.money}</div>
                    </div>

                    <hr className={`${darkTheme ? "border-gray-950" : "border-[white]"} border-2`} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex gap-5">
          <div className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} flex-1 h-[15rem] min-w-[20rem] py-2 px-5 rounded-md`}>
            <p>Campaign</p>

            <div className="flex flex-col items-center gap-5">
              <ProgressCircle size="125" />

              <section className="flex flex-col items-center">
                <p className="text-green-500">$48,352 revenue generated</p>
                <p className="text-sm">Includes extra misc expenditures and costs</p>
              </section>
            </div>
          </div>
          <div className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} flex-1 h-[15rem] min-w-[20rem] py-2 px-5 rounded-md`}>
            <p>Sales Quantity</p>

            <BarGraph isDashboard={true} />
          </div>
          <div className={`${darkTheme ? "bg-gray-900" : "bg-[#fcecc4]"} flex-1 flex flex-col h-[15rem] min-w-[20rem] py-2 px-5 rounded-md`}>
            <p>Geography Based Traffic</p>

            <GeographyChart isDashboard={true} />
          </div>
        </div>
      </div>
    </div>
  )
}