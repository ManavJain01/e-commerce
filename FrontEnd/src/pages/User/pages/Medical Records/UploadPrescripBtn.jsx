// Importing React Icons
import { CiCirclePlus } from "react-icons/ci";

// Importing React Files
import { Link } from 'react-router-dom'

export default function UploadPrescripBtn() {
  return (
    <>
      <hr className="border-gray-400" />
      <div className="w-fit flex flex-col gap-5 items-start">
        <span className="font-semibold text-lg">Upload Prescription</span>
        <Link to="/User/upload-prescription" className="font-semibold text-blue-800 flex flex-col gap-3 w-28">
          <div className="flex items-center justify-center w-28 h-[56px] border border-gray-400 rounded-lg"><CiCirclePlus className="size-6" /></div>
          <span className="text-center">Add Prescription</span>
        </Link>
      </div>
    </>
  )
}