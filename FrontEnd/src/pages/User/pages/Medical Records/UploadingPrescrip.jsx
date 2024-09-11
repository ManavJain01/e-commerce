// Importing React Icons
import { BiSolidImageAdd } from "react-icons/bi";
import { FaUserDoctor } from "react-icons/fa6";

// Importing React Packages
import { Link } from 'react-router-dom'

export default function UploadingPrescrip() {
  const CheckBoxSection = () => {
    return(
      <div className="text-lg flex flex-col gap-8">
        <h1 className="font-semibold">Do you have a prescription for your medicine?</h1>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Yes, I do have a prescription</span>
          </div>

          <div className="text-blue-700 bg-blue-200 flex flex-col gap-3 items-center justify-center w-44 h-28 rounded-lg">
            <BiSolidImageAdd className="size-8" />
            <span>Upload Prescription</span>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <hr className="border-gray-400" />

          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <span>No, continue without a prescription</span>
          </div>

          <div className="flex items-center gap-5 p-3 rounded-lg border border-gray-400">
            <FaUserDoctor className="size-12 text-green-600" />
            <div>
              <span>Dont't worry! You will get a call from a trusted</span>
              <p>Dismefa Doctors for <span className="text-sm text-gray-500">price</span></p>
              <span className="font-bold text-green-700">Actual Price</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex gap-5 justify-between flex-wrap w-full px-5">
      <CheckBoxSection />

      <div className="flex flex-col gap-5 items-center justify-center w-[20rem]">
        <img src="https://cdn-icons-png.flaticon.com/512/5523/5523306.png" alt="medicine" />
        <Link to="/Cart" className="text-lg text-center text-white bg-blue-800 w-full px-5 py-2 rounded-lg">Proceed</Link>
      </div>
    </div>
  )
}