// Importing React Icons
import { BiTargetLock } from "react-icons/bi";

// Importing Services
import { fetchInputLocation, fetchCurrLocation } from '../../service/service'

import InputBtn from "./InputBtn";

function AddressBtn({ setCheckAddress, setEnableAddressBox }){
  async function checkPostcode(){
    const input = document.getElementById("checkAddress").value

    
    const response = await fetchInputLocation(input);

    // if(response) localStorage.setItem("location", {district: response[0]?.District, pincode: input})
    // setCheckAddress(`${response[0]?.District}, ${input}`)
  }

  const getCurrLocation = async () => {
    const response = await fetchCurrLocation();
    console.log("response in addressBtn: ");
    console.log(response);

    if(response){
      setCheckAddress(`${response?.city || ""}, ${response?.postcode || ""}`)
    }

    setEnableAddressBox(false)
  }

  return(
    <div className="z-50 absolute top-12 left-10 bg-white flex flex-col gap-5 min-w-80 min-h-40 p-5 rounded-md shadow-md shadow-gray-400">
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