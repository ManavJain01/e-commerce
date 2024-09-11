// Importing React Icons
import { FaArrowLeft } from "react-icons/fa6";

// Importing React Packages
import { useState, useEffect, useRef } from 'react'

export default function PatientDetails({openModel, setOpenModel}) {
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
    return (
      <div className="flex flex-col gap-6 mx-8">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Patient's Name</span>
          <input type="text" placeholder="Enter patient's name" className="text-sm px-5 py-2 rounded-md border outline-none" />
        </div>

        {/* Age */}
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Patient's Age</span>
          <input type="text" placeholder="Enter patient's age" className="text-sm px-5 py-2 rounded-md border outline-none" />
        </div>

        {/* Gender */}
        <div>
          <span className="font-semibold">Gender</span>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="patient_male" />
              <label htmlFor="patient_male">Male</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="checkbox" id="patient_female" />
              <label htmlFor="patient_female">Female</label>
            </div>

            <div className="flex items-center gap-1">
              <input type="checkbox" id="patient_other" />
              <label htmlFor="patient_other">Other</label>
            </div>
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
            <span className="font-semibold text-lg">Patient Details</span>
          </div>
          <hr className="border-gray-400" />
        </div>

        {/* Patient Details */}
        <Details />

        {/* Lower Section with save button */}
        <div className="flex flex-col mt-auto">
          <hr />
          <button className="text-white bg-blue-800 my-4 mx-8 py-2 rounded-lg">Save & Continue</button>
        </div>
      </div>
    </div>
  )
}