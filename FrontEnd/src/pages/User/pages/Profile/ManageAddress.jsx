// Importing React Packages
import { useState } from 'react';
import { Link } from 'react-router-dom'

// Importing local files
import AddressDetails from './AddressDetails';

export default function ManageAddress() {
  // useState
  const [addAddress, setAddAddress] = useState(false);

  return (
    <div className="flex flex-col gap-10 w-full mr-10">
      {/* Upper Section */}
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-blue-800">Manage Addresses</p>
        <Link to="/User/patients" className="font-semibold text-gray-500">Manage Patients</Link>
        <hr className="border-blue-800" />
      </div>

      {/* Main Section */}
      <div className="flex flex-col gap-5">
        <button onClick={() => setAddAddress(!addAddress)} className="text-blue-800 px-5 py-2 w-fit rounded-md border border-blue-800">+ Add New Address</button>

        <div className="flex gap-10 flex-wrap">
          <div className="w-full h-[8rem] flex gap-5 justify-between items-end p-5 rounded-md border">
            {/* address */}
            <div></div>
            {/* edit/delete */}
            <div className="flex gap-5">
              <button className="text-sm text-blue-800 border-b border-blue-800">Delete</button>
              <button className="text-sm text-blue-800 border-b border-blue-800">Edit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section/ Modal */}
      {addAddress && <AddressDetails openModel={addAddress} setOpenModel={setAddAddress} />}
    </div>
  )
}