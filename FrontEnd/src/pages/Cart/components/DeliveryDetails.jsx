// Importing React Icons
import { FaArrowLeft } from "react-icons/fa6";

// Importing React Packages
import { useState, useEffect, useRef } from 'react'

export default function DeliveryDetails({ openModel, setOpenModel, handleModal }) {
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

  const PatientSection = () => {
    return (
    <div className="bg-blue-100 mx-5 rounded-md">
      {/* add patient button */}
      <section className="flex items-center gap-5 justify-between p-3">
        <span className="font-semibold">Select Patient</span>
        <button onClick={() => handleModal("patient")} className="font-semibold text-blue-800">+ Add Patient</button>
      </section>
      {/* patients */}
      <section className="bg-white flex items-center gap-10 justify-between p-4 border border-blue-100">
        <div className="flex items-center gap-2">
          <input type="checkbox" />
          <span className="font-semibold">Manav Jain</span>
        </div>
        <button className="text-blue-800 border-b border-blue-800">Edit</button>
      </section>
    </div>
  )};



  const AddressSection = () => {
    // useState
    const [noAddress, setNoAddress] = useState(true);

    return(
    <div className="bg-blue-100 mx-5 rounded-md">
      {/* upper section */}
      <section className="flex items-center gap-5 justify-between p-3">
        {noAddress
          ?<span className="font-semibold whitespace-nowrap">Add address details to proceed</span>
          :<div className="flex gap-5 items-center justify-between w-full">
            <span className="font-semibold">Select address</span>
            <button onClick={() => handleModal("address")} className="font-semibold text-blue-800">+ Add Address</button>
          </div>
        }
      </section>
      {/* addresses */}
      {noAddress
        ?<button onClick={() => handleModal("address")} className="font-semibold text-blue-700 bg-white flex items-center gap-10 justify-between p-4 w-full border border-blue-100">
          + Add Address
        </button>
        :<div className="bg-white">
          <div className="flex items-start gap-2 h-20 w-full p-3 rounded-md border border-t-none border-blue-100">
            {/* checkbox */}
            <input type="checkbox" />

            {/* Address */}
            <div className="flex-1 flex flex-col">
              {/* type and pincode */}
              <p className="font-semibold flex items-center gap-1">Address Type <span>(474011)</span></p>
              {/* full address */}
              <span className="text-sm text-gray-400">Full Address</span>
            </div>
            {/* edit button */}
            <button className="text-blue-800 border-b border-blue-800">Edit</button>
          </div>
        </div>
      }
    </div>
  )};



  return (
    <div className="z-[999999] fixed top-0 left-0 bg-black bg-opacity-45 w-lvw h-lvh">
      <div ref={modalRef} className="absolute top-0 right-0 bg-white flex flex-col gap-8 h-full w-[25rem] rounded-tl-lg">
        {/* Upper Section */}
        <div>
          <div className="flex items-center gap-4 p-5">
            <button onClick={() => setOpenModel(!openModel)}><FaArrowLeft className="size-5" /></button>
            <span className="font-semibold text-lg">Delivery Details</span>
          </div>
          <hr className="border-gray-400" />
        </div>

        {/* Details */}
          {/* Patient */}        
        <PatientSection />
          {/* Address */}
        <AddressSection />

        {/* Lower Section */}
        <div className="flex flex-col mt-auto">
          <hr />
          <button className="text-white bg-blue-800 my-4 mx-8 py-2 rounded-lg">Save & Continue</button>
        </div>
      </div>
    </div>
  )
}