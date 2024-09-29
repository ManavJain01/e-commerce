// Importing Local Components
import PaymentDetails from './PaymentDetails'
import CartItems from './CartItems'
import UserAddress from './UserAddress'
import UploadPrescripBtn from '../../User/pages/Medical Records/UploadPrescripBtn'
import ModalSetting from './ModalSetting'

// Importing React Packages
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Importing Redux Files
import { useSelector } from 'react-redux'

// Importing Custom Hooks
import { useUserServices } from '../../../hooks/useUserServices'
import { useUserProfile } from '../../../hooks/useUserProfile'

export default function Summary() {
  // Custom Hooks
  const { loading, makePayment } = useUserServices();
  const { getDeliveryDetails } = useUserProfile();

  // useNavigate
  const navigate = useNavigate();

  // UseSelector
  const cartItems = useSelector(state => state.cart.cartItems);
  
  // useState
  const [totalAmt, setTotalAmt] = useState(0);
  const [details, setDetails] = useState({});
  const [openModel, setOpenModel] = useState(false);

  // useEffect
  useEffect(() => {
    if(cartItems.length <= 0) {
      // navigate("/");
    }

    // functions
    handleRefresh();
  }, [cartItems]);

  // Functions
  const handleRefresh = async () => {
    const res = await getDeliveryDetails();
    setDetails(res?.delivery_details || {});

    const total = cartItems.reduce((sum, item) => sum + item?.cartQty * item?.list?.price, 0);
    setTotalAmt(total);
  }

  const handlePayment = async () => {
    const order = {cartItems: cartItems, deliveryDetails: details, totalAmount: totalAmt}
    await makePayment(order);
  }
  
  return (
    <div className="mx-10 pt-40 pb-10 flex flex-wrap gap-5 lg:gap-5 justify-around">
      {/* first column */}
      <div className="flex-1 flex flex-col gap-5">
        <UserAddress />
        <CartItems />
        <UploadPrescripBtn />
      </div>
      
      {/* Second column */}
      <div className="flex-1 flex justify-center">
        <div className="w-[23rem] h-fit flex flex-col gap-8">
          <PaymentDetails />
          {details?.address && details?.patient
            ?<button onClick={handlePayment} className="font-semibold text-lg text-white bg-blue-600 py-2 rounded-md">Select Payment mode</button>
            :<button onClick={() => setOpenModel(true)} className="font-semibold text-lg text-white bg-blue-600 py-2 rounded-md">Add Delivery Details</button>
          }
        </div>
      </div>

      {/* Third Column */}
      {openModel && <ModalSetting setOpenModal={setOpenModel} />}
    </div>
  )
}