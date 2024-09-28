export default function NewPatientDetails({ formData, setFormData }) {
return (
    <div className="flex flex-col gap-6 mx-8">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Patient's Name</span>
        <input type="text" required value={formData?.patient?.name || ""} onChange={(e) => setFormData(prevData => {return{...prevData, patient: {...prevData?.patient, name: e.target.value}}})} placeholder="Enter patient's name" className="px-5 py-2 rounded-md border outline-none" />
      </div>

      {/* Age */}
      <div className="flex flex-col gap-2">
        <span className="font-semibold">Patient's Age</span>
        <input type="number" required value={formData?.patient?.age || ""} onChange={(e) => setFormData(prevData => {return{...prevData, patient: {...prevData?.patient, age: e.target.value}}})} placeholder="Enter patient's age" className="px-5 py-2 rounded-md border outline-none" />
      </div>

      {/* Gender */}
      <div>
        <span className="font-semibold">Gender</span>
        <div className="flex gap-8 items-center">
          <div className="flex items-center gap-1">
            <input type="checkbox" id="patient_male" checked={formData?.patient?.gender === "Male"} onChange={() => setFormData(prevData => {return{...prevData, patient: {...prevData?.patient, gender: "male"}}})} />
            <label htmlFor="patient_male">Male</label>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" id="patient_female" checked={formData?.patient?.gender === "Female"} onChange={() => setFormData(prevData => {return{...prevData, patient: {...prevData?.patient, gender: "female"}}})} />
            <label htmlFor="patient_female">Female</label>
          </div>

          <div className="flex items-center gap-1">
            <input type="checkbox" id="patient_other" checked={formData?.patient?.gender === "Other"} onChange={() => setFormData(prevData => {return{...prevData, patient: {...prevData?.patient, gender: "other"}}})} />
            <label htmlFor="patient_other">Other</label>
          </div>
        </div>
      </div>
    </div>
  )
}