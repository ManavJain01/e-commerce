// Importing React Icons
import { FaLocationDot } from "react-icons/fa6";

// Importing React Packages
import { useState, useEffect } from "react"

// Importing Custom Hooks
import { useUserProfile } from "../../../hooks/useUserProfile";

// Importing Local Components
import ModalSetting from "./ModalSetting";

export default function UserAddress() {
  // Hooks
  const { getDeliveryDetails } = useUserProfile();
  
  // useState
  const [customer, setCustomer] = useState({});
  const [address, setAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("Date");
  const [openModal, setOpenModal] = useState(false);

  // useEffect
  useEffect(() => {
    handleRefresh();
  }, [openModal]);

  // Functions
  const handleRefresh = async () => {
    try {
      const res = await getDeliveryDetails();
      
      if (res?.delivery_details) {
        const { houseNumber, area, landmark, city, state, pincode, saveas } = res.delivery_details.address || {};
        
        // Constructing the address string directly from response data
        const fullAddress = `${houseNumber || ""}, ${area || ""}, ${landmark || ""}, ${city || ""}, ${state || ""}`;

        setAddress(fullAddress);
        setCustomer(res.delivery_details);  // Set customer details from the response
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="flex justify-between items-start gap-10 p-3 border rounded-lg">
      {/* First Column */}
      <div className="flex flex-col gap-5">
        {/* First Row */}
        <section className="flex flex-col gap-1">
          <div className="flex gap-2 items-center">
            {customer?.patient?.name
              ?<p className="flex gap-1">Deliver To<span className="font-semibold">{customer?.patient?.name || ""}</span></p>
              :<button onClick={() => setOpenModal(!openModal)} className="font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-lg border border-blue-500">Add Patient</button>
            }
            {/* Pincode */}
            {customer?.address && <div className="text-xs bg-blue-100 flex gap-1 items-center p-1 rounded-lg">
              <FaLocationDot className="text-blue-600 size-3" />
              <span>{customer?.address?.saveas}</span>
              <span className="font-bold">{customer?.address?.pincode}</span>
            </div>}
          </div>
          {/* User Delivery Address - Second Row */}
          {customer?.address && <span className="text-sm text-gray-400">{address.length > 80 ? address.substring(0, 80) + "..." : address}</span>}
        </section>

        {/* Delivery Date */}
        <p>Delivery By <span className="font-bold text-green-600">{deliveryDate}</span></p>
      </div>

      {/* 2nd Column */}
      {customer?.address
        ?<button onClick={() => setOpenModal(!openModal)} className="font-semibold text-blue-700">Change</button>
        :<button onClick={() => setOpenModal(!openModal)} className="font-semibold text-blue-700 bg-blue-100 px-2 py-1 rounded-lg border border-blue-500">Add Address</button>
      }

      {/* Third Column */}
      {openModal && <ModalSetting setOpenModal={setOpenModal} />}
    </div>
  )
}