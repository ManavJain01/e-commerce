// Importing Local Components
import PaymentDetails from './PaymentDetails'
import CartItems from './CartItems'
import UserAddress from './UserAddress'
import UploadPrescripBtn from '../../User/pages/Medical Records/UploadPrescripBtn'

// Importing React Packages
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Importing Redux Files
import { useSelector } from 'react-redux'

// Importing Custom Hooks
import { useUserServices } from '../../../hooks/useUserServices'

export default function Summary() {
  // Custom Hooks
  const { makePayment } = useUserServices();

  // useNavigate
  const navigate = useNavigate();

  // UseSelector
  const cartItems = useSelector(state => state.cart.cartItems);
  
  // useEffect
  useEffect(() => {
    if(cartItems.length <= 0) {
      // navigate("/");
    }
  }, [cartItems])

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
          <button onClick={() => makePayment(cartItems)} className="font-semibold text-lg text-white bg-blue-600 /px-20 py-2 rounded-md">Select Payment mode</button>
        </div>
      </div>
    </div>
  )
}