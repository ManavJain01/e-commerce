// Importing React Files
import { useState, useEffect, useMemo } from 'react'

import { useSelector } from 'react-redux'

function PaymentDetails({ reduxItems, cartItems }){
  const [totalMRP, setTotalMRP] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [deliveryCharges, setDeliveryCharges] = useState((50).toFixed(2))
  const [totalPayable, setTotalPayable] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0) 

  const [totalQuantities, setTotalQuantities] = useState(0)
  
  // const medicineQTY = useSelector(state => state.cartItems)

  // console.log(medicineQTY)

  useEffect(() => {
    let tempMRP = 0
    let tempDiscount = 0
    reduxItems.map((item) => {
      tempMRP += (item.list.MRP * item.cartQty)
      tempDiscount += (item.list.MRP)*.15
    })
    
    setTotalMRP(tempMRP.toFixed(2))
    setDiscount(tempDiscount.toFixed(2))
  
  },[cartItems])
  
  
  useMemo(() => {
    setTotalAmount((totalMRP - discount).toFixed(2))
  },[totalMRP])
  
  useMemo(() => {
    setTotalPayable((totalAmount - deliveryCharges).toFixed(2))
    setTotalSavings(discount)
  },[totalAmount])

  return(
    <div className="max-w-[30rem] px-10 flex flex-col flex-1 gap-4 font-semibold">
      <h1 className="text-gray-500 text-xl pl-2">Payment details</h1>

      <section className="flex flex-col gap-2">
        <span className="pl-2 flex justify-between">Total MRP <span>rs.{totalMRP}</span></span>
        <span className="pl-2 flex justify-between">Discount <span>- rs.{discount}</span></span>
        <span className="pl-2 flex justify-between">Total Amount <span>rs.{totalAmount}</span></span>
        <span className="pl-2 flex justify-between">Shipping/Delivery Charges <span>rs.{deliveryCharges}</span></span>
      </section>

      <span className="text-blue-400 pl-2 flex justify-between">Total Payable <span>rs.{totalPayable}</span></span>
      <span className="text-green-600 bg-green-100 px-2 py-1 rounded-mg flex justify-between">Total Savings <span>- rs.{totalSavings}</span></span>
    </div>
  )
}

export default PaymentDetails;