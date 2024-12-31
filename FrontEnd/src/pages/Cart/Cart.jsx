// Importing Local Icons
import emptyCart from './Images/cart.png'

// Importing React Files
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// Importing Redux Files
import { setOpenLoginPage } from '../../Redux/features/stateSlice'
import { useSelector, useDispatch } from 'react-redux'

// Importing Custom Hooks
import { useUserProfile } from '../../hooks/useUserProfile'

// Importing Local Components
import PaymentDetails from './components/PaymentDetails'
import CartItems from './components/CartItems'
import UploadPrescripBtn from '../User/pages/Medical Records/UploadPrescripBtn'
import ModalSetting from './components/ModalSetting'

function Cart(){
  // Custom Hooks
  const { getDeliveryDetails } = useUserProfile();
  
  // useSelector
  const isLogin = useSelector(state => state.state.isLogin);
  
  // useNavigate
  const navigate =  useNavigate();

  // useDispatch
  const dispatch = useDispatch();

  // Redux
  const reduxItems = useSelector(state => state.cart.cartItems)
  
  // UseStates
  const [openModal, setOpenModal] = useState(false);
  const [details, setDetails] = useState({});

  // useEffect
  useEffect(() => {
    handleRefresh();
  }, [])

  // Functions
  const handleRefresh = async () => {
    const res = await getDeliveryDetails();
    setDetails(res?.delivery_details || {});
  }

  const handleCheckout = () => {
    if(isLogin){
      navigate('/Summary');
    } else {
      dispatch(setOpenLoginPage(true));
    }
  }

  const handleDeliveryDetails = () => {
    if(isLogin){
      setOpenModal(true);
    } else {
      dispatch(setOpenLoginPage(true));
    }
  }

  if(reduxItems.length == 0){
    return (
      <div className="my-32 flex flex-col items-center justify-center gap-3">
        <img src={emptyCart} className="w-64 object-contain" />
        <h1 className="font-mono font-extrabold text-xl">Your cart is empty</h1>
        <span>Add Medicines and healthcare products in your cart</span>
        <Link to="/Home" className="font-bold py-3 px-5 border-2 rounded-md border-green-800 text-green-800 hover:bg-green-100 active:bg-green-500">Find Medicines</Link>
      </div>
    )
    }else{
      return(
        <div className="mx-10 pt-40 pb-10 flex flex-wrap gap-20 lg:gap-0 justify-around">
          <div className="flex flex-col gap-5">
            <CartItems />
            <UploadPrescripBtn />
          </div>
          
          <div className="w-[23rem] h-fit flex flex-col gap-8">
            <PaymentDetails />
            {details?.address && details?.patient
              ?<button onClick={() => handleCheckout()} className="font-semibold text-center text-lg text-white bg-blue-600 py-2 rounded-md">{isLogin ? "Proceed to Checkout" : "Click To Login"}</button>
              :<button onClick={handleDeliveryDetails} className="font-semibold text-lg text-white bg-blue-600 py-2 rounded-md">{isLogin ? "Add Delivery Details" : "Click To Login"}</button>
            }
          </div>

          {/* Third Column */}
          {openModal && <ModalSetting setOpenModal={setOpenModal} />}
        </div>
      )
    }
}

export default Cart;