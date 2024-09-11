// Importing React Files
import { useState, useEffect, useMemo } from 'react'

// Importing Redux Files
import { useSelector } from 'react-redux'

function PaymentDetails(){
  // UseSelector
  const reduxItems = useSelector(state => state.cart.cartItems)
  
  // UseStates
  const [cartItems, setCartItems] = useState(reduxItems.length)
  const [MRP, setMRP] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0) 
  const [deliveryCharges, setDeliveryCharges] = useState(50)
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    let tempMRP = 0
    let tempDiscount = 0
    reduxItems.map((e) => {
      tempMRP += (e.list.price * e.cartQty)
      tempDiscount += (e.list.price)*.15
    })
    
    setMRP(tempMRP.toFixed(2))
    setDiscount(tempDiscount.toFixed(2))
  },[cartItems, reduxItems])
 
  useMemo(() => {
    const temp = (MRP - discount + deliveryCharges).toFixed(2);
    setTotalAmount(temp);
  },[MRP]);

  const data = [
    { heading: "Name", value: "John Doe" },
    { heading: "Age", value: 28 },
    { heading: "Occupation", value: "Software Engineer" }
  ];
  return(
    <div className="max-w-[30rem] flex flex-col flex-1 gap-4 font-semibold">
      <h1 className="text-gray-500 text-xl pl-2">Payment details</h1>

      <table className="table-auto w-full text-left border-collapse">
        <tbody>
          <tr className="border-t">
            <th className="whitespace-nowrap px-4 py-2">Total MRP</th>
            <td className="text-end px-2 py-2">₹{MRP}</td>
          </tr>

          <tr>
            <th className="whitespace-nowrap px-4 py-2">Discount</th>
            <td className="text-end px-2 py-2">- ₹{discount}</td>
          </tr>

          <tr>
            <th className="whitespace-nowrap px-4 py-2">Shipping/Delivery Charges</th>
            <td className="text-end px-2 py-2">₹{deliveryCharges}</td>
          </tr>

          <tr className="border-t">
            <th className="whitespace-nowrap px-4 py-2">Total Amount</th>
            <td className="text-end px-2 py-2">₹{totalAmount}</td>
          </tr>

          <tr className="text-green-600 bg-green-100">
            <th className="whitespace-nowrap px-4 py-2">Total Savings</th>
            <td className="text-end px-2 py-2">₹{(totalAmount - MRP).toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PaymentDetails;