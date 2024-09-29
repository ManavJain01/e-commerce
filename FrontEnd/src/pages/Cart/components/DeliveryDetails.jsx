// Importing React Icons
import { FaArrowLeft } from "react-icons/fa6";
import { LuLoader2 } from "react-icons/lu";

// Importing React Packages
import { useState, useEffect, useRef } from 'react'

// Importing Custom Hooks
import { useUserProfile } from '../../../hooks/useUserProfile'

export default function DeliveryDetails({ openModel, setOpenModel, handleModal, setCreateMYSELF, setEditMYSELF, addressData, setAddressData, patientData, setPatientData }) {
  // useRef
  const modalRef = useRef();

  // Custom Hooks
  const { loading, getAllAddress, getAllPatients, setDeliveryDetails, getDeliveryDetails } = useUserProfile();

  // useState
  const [addresses, setAddresses] = useState([]);
  const [patients, setPatients] = useState([]);

  // useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModel(false);
      }
    }

    // Calling Functions
    handleRefresh(); 
    if (openModel) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Functions
  const handleRefresh = async () => {
    let res = await getAllAddress();
    setAddresses(res?.address || []);
    
    res = await getAllPatients();
    setPatients(res?.patient || []);

    if(Array.isArray(res?.patient) && res?.patient.length > 0) setCreateMYSELF(false);

    res = await getDeliveryDetails();
    setPatientData(res?.delivery_details?.patient);
    setAddressData(res?.delivery_details?.address);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const UserDeliveryDetails = {patient: patientData, address: addressData};
    
    await setDeliveryDetails(UserDeliveryDetails);
    setOpenModel(false);
  }

  const PatientSection = () => {
    // Functions
    const handleAddPatient = () => {
      setPatientData({
        name: "",
        age: 0,
        gender: ""
      });
      setEditMYSELF(false);
  
      handleModal("patient");
    }

    const handlePatientEdit = (patient) => {
      if(patient?.email){
        setPatientData(patient);
        setEditMYSELF(true); 
      }
      else{
        setPatientData({patient:{ name: patient?.name, age: patient?.age, gender: patient?.gender }});
        setEditMYSELF(false);
      }

      handleModal("patient");
    }

    return (
    <div className="bg-blue-100 mx-5 rounded-md">
      {/* add patient button */}
      <section className="flex items-center gap-5 justify-between p-3">
        {Array.isArray(patients) && patients.length !== 0
          ?<div className="flex gap-5 items-center justify-between w-full">
            <span className="font-semibold">Select Patient</span>
            <button type="button" onClick={handleAddPatient} className="font-semibold text-blue-800">+ Add Patient</button>
          </div>
          :<span className="font-semibold whitespace-nowrap">Add patient details to proceed</span>
        }
      </section>

      {/* patients */}
      {Array.isArray(patients) && patients.length !== 0
        ?patients.map((e, i) => {
          return(
            <section key={i} onClick={(event) => {event.target.tagName !== "INPUT" && setPatientData(e)}} className={`bg-white flex items-center gap-10 justify-between cursor-pointer p-4 border ${e?.name === patientData?.name ? "border-blue-500" : "border-blue-100"}`}>
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={e?.name === patientData?.name} onChange={() => setPatientData(e)} />
                <span className="font-semibold">{e?.name}</span>
              </div>
              {e?.name === patientData?.name && <button type="button" onClick={() => handlePatientEdit(e)} className="text-blue-800 border-b border-blue-800">Edit</button>}
            </section>
          )
        })
        :<button type="button" onClick={() => handleModal("patient")} className="font-semibold text-blue-700 bg-white flex items-center gap-10 justify-between p-4 w-full border border-blue-100">
          + Add Personal Details
        </button>
      }
    </div>
  )};


  const AddressSection = () => {
    // Functions
    const handleAddAddress = () => {
      setAddressData({
        pincode: "",
        houseNumber: "",
        area: "",
        landmark: "",
        city: "",
        state: "",
        saveas: "Other"
      });
  
      handleModal("address");
    }

    const handleAddressEdit = (address) => {
      setAddressData(address);
      handleModal("address");
    }
  
    return(
    <div className="bg-blue-100 mx-5 rounded-md">
      {/* upper section */}
      <section className="flex items-center gap-5 justify-between p-3">
        {Array.isArray(addresses) && addresses.length !== 0
          ?<div className="flex gap-5 items-center justify-between w-full">
            <span className="font-semibold">Select address</span>
            <button type="button" onClick={handleAddAddress} className="font-semibold text-blue-800">+ Add Address</button>
          </div>
          :<span className="font-semibold whitespace-nowrap">Add address details to proceed</span>
        }
      </section>
      {/* addresses */}
      {Array.isArray(addresses) && addresses.length !== 0
        ?addresses.map((e, i) => {
          const address = e?.houseNumber + ', ' + e?.area + ', ' + e?.landmark + ', ' + e?.city + ', ' + e?.state;
          const flag = address.length > 70;
          return(
            <div key={i} onClick={(event) => {event.target.tagName !== "INPUT" && setAddressData(e)}} className="bg-white cursor-pointer">
              <div className={`flex items-start gap-2 min-h-20 w-full p-3 rounded-md ${i == 0 && "rounded-t-none"} border border-t-none ${e?.pincode === addressData?.pincode ? "border-blue-500" : "border-blue-100"}`}>
                {/* checkbox */}
                <input type="checkbox" checked={e?.pincode === addressData?.pincode} onChange={() => setAddressData(e)} />

                {/* Address */}
                <div className="flex-1 flex flex-col">
                  {/* type and pincode */}
                  <p className="font-semibold flex items-center gap-1">{e?.saveas} <span>({e?.pincode})</span></p>
                  {/* full address */}
                  <span className="text-xs text-gray-400 w-64 max-h-9 overflow-hidden">{flag ? address.substring(0, 70) + "..." : address}</span>
                </div>
                {/* edit button */}
                {e?.pincode === addressData?.pincode && <button type="button" onClick={() => handleAddressEdit(e)} className="text-blue-800 border-b border-blue-800">Edit</button>}
              </div>
            </div>
          )
        })
        :<button type="button" onClick={() => handleModal("address")} className="font-semibold text-blue-700 bg-white flex items-center gap-10 justify-between p-4 w-full border border-blue-100">
          + Add Address
        </button>
      }
    </div>
  )};



  return (
    <div className="z-[999999] fixed top-0 left-0 bg-black bg-opacity-45 w-lvw h-lvh">
      <form ref={modalRef} onSubmit={handleSubmit} className="absolute top-0 right-0 bg-white flex flex-col gap-8 h-full w-[25rem] rounded-tl-lg">
        {/* Upper Section */}
        <div>
          <div className="flex items-center gap-4 p-5">
            <button type="button" onClick={() => setOpenModel(!openModel)}><FaArrowLeft className="size-5" /></button>
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
          <button disabled={loading} className="text-white bg-blue-800 my-4 mx-8 py-2 rounded-lg">{loading ? <LuLoader2 className="size-6 mx-auto animate-spin" /> : "Save & Continue"}</button>
        </div>
      </form>
    </div>
  )
}