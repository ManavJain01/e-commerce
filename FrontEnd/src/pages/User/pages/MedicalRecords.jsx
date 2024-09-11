// Importing React Packages
import { useState } from "react"

// Importing Local Files
import UploadPrescripBtn from './Medical Records/UploadPrescripBtn'

export default function MedicalRecords() {
    // UseStates
    const [records, setRecords] = useState("")

  return (
    <div className="py-20 flex flex-col gap-10">
      <p className="text-4xl font-semibold">MedicalRecords</p>

      <div>{records
        ? <div></div>
        : <div>
            <h1 className="text-2xl font-bold">Sorry!, You do not have any past prescriptions.</h1>
          </div>
      }</div>

      <UploadPrescripBtn />
    </div>
  )
}