export default function newUserDetails({ formData, setFormData, orderForHimself, setOrderForHimself, editMYSELF }) {
  return(
    <div className="text-sm flex flex-col gap-4 mx-8">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Full Name</span>
        <input type="text" required value={formData?.name || ""} onChange={(e) => setFormData(prevData => {return{...prevData, name: e.target.value}})} placeholder="Enter full name" className="px-5 py-2 rounded-md border outline-none" />
      </div>

      {/* Age */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Age</span>
        <input type="number" required value={formData?.age || ""} onChange={(e) => setFormData(prevData => {return{...prevData, age: e.target.value}})} placeholder="Enter age" className="px-5 py-2 rounded-md border outline-none" />
      </div>

      {/* email */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Email ID</span>
        <input type="email" value={formData?.email || ""} onChange={(e) => setFormData(prevData => {return{...prevData, email: e.target.value}})} placeholder="Enter email ID" className="px-5 py-2 rounded-md border outline-none" />
      </div>

      {/* Gender */}
      <div>
        <span className="font-semibold">Gender</span>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="patient_male" checked={formData?.gender === "Male"} onChange={() => setFormData(prevData => {return{...prevData, gender: "Male"}})} />
            <label htmlFor="patient_male">Male</label>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" id="patient_female" checked={formData?.gender === "Female"} onChange={() => setFormData(prevData => {return{...prevData, gender: "Female"}})} />
            <label htmlFor="patient_female">Female</label>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" id="patient_other" checked={formData?.gender === "Other"} onChange={() => setFormData(prevData => {return{...prevData, gender: "Other"}})} />
            <label htmlFor="patient_other">Other</label>
          </div>
        </div>
      </div>

      {/* Who are you ordering for? */}
      {!editMYSELF
        &&<div className="flex flex-col gap-2">
          <span className="font-semibold">Who are you ordering for?</span>

          <section className="font-semibold flex gap-5">
            <button type="button" onClick={() => setOrderForHimself(true)} className={`${orderForHimself && "text-blue-600 border-blue-600"} px-5 py-2 rounded-lg border`}>Myself</button>
            <button type="button" onClick={() => setOrderForHimself(false)} className={`${!orderForHimself && "text-blue-600 border-blue-600"} px-5 py-2 rounded-lg border`}>Someone else</button>
          </section>
        </div>
      }
    </div>
  )
}