// Importing React Icons
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Importing React Packages
import { useState, useEffect, useRef } from 'react'

// Importing Custom Hooks
import { useUserProfile } from '../../../../hooks/useUserProfile';

// Importing Local Files
import NewPatientDetails from './patient/NewPatientDetails';
import NewUserDetails from './patient/NewUserDetails';

export default function PatientDetails({openModel, setOpenModel, createMYSELF, editMYSELF, formData, setFormData }) {
  // Hooks
  const { loading, addPatient } = useUserProfile();

  // useRef
  const modalRef = useRef();

  // useState
  const [orderForHimself, setOrderForHimself] = useState(true);

  // useEffect
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setFormData({
          name: "",
          age: 0,
          gender: ""
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
  }, []);

  // Functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await addPatient(formData);
    
    setFormData({
      name: "",
      age: 0,
      gender: ""
    });

    setOpenModel(false);
  }

  return (
    <div className="z-[999999] fixed top-0 left-0 bg-black bg-opacity-45 w-lvw min-h-lvh overflow-y-scroll">
      <form onSubmit={handleSubmit} ref={modalRef} className={`absolute top-0 right-0 bg-white flex flex-col gap-8 w-[25rem] ${orderForHimself ? "h-full" : ""} rounded-tl-lg`}>
        {/* Upper Section */}
        <div>
          <div className="flex items-center gap-4 p-5">
            <button type="button" onClick={() => setOpenModel(!openModel)}><FaArrowLeft className="size-5" /></button>
            <span className="font-semibold text-lg">{createMYSELF ? "Your Details" : "Patient Details"}</span>
          </div>
          <hr className="border-gray-400" />
        </div>

        {/* Patient Details */}
        {editMYSELF
          ? <NewUserDetails formData={formData} setFormData={setFormData} editMYSELF={editMYSELF} />
          :createMYSELF
            ? <>
              <NewUserDetails formData={formData} setFormData={setFormData} orderForHimself={orderForHimself} setOrderForHimself={setOrderForHimself} />
              {!orderForHimself && <>
                <div className="font-semibold text-sm text-green-700 bg-lime-100 py-2 px-8">
                  Almost Done! Fill Details of the Patient
                </div>
                <div className="font-semibold text-lg mx-7">Patient Details</div>
                <NewPatientDetails formData={formData} setFormData={setFormData} />
              </>}
            </>
            :<NewPatientDetails formData={formData} setFormData={setFormData} />
        }

        {/* Lower Section with save button */}
        <div className="flex flex-col mt-auto">
          <hr />
          <button type="submit" disabled={loading} className="text-white bg-blue-800 my-4 mx-8 py-2 rounded-lg">{loading ? <AiOutlineLoading3Quarters className="size-6 mx-auto animate-spin" /> : "Save & Continue"}</button>
        </div>
      </form>
    </div>
  )
}