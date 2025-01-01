// Importing Local Files
import FAQS from "./Consult Doctors/FAQS"
import RegisterDoctor from "./Consult Doctors/RegisterDoctor"
import PageHeader from "./Consult Doctors/PageHeader"
import ConsultNow from "./Consult Doctors/ConsultNow"

export default function ConsultDoctors() {
  return (
    <div className="bg-blue-100 min-w-[100vw] min-h-[60vh] flex flex-col gap-20 py-28">
      <PageHeader />
      <ConsultNow />
      <FAQS />
      <RegisterDoctor />
    </div>
  )
}