// Importing React Icons
import { FaLocationDot } from "react-icons/fa6";

// Importing React Packages
import { useState } from "react"

// Importing Local Components
import ModalSetting from "./ModalSetting";

export default function UserAddress() {
  // useState
  const [patient, setPatient] = useState("manav jain");
  const [deliveryDate, setDeliveryDate] = useState("Date");
  const [hasAddress, setHasAddress] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex justify-between items-start gap-10 p-3 border rounded-lg">
      {/* First Column */}
      <div className="flex flex-col gap-5">
        {/* First Row */}
        <section className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            <p className="flex gap-1">Deliver To<span className="font-semibold">{patient}</span></p>
            {/* Pincode */}
            {hasAddress && <div className="text-xs bg-blue-100 flex gap-1 items-center p-1 rounded-lg">
              <FaLocationDot className="text-blue-600 size-3" />
              <span>Home</span>
              <span className="font-bold">474011</span>
            </div>}
          </div>
          {/* User Delivery Address - Second Row */}
          {hasAddress && <span className="text-gray-400">Address</span>}
        </section>

        {/* Delivery Date */}
        <p>Delivery By <span className="font-bold text-green-600">{deliveryDate}</span></p>
      </div>

      {/* 2nd Column */}
      {hasAddress
        ?<button onClick={() => setOpenModal(!openModal)} className="font-semibold text-blue-700">Change</button>
        :<button onClick={() => setOpenModal(!openModal)} className="font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-lg border border-blue-500">Add Address</button>
      }

      {/* Third Column */}
      {openModal && <ModalSetting setOpenModal={setOpenModal} />}
    </div>
  )
}