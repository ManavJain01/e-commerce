// Importing React Icons
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Importing React Packages
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Importing local files
import AddressDetails from './AddressDetails';

// Importing Custom Hooks
import { useUserProfile } from '../../../../hooks/useUserProfile';

export default function ManageAddress() {
  // Hooks
  const { loading, getAllAddress, deleteAddress } = useUserProfile();

  // useState
  const [addAddress, setAddAddress] = useState(false);
  const [allAddress, setAllAddress] = useState([]);
  const [formData, setFormData] = useState({
    pincode: "",
    houseNumber: "",
    area: "",
    landmark: "",
    city: "",
    state: "",
    saveas: "Other"
  });

  // useEffect
  useEffect(() => {
    handleRefresh();
  }, [addAddress]);

  // Functions
  const handleRefresh = async () => {
    const res = await getAllAddress();
    setAllAddress(res?.address);
  };

  const handleEdit = async (e) => {
    setFormData(e);
    setAddAddress(true);
  }

  const handleDelete = async (address_id) => {
    await deleteAddress(address_id);
    await handleRefresh();
  }

  return (
    <div className="flex flex-col gap-10 w-full mr-10">
      {/* Upper Section */}
      <div className="flex flex-col gap-5">
        <p className="font-semibold text-blue-800">Manage Addresses</p>
        <Link to="/User/patients" className="font-semibold text-gray-500">Manage Patients</Link>
        <hr className="border-blue-800" />
      </div>

      {/* Main Section */}
      {loading
        ?<div><AiOutlineLoading3Quarters className="size-20 text-blue-600 mx-auto mt-20 animate-spin" /></div>
        :<div className="flex flex-col gap-5">
          <button onClick={() => setAddAddress(!addAddress)} className="text-blue-800 px-5 py-2 w-fit rounded-md border border-blue-800">+ Add New Address</button>

          <div className="flex gap-10 flex-wrap">
            {allAddress?.map((e, i) => {
              return(
                <div key={i} className="w-full h-[8rem] flex gap-5 justify-between p-5 rounded-md border">
                  {/* address */}
                  <div className="flex flex-col">
                    <p className="font-bold">{e?.saveas}, {e?.pincode}</p>
                    <p>{e?.houseNumber}, {e?.area}, {e?.city}, {e?.state}</p>
                    <p>{e?.landmark}</p>
                  </div>
                  {/* edit/delete */}
                  <div className="flex items-center gap-5">
                    <button onClick={() => handleEdit(e)} className="text-sm text-blue-800 border-b border-blue-800">Edit</button>
                    <button onClick={() => handleDelete(e?._id)} className="text-sm text-blue-800 border-b border-blue-800">Delete</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      }

      {/* Last Section/ Modal */}
      {addAddress && <AddressDetails openModel={addAddress} setOpenModel={setAddAddress} formData={formData} setFormData={setFormData} />}
    </div>
  )
}