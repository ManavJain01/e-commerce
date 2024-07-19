import { BiTargetLock } from "react-icons/bi";

import InputBtn from "./InputBtn";

function AddressBtn({ setCheckAddress, setEnableAddressBox }){

  function checkPostcode(){
    const input = document.getElementById("checkAddress").value
    const url = `https://api.postalpincode.in/pincode/${input}`
    fetch(url).then(res=>res.json()).then(data=>{
      setCheckAddress(`${data[0].PostOffice[0].District}, ${input}`)
    })
    
  }

  function getCurrLocation(){
    navigator.geolocation.getCurrentPosition(pos=>{
      const {latitude,longitude} = pos.coords;
      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
      fetch(url).then(res=>res.json()).then(data=>{
        setCheckAddress(`${data.address.city}, ${data.address.postcode}`)
      })
    })
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