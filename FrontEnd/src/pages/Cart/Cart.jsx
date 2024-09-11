// Importing Local Icons
import emptyCart from './Images/cart.png'

// Importing React Files
import { Link } from 'react-router-dom'

// Importing Redux Files
import { useSelector } from 'react-redux'

// Importing Local Components
import PaymentDetails from './components/PaymentDetails'
import CartItems from './components/CartItems'
import UploadPrescripBtn from '../User/pages/Medical Records/UploadPrescripBtn'

function Cart(){
  // UseStates
  const reduxItems = useSelector(state => state.cart.cartItems)

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
            <Link to="/Summary" className="font-semibold text-center text-lg text-white bg-blue-600 py-2 rounded-md">Proceed to Checkout</Link>
          </div>
        </div>
      )
    }
}

export default Cart;