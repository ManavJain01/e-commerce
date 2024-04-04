// Importing Local Icons
import emptyCart from '../Images/cart.png'
import bin from '../Images/bin.png'
import minus from '../Images/minus.png'
import plus from '../Images/plus.png'

// Importing Product Card
import ProductCard from '../../Product Card/components/ProductCard'

// Importing React Files
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Importing Redux Files
import { useSelector, useDispatch } from 'react-redux'

// Importing Local Components
import PaymentDetails from './PaymentDetails'


function Cart(){
  const reduxItems = useSelector(state => state.cartItems)
  
  const [cartItems, setCartItems] = useState(reduxItems.length)

  if(cartItems == 0){
    return (
      <> 
        <div className="m-32 flex flex-col items-center justify-center gap-3">
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
          <div className="m-10 pt-20 flex flex-wrap gap-20 lg:gap-0 justify-around">
            <div className="w-[30rem] flex flex-col gap-2">
              <h1 className="font-bold text-2xl mb-5">{cartItems} Items in your Cart</h1>

              {
                reduxItems.map((item) => {
                  // console.log(item)
                  return <ProductCard key={item.id} e={item.list} title="Cart" />
                })
              }

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
            </div>
            

            <PaymentDetails cartItems={cartItems} reduxItems={reduxItems} />
          </div>
        </>
      )
    }
}

export default Cart