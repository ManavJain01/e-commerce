// Importing Local Icons
import emptyCart from './Images/cart.png'

// Importing Product Card
import ProductCard from '../../components/Product Card/ProductCard'

// Importing React Files
import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react'

// Importing Redux Files
import { useSelector } from 'react-redux'

// Importing Local Components
import PaymentDetails from './components/PaymentDetails'
import Verify from './components/Verify'

// Importing Custom Hooks
import { useUserServices } from '../../hooks/useUserServices'

function Cart(){
  // Custom Hooks
  const { makePayment } = useUserServices();

  // UseStates
  const reduxItems = useSelector(state => state.cart.cartItems)
  const [cartItems, setCartItems] = useState(reduxItems.length)
  
  // UseMemo
  useMemo(()=>{
    setCartItems(reduxItems.length);
  },[reduxItems])

  if(cartItems == 0){
    return (
      <> 
        <div className="my-32 flex flex-col items-center justify-center gap-3">
          <img src={emptyCart} className="w-64 object-contain" />
          <h1 className="font-mono font-extrabold text-xl">Your cart is empty</h1>
          <span>Add Medicines and healthcare products in your cart</span>
          <Link to="/Home" className="font-bold py-3 px-5 border-2 rounded-md border-green-800 text-green-800 hover:bg-green-100 active:bg-green-500">Find Medicines</Link>
        </div>
      </>
    )
    }else{
      return(
        <>
          <div className="mx-10 my-40 flex flex-wrap gap-20 lg:gap-0 justify-around">
            <div className="w-[30rem] flex flex-col gap-2">
              <h1 className="font-bold text-2xl mb-5">{cartItems} Items in your Cart</h1>

              {
                reduxItems.map((item) => (
                  <ProductCard key={item.id} e={item.list} title="Cart" />
                ))
              }
            </div>
            
            <div className="h-fit flex flex-col items-center gap-8">
              <PaymentDetails cartItems={cartItems} reduxItems={reduxItems} />
              <button onClick={() => makePayment(reduxItems)} className="font-semibold text-lg text-white bg-blue-600 w-fit px-10 py-2 rounded-md">Select payment mode</button>
            </div>
          </div>
        </>
      )
    }
}

export default Cart

{/* Product Card Layout */}
{/* <div className="border-2 border-gray-200 w-[45rem] h-[12rem] py-5 px-10 flex justify-between">
  <div className="flex gap-5">
    <span>Product Image</span>
    <section className="flex flex-col gap-4">
      <span className="text-xl font-semibold">Product Name</span>
      <span>Company Name</span>
      <span>Quantity in product</span>
      <span>MRP</span>
    </section>
  </div>
  <section className="flex flex-col justify-between items-end">
    <button><img src={bin} className="object-contain w-8" /></button>
    <section className="w-32 flex items-center justify-between px-3 py-1 border-2 border-gray-500 rounded-md">
      Qty:
      <button><img src={minus} className="object-contain w-4" /></button>
      4
      <button><img src={plus} className="object-contain w-4" /></button>
    </section>
  </section>
</div> */}