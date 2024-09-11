// Importing React Packages
import { useState } from 'react';
import { Link } from 'react-router-dom'

// Importing local files
import PatientDetails from './PatientDetails';

export default function ManagePatient() {
  // useState
  const [addPatient, setAddPatient] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full mr-10">
      {/* Upper Section */}
      <div className="flex flex-col gap-5">
        <Link to="/User/addresses" className="font-semibold text-gray-500">Manage Addresses</Link>
        <p className="font-semibold text-blue-800">Manage Patients</p>
        <hr className="border-blue-800" />
      </div>

      {/* Main Section */}
      <div className="flex flex-col gap-5">
        <button onClick={() => setAddPatient(!addPatient)} className="text-blue-800 px-5 py-2 w-fit rounded-md border border-blue-800">+ Add New Patient</button>

        <div className="flex gap-10 flex-wrap">
          <div className="w-full h-[6rem] p-5 rounded-md border">

          </div>
        </div>
      </div>

      {/* Last Section/ Modal */}
      {addPatient && <PatientDetails openModel={addPatient} setOpenModel={setAddPatient} />}
    </div>
  )
}