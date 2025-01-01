// Importing React Packages
import { Link } from "react-router-dom"

// Importing Local Images
import consulting from "../imgs/consulting.svg"
import security from "../imgs/security.svg"
import certified from "../imgs/certified.svg"
import convenience from "../imgs/convenience.svg"
import costEffective from "../imgs/costEffective.svg"

export default function ConsultNow() {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* First Section */}
      <div className="flex items-center gap-10">
        {/* First Row */}
        <section className="flex flex-col gap-5">
          <h1 className="font-bold text-3xl">Online doctor consultation with qualified doctors</h1>
          <p className="text-2xl text-gray-500">Starting at ₹199</p>

          <section className="flex items-center gap-5">
            <p>Talk within 30 min</p>
            <p>Free follow up for 3 days</p>
            <p>Get a valid prescription</p>
          </section>

          <Link to="/consult-doctors/patient" className="font-semibold text-white bg-orange-600 w-fit py-2 px-32 rounded-md">Consult now</Link>
        </section>

        <img src={consulting} alt="consulting" className="size-56" />
      </div>

      {/* Second Section */}
      <div className="font-bold flex items-center justify-center gap-5 w-[60rem] py-5 px-10 border border-black rounded-lg">
        <section className="flex flex-col items-center">
          <p className="text-orange-600 text-[4rem]">30L+</p>
          <p className="text-xl text-gray-700">Total Consultations</p>
        </section>

        <p className="text-[6rem] font-extralight">|</p>
        
        <section className="flex flex-col items-center">
          <p className="text-orange-600 text-[4rem]">3k+</p>
          <p className="text-xl text-gray-700">Daily Consultations</p>
        </section>
        
        <p className="text-[6rem] font-extralight">|</p>

        <section className="flex flex-col items-center">
          <p className="text-orange-600 text-[4rem]">22+</p>
          <p className="text-xl text-gray-700">Specialities</p>
        </section>
      </div>

      {/* Third Section - Assurrance */}
      <div className="flex items-center gap-10 max-w-[80rem] mt-20">
        {/* First Assurrance */}
        <div className="flex flex-col items-center gap-5">
          <img src={security} alt="security" className="size-24 mb-10" />

          <p className="font-bold text-gray-600 text-xl">100% Confidential</p>
          <p className="text-gray-500 text-center">All advice & consultations are completely confidential. You can also delete chats whenever you want.</p>
        </div>
        
        {/* Second Assurrance */}
        <div className="flex flex-col items-center gap-5">
          <img src={certified} alt="certified" className="size-24 mb-10" />

          <p className="font-bold text-gray-600 text-xl">Certified Doctors</p>
          <p className="text-gray-500 text-center">We offer quality healthcare through our network of certified and experienced doctors.</p>
        </div>
        
        {/* Third Assurrance */}
        <div className="flex flex-col items-center gap-5">
          <img src={convenience} alt="convenience" className="size-24 mb-10" />

          <p className="font-bold text-gray-600 text-xl">Convenience</p>
          <p className="text-gray-500 text-center">Forget the hassle of long queues and rush hour. Seek expert opinion anytime, anywhere.</p>
        </div>
        
        {/* Fourth Assurrance */}
        <div className="flex flex-col items-center gap-5">
          <img src={costEffective} alt="costEffective" className="size-24 mb-10" />

          <p className="font-bold text-gray-600 text-xl">Cost Effective</p>
          <p className="text-gray-500 text-center">We provide medical assistance on non urgent queries for free. Fee starting at ₹50 for faster response to queries.</p>
        </div>
      </div>
    </div>
  )
}