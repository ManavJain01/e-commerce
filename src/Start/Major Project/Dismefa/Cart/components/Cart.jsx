import { Link } from 'react-router-dom'

import emptyCart from '../Images/cart.png'
import bin from '../Images/bin.png'
import minus from '../Images/minus.png'
import plus from '../Images/plus.png'

let cartItems = 1;

function Cart(){
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
          <div className="m-10 flex flex-wrap justify-around">
            <div>
              <h1 className="font-bold text-2xl mb-5">{cartItems} Items in your Cart</h1>

              <div className="border-2 border-gray-200 w-[45rem] h-[12rem] py-5 px-10 flex justify-between">
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
                  <button className="w-32 flex items-center justify-between px-3 py-1 border-2 border-gray-500 rounded-md">
                    Qty:
                    <button><img src={plus} className="object-contain w-4" /></button>
                    4
                    <button><img src={minus} className="object-contain w-4" /></button>
                  </button>
                </section>
              </div>
            </div>
            

            <div className="px-10 flex flex-col flex-1 gap-4 font-semibold">
              <h1 className="text-gray-500 text-xl">Payment details</h1>

              <section className="flex flex-col gap-2">
                <span className="pl-2 flex justify-between">Total MRP <span>rs.3000.00</span></span>
                <span className="pl-2 flex justify-between">Discount <span>- rs.300.00</span></span>
                <span className="pl-2 flex justify-between">Total Amount <span>rs.2700.00</span></span>
                <span className="pl-2 flex justify-between">Shipping/Delivery Charges <span>rs.30.00</span></span>
              </section>

              <span className="text-blue-400 pl-2 flex justify-between">Total Payable <span>rs.2730.00</span></span>
              <span className="text-green-600 bg-green-100 px-2 py-1 rounded-mg flex justify-between">Total Savings <span>- rs.50.00</span></span>
            </div>
          </div>
        </>
      )
    }
}

export default Cart