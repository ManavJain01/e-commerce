// Importing Local Images
import doctorImage from "../imgs/doctor-img.webp"

export default function PageHeader() {
  return (
    <div className="bg-yellow-50 flex justify-center gap-5 px-5 py-2">
      <img src={doctorImage} alt="doctor-img" className="size-16" />
      
      {/* Second Row */}
      <section className="flex flex-col gap-3">
        <p className="font-semibold">Free consultation and more benefits with Care Plan membership.</p>
        
        <button className="font-semibold text-sm flex items-center gap-2">
          <p className="text-white bg-red-900 py-1 px-2 rounded-xl">Care Plan</p>
          <p className="text-red-900">Join now!</p>
        </button>
      </section>
    </div>
  )
}