export default function RegisterDoctor() {
  const allSurgeon = [
    ""
  ];

  return (
    <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] py-28 flex flex-col gap-20">
      {/* Page Header */}
      <div className="text-white bg-green-700 flex flex-col gap-2 items-center justify-center p-5">
        <h1 className="font-bold text-3xl">ARE YOU A DOCTOR?</h1>
        <p className="text-2xl text-gray-300">COME JOIN India's Trustable health platform</p>
      </div>

      {/* Form */}
      <form action="" className="flex flex-col gap-5 p-5 mx-20 border border-black">
        {/* First Name */}
        <section className="flex items-center justify-between gap-5">
          <label htmlFor="registerDoctor_firstName" className="whitespace-nowrap">First Name*</label>
          <input type="text" id="registerDoctor_firstName" placeholder="First Name" required className="bg-transparent w-[90%] px-5 py-1 border border-gray-400 rounded-md outline-none" />
        </section>

        {/* Last Name */}
        <section className="flex items-center justify-between gap-5">
          <label htmlFor="registerDoctor_lastName" className="whitespace-nowrap">Last Name</label>
          <input type="text" id="registerDoctor_lastName" placeholder="Last Name" className="bg-transparent w-[90%] px-5 py-1 border border-gray-400 rounded-md outline-none" />
        </section>

        {/* Gender */}
        <section className="flex items-center justify-between gap-5">
          <label htmlFor="registerDoctor_gender" className="whitespace-nowrap mr-5">Gender</label>
          <select id="registerDoctor_gender" placeholder="Last Name" className="bg-transparent w-[90%] px-5 py-1 border border-gray-400 rounded-md outline-none">
            <option value="Male">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </section>

        {/* Speciality */}
        <section className="flex items-center justify-between gap-5">
          <label htmlFor="registerDoctor_speciality" className="whitespace-nowrap">Speciality*</label>
          <input type="text" id="registerDoctor_speciality" placeholder="Speciality" required className="bg-transparent w-[90%] px-5 py-1 border border-gray-400 rounded-md outline-none" />
        </section>

        {/* Mobile Number */}
        <div className="flex flex-col">
          <section className="flex items-center justify-between gap-5">
            <label htmlFor="registerDoctor_mobile" className="whitespace-nowrap">Mobile*</label>
            <input type="text" id="registerDoctor_mobile" placeholder="Mobile Number" required className="bg-transparent w-[90%] px-5 py-1 border border-gray-400 rounded-md outline-none" />
          </section>
          <p className="text-xs ml-auto">We will send verification code on this number</p>
        </div>
        
        {/* Email ID */}
        <section className="flex items-center justify-between gap-5">
          <label htmlFor="registerDoctor_email" className="whitespace-nowrap">Email</label>
          <input type="text" id="registerDoctor_email" placeholder="Email ID" className="bg-transparent w-[90%] px-5 py-1 border border-gray-400 rounded-md outline-none" />
        </section>

        <button className="font-semibold text-white bg-green-600 w-fit ml-48 px-12 py-1 rounded-lg">Continue</button>
      </form>
    </div>
  )
}