// Importing React Icons
import { BiTargetLock } from "react-icons/bi";

// Importing React Packages
import { useEffect, useRef } from "react";

// Importing Hooks
import { useServices } from "../../hooks/useServices";

import InputBtn from "./InputBtn";

function AddressBtn({ setCheckAddress, enableAddressBox, setEnableAddressBox }){
  // Custom Hooks
  const { getInputLocation, getCurrentLocation } = useServices();

  // useRef
  const modalRef = useRef();

  // useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setEnableAddressBox(false);
      }
    }

    if (enableAddressBox) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [enableAddressBox]);

  // Functions
  async function checkPostcode(){
    const input = document.getElementById("checkAddress").value

    const response = await getInputLocation(input)
    setCheckAddress(`${response.region}, ${response.pincode}`)
    
    await setEnableAddressBox(false)
  }

  const getCurrLocation = async () => {
    const response = await getCurrentLocation();

    if(response){
      setCheckAddress(`${response?.city || ""}, ${response?.postcode || ""}`)
    }

    await setEnableAddressBox(false)
  }

  return(
    <div ref={modalRef} className="z-50 absolute top-12 left-0 bg-white flex flex-col gap-5 min-w-80 min-h-40 p-5 rounded-md shadow-md shadow-gray-400">
      <h1 className="font-semibold text-lg">Choose your location</h1>
      <InputBtn
        id="checkAddress"
        button="Check"
        placeholder="Enter your pincode"
        onClick={()=>checkPostcode()} />
      
      <button
        onClick={()=>getCurrLocation()}
        className="text-green-700 font-semibold flex gap-2 items-center">
        <BiTargetLock className="size-6" />
        Use your current location
      </button>
    </div>
  )
}

export default AddressBtn;