// Importing React Icons
import { FaArrowLeft } from "react-icons/fa6";

// Importing React Packages
import { useState, useEffect, useRef } from 'react'

export default function AddressDetails({openModel, setOpenModel}) {
  // useRef
  const modalRef = useRef();

  // useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModel(false);
      }
    }

    if (openModel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const Details = () => {
    // useState
    const [saveas, setSaveAs] = useState("Other");

    return(
      <div className="flex flex-col gap-3 mx-8">
        {/* Pincode */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Enter Pincode</span>
          <input type="text" placeholder="474011" className="text-sm px-5 py-2 rounded-md border outline-none" />
        </div>

        {/* House number, Floor, Building name */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">House number, Floor, Building name</span>
          <input type="text" placeholder="21/24, Kailash Apartment" className="text-sm px-5 py-2 rounded-md border outline-none" />
        </div>

        {/* Street, Locality, Area */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Street, Locality, Area</span>
          <input type="text" placeholder="Indiranagar" className="text-sm px-5 py-2 rounded-md border outline-none" />
        </div>

        {/* Landmark (Optional) */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Landmark (Optional)</span>
          <input type="text" placeholder="Indiranagar bus stop" className="text-sm px-5 py-2 rounded-md border outline-none" />
        </div>

        {/* City and State */}
        <div className="flex gap-5">
          {/* City */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">City</span>
            <input type="text" placeholder="Mumbai" className="text-sm px-5 py-2 rounded-md border outline-none" />
          </div>

          {/* State */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">State</span>
            <input type="text" placeholder="Maharashtra" className="text-sm px-5 py-2 rounded-md border outline-none" />
          </div>
        </div>
        {/* Save as */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Save as</span>
          <div className="flex gap-6">
            <button onClick={() => setSaveAs("Home")} className={`${saveas === "Home" && "text-blue-700 border-blue-600"} px-5 py-2 border`}>Home</button>
            <button onClick={() => setSaveAs("Office")} className={`${saveas === "Office" && "text-blue-700 border-blue-600"} px-5 py-2 border`}>Office</button>
            <button onClick={() => setSaveAs("Other")} className={`${saveas === "Other" && "text-blue-700 border-blue-600"} px-5 py-2 border`}>Other</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="z-[999999] fixed top-0 left-0 bg-black bg-opacity-45 w-lvw h-lvh">
      <div ref={modalRef} className="absolute top-0 right-0 bg-white flex flex-col gap-8 h-full w-[25rem] rounded-tl-lg">
        {/* Upper Section */}
        <div>
          <div className="flex items-center gap-4 p-5">
            <button onClick={() => setOpenModel(!openModel)}><FaArrowLeft className="size-5" /></button>
            <span className="font-semibold text-lg">Address Details</span>
          </div>
          <hr className="border-gray-400" />
        </div>

        {/* Address Section */}
        <Details />

        {/* Lower Section */}
        <div className="flex flex-col mt-auto">
          <hr />
          <button className="text-white bg-blue-800 my-4 mx-8 py-2 rounded-lg">Save & Continue</button>
        </div>
      </div>
    </div>
  )
}