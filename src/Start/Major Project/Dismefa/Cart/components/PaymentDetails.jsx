// Importing React Files
import { useState, useEffect } from 'react'

let allMRP = 0 //"mrp" * "qty"
let allDiscount = 0 //"qty" * "discount"

function PaymentDetails({ reduxItems, cartItems }){
  const [totalMRP, setTotalMRP] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [deliveryCharges, setDeliveryCharges] = useState(50)
  const [totalPayable, setTotalPayable] = useState(0)
  const [totalSavings, setTotalSavings] = useState(0) 

  // const totalMRP = 0
  // const discount = 0
  // const totalAmount = 0
  // const deliveryCharges = 0
  // const totalPayable = 0
  // const [totalSavings, setTotalSavings] = useState(0) 

  useEffect(function calculateMRP(){
    // allMRP = 500;
    // allDiscount = 58    

    // setTotalMRP(allMRP);
    // setDiscount(allDiscount);
    // paymentAmount();

    reduxItems.map((item) => {
      setTotalMRP(totalMRP + item.list.MRP)
      setDiscount(discount + ((item.list.MRP)*.15).toFixed(2))
      paymentAmount()
    })

  },[cartItems])

  function paymentAmount(){
    setTotalAmount(totalMRP - discount)
    setTotalPayable(totalAmount - deliveryCharges)
    setTotalSavings(discount)
  }

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