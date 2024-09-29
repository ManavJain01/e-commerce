// Importing React Icons
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Importing React Packages
import { useState, useEffect, useRef } from 'react'

// Importing Cuatom Hooks
import { useUserProfile } from '../../../../hooks/useUserProfile'

export default function AddressDetails({openModel, setOpenModel, formData = {}, setFormData}) {
  // Hooks
  const { loading, addAddress } = useUserProfile();

  // useRef
  const modalRef = useRef();

  // useState
  const [saveAs, setSaveAs] = useState(formData?.saveas || "Other");

  // useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setFormData({
          pincode: "",
          houseNumber: "",
          area: "",
          landmark: "",
          city: "",
          state: "",
          saveas: "Other"
        });
        setOpenModel(false);
      }
    }

    if (openModel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openModel]);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await addAddress(formData);

    setFormData({
      pincode: "",
      houseNumber: "",
      area: "",
      landmark: "",
      city: "",
      state: "",
      saveas: "Other"
    });

    setOpenModel(false);
  }

  const handleSaveAs = async (e) => {
    setSaveAs(e);
    setFormData(prevData => {return { ...prevData, saveas: e }});
  }

  return (
    <div className="z-[999999] fixed top-0 left-0 bg-black bg-opacity-45 w-lvw h-lvh">
      <form onSubmit={handleSubmit} ref={modalRef} className="absolute top-0 right-0 bg-white flex flex-col gap-8 h-full w-[25rem] rounded-tl-lg">
        {/* Upper Section */}
        <div>
          <div className="flex items-center gap-4 p-5">
            <button onClick={() => setOpenModel(!openModel)}><FaArrowLeft className="size-5" /></button>
            <span className="font-semibold text-lg">Address Details</span>
          </div>
          <hr className="border-gray-400" />
        </div>

        {/* Address Section */}
        <div className="flex flex-col gap-3 mx-8">
          {/* Pincode */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Enter Pincode</span>
            <input type="text" placeholder="474011" required={true} value={formData.pincode} onChange={(e) => setFormData(prevData => {return{...prevData, pincode: e.target.value}})} className="text-sm px-5 py-2 rounded-md border outline-none" />
          </div>

          {/* House number, Floor, Building name */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">House number, Floor, Building name</span>
            <input type="text" placeholder="21/24, Kailash Apartment" required={true} value={formData?.houseNumber} onChange={(e) => setFormData(prevData => {return{...prevData, houseNumber: e.target.value}})} className="text-sm px-5 py-2 rounded-md border outline-none" />
          </div>

          {/* Street, Locality, Area */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Street, Locality, Area</span>
            <input type="text" placeholder="Indiranagar" required={true} value={formData?.area} onChange={(e) => setFormData(prevData => {return{...prevData, area: e.target.value}})} className="text-sm px-5 py-2 rounded-md border outline-none" />
          </div>

          {/* Landmark (Optional) */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Landmark (Optional)</span>
            <input type="text" placeholder="Indiranagar bus stop" value={formData?.landmark} onChange={(e) => setFormData(prevData => {return{...prevData, landmark: e.target.value}})} className="text-sm px-5 py-2 rounded-md border outline-none" />
          </div>

          {/* City and State */}
          <div className="flex gap-5">
            {/* City */}
            <div className="flex flex-col gap-2">
              <span className="font-semibold">City</span>
              <input type="text" placeholder="Mumbai" required={true} value={formData?.city} onChange={(e) => setFormData(prevData => {return{...prevData, city: e.target.value}})} className="text-sm px-5 py-2 rounded-md border outline-none" />
            </div>

            {/* State */}
            <div className="flex flex-col gap-2">
              <span className="font-semibold">State</span>
              <input type="text" placeholder="Maharashtra" required={true} value={formData?.state} onChange={(e) => setFormData(prevData => {return{...prevData, state: e.target.value}})} className="text-sm px-5 py-2 rounded-md border outline-none" />
            </div>
          </div>
          {/* Save as */}
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Save as</span>
            <div className="flex gap-6">
              <button type="button" onClick={() => handleSaveAs("Home")} className={`${saveAs === "Home" && "text-blue-700 border-blue-600"} px-5 py-2 border`}>Home</button>
              <button type="button" onClick={() => handleSaveAs("Office")} className={`${saveAs === "Office" && "text-blue-700 border-blue-600"} px-5 py-2 border`}>Office</button>
              <button type="button" onClick={() => handleSaveAs("Other")} className={`${saveAs === "Other" && "text-blue-700 border-blue-600"} px-5 py-2 border`}>Other</button>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="flex flex-col mt-auto">
          <hr />
          <button type="submit" disabled={loading} className="text-white bg-blue-800 my-4 mx-8 py-2 rounded-lg">{loading ? <AiOutlineLoading3Quarters className="size-6 mx-auto animate-spin" /> : "Save & Continue"}</button>
        </div>
      </form>
    </div>
  )
}