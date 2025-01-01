// Importing React Packages
import { Link } from "react-router-dom";

// Importing Local Images
import doctorWritingPrescription from "../imgs/doctorWritingPrescription.svg"

export default function RegisterDoctor() {
  return (
    <div className="flex items-center justify-center gap-20">
      <img src={doctorWritingPrescription} alt="doctor" className="size-48" />

      {/* Second Section */}
      <div className="flex flex-col gap-8 max-w-[21rem]">
        <p className="font-semibold text-3xl">Are you a doctor ?</p>
        <p className="font-semibold text-xl text-gray-500">Be a part of our panel of specialists and connect with your patients from anywhere.</p>
        <Link to="/register-doctors" className="text-white bg-orange-600 w-fit py-3 px-20">
          JOIN US
        </Link>
      </div>
    </div>
  )
}