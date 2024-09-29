// Importing React Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Importing React Packages
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Importing Custom Hooks
import { useUserProfile } from '../../../../hooks/useUserProfile';

// Importing local files
import PatientDetails from './PatientDetails';

export default function ManagePatient() {
  // Hooks
  const { loading, deletePatient, getAllPatients } = useUserProfile();

  // useState
  const [error, setError] = useState(false);
  const [addPatient, setAddPatient] = useState(false);
  const [allPatients, setAllPatients] = useState([]);
  const [createMYSELF, setCreateMYSELF] = useState(true);
  const [editMYSELF, setEditMYSELF] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    gender: ""
  });

  // useEffect
  useEffect(() => {
    handleRefresh();
  }, [addPatient]);

  // Functions
  const handleRefresh = async () => {    
    const res = await getAllPatients();

    res?.patient?.map((e) => {
      if(e?.email){
        setCreateMYSELF(false);
      }
    })

    setAllPatients(res?.patient);
  }

  const handleEdit = async (e) => {    
    if(e?.email){
      setEditMYSELF(true);
      setFormData(e);
    } else {
      setFormData({patient: {name: e?.name, age: e?.age, gender: e?.gender, _id: e?._id}});
    }
    setAddPatient(true);
  }

  const handleDelete = async (patient_id) => {
    const res = await deletePatient(patient_id);
    
    if(res === "Patient is already assigned."){
      setError({id: patient_id, msg: res});

      setTimeout(() => setError(false), 2000);
    } else await handleRefresh();
  }

  return (
    <div className="flex flex-col gap-10 w-full mr-10">
      {/* Upper Section */}
      <div className="flex flex-col gap-5">
        <Link to="/User/addresses" className="font-semibold text-gray-500">Manage Addresses</Link>
        <p className="font-semibold text-blue-800">Manage Patients</p>
        <hr className="border-blue-800" />
      </div>

      {/* Main Section */}
      {loading
        ?<div><AiOutlineLoading3Quarters className="size-20 text-blue-600 mx-auto mt-20 animate-spin" /></div>
        :<div className="flex flex-col gap-5">
          <button onClick={() => setAddPatient(!addPatient)} className="text-blue-800 px-5 py-2 w-fit rounded-md border border-blue-800">+ Add New Patient</button>
          
          <div className="flex gap-10 flex-wrap">{
            Array.isArray(allPatients) && allPatients?.map((e, i) => {
              return(
                <div key={i} className="flex gap-5 justify-between w-full h-[6rem] px-5 rounded-md border">
                  {/* patient */}
                  <div className="flex flex-col justify-center">
                    <p className="font-bold">{e?.name}</p>
                    <section className="flex gap-1">
                      {e?.email && <p>MYSELF, </p>}
                      <p>{e?.age}, </p>
                      <p>{e?.gender}</p>
                    </section>
                    {error?.id === e?._id && <span className="text-red-600">{error?.msg || ""}</span>}
                  </div>
                  {/* edit/delete */}
                  <div className="flex items-center gap-5">
                    {!e?.email && <button onClick={() => handleDelete(e?._id)} className="text-sm text-blue-800 border-b border-blue-800">Delete</button>}
                    <button onClick={() => handleEdit(e)} className="text-sm text-blue-800 border-b border-blue-800">Edit</button>
                  </div>
                </div>
              )
            })
          }</div>
        </div>
      }

      {/* Last Section/ Modal */}
      {addPatient && <PatientDetails openModel={addPatient} setOpenModel={setAddPatient} createMYSELF={createMYSELF} editMYSELF={editMYSELF} formData={formData} setFormData={setFormData} />}
    </div>
  )
}