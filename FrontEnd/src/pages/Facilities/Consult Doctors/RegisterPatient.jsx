// Importing React Packages
import { useState } from "react"

export default function RegisterPatient() {
  const [members, setMembers] = useState([]);

  return (
    <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] flex flex-col items-center gap-10 px-20 py-28">
      {/* Navigator Showcase */}
      <div className="flex gap-10">
        <div className="bg-green-400 w-48 h-1 rounded-full" />
        <div className="bg-gray-300 w-48 h-1 rounded-full" />
        <div className="bg-gray-300 w-48 h-1 rounded-full" />
      </div>

      {/* Second Section */}
      <div className="flex justify-between gap-20">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Who are you consulting for?</h1>
          <p className="text-gray-500">Select person you want to consult for and your preferred mode of consultation</p>
        </div>
        
        <img src="https://onemg.gumlet.io/marketing/41db3546-84e8-4317-9a8f-dd24f17973f9.png" alt="patient" className="size-16" />
      </div>

      {/* Members Showcase */}
      {members/length < 1
        // For No Member Found!!!
        ?<div className="flex flex-col items-center">
          <img src="https://www.1mg.com/images/no-result-found.svg" alt="no member found" className="size-40" />

          <p>No member found. Please add a new member</p>

        </div>

        // If Any Member Found!!!
        :<div></div>
      }

      {/* Add Member Section */}
      <div className="flex flex-col gap-5">
        {/* Add New Member */}
        <button className="font-bold text-orange-500 mr-auto">+ Add New Member</button>

        {/* Add Phone Number */}
        <section className="flex flex-col gap-1">
          <label htmlFor="registerPatient_phone" className="text-xs text-gray-500">Patient phone number</label>
          <input type="number" id="registerPatient_phone" className="bg-transparent border border-black px-5 py-1 rounded-md outline-none" />
        </section>

        {/* Preferred Mode */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xs">What is your preferred mode of consultation?</p>
          {/* Modes */}
          <section className="text-xs flex gap-8">
            <button className="active:font-bold px-5 py-1 border border-gray-600 rounded-md">Video</button>
            <button className="active:font-bold px-5 py-1 border border-gray-600 rounded-md">Audio</button>
            <button className="active:font-bold px-5 py-1 border border-gray-600 rounded-md">Chat</button>
          </section>
        </div>

      </div>
      
      <button className="font-semibold text-white bg-orange-600 ml-auto px-20 py-1 rounded-md">Proceed</button>
    </div>
  )
}