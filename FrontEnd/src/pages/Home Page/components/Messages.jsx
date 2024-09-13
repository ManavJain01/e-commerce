// Importing React Icons
import { MdFileUpload } from "react-icons/md";

// Importing React Packages
import { Link } from "react-router-dom";

export default function Messages() {
  return (
    <div className="flex gap-10 flex-wrap">
      {/* Contact us */}
      <div className="flex-1 bg-green-400 flex sm:flex-wrap md:flex-nowrap gap-5 items-center justify-center p-5 rounded-md">
        <img
          src="https://www.truemeds.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSubBannerImg1.944089d0.png&w=384&q=75"
          alt="img"
          className="w-32 md:w-48 lg:w-fit" />

        <div className="text-gray-600 flex flex-col items-center">
          <p className="font-semibold md:text-lg lg:text-2xl">Call us and Order medicines</p>
          <p className="font-semibold md:text-lg lg:text-2xl text-green-800">09301100870</p>
          <p className="md:text-lg lg:text-2xl">working hours 9am to 9pm</p>
        </div>
      </div>

      {/* Order by Prescription */}
      <div className="flex-1 bg-blue-400 flex gap-5 sm:flex-wrap md:flex-nowrap items-center justify-center p-5 rounded-md">
        <img
          src="https://www.truemeds.in/_next/static/media/SubBannerImg2.25d60023.png?tr=cm-pad_resize,bg-FFFFFF,lo-true,w-undefined"
          alt="img"
          className="w-32 md:w-48 lg:w-fit" />

        <div className="flex flex-col gap-5 items-center">
          <p className="font-semibold text-gray-600 md:text-lg lg:text-2xl">Order medicines with Doctor's Note</p>
          <Link to="/User/medicalRecords" className="w-fit font-bold text-xl text-blue-600 bg-white flex gap-3 items-center px-5 py-1 rounded-md shadow-lg">
            <MdFileUpload />
            Upload
          </Link>
        </div>
      </div>
    </div>
  )
}