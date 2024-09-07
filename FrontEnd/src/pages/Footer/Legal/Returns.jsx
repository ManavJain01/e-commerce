function Returns(){
  return(
    <>
      <div className="mx-10 my-40 text-gray-600">
        <div>
          <h1 className="text-4xl font-bold">Returns & Cancellations Policy</h1>
          <span>Last Updated: Mar, 2024</span>
        </div>

        <div className="mt-10">
          <ul className="flex flex-col gap-5">
            <li><h2 className="text-2xl font-bold">Cancellation Policy</h2></li>
            <li><p className="text-lg font-semibold">How and When Can I Cancel My Order?</p></li>
            <li className="flex flex-col">
              <span>Orders can be cancelled at any stage.</span>
              <span>1. Pre-dispatch (Ready to ship)</span>
              <span>The customer can cancel the order from the Android App/website:</span>
            </li>
            <li><p className="text-lg font-semibold">Steps to cancel your order via the App/Website-</p></li>
            <li className="flex flex-col">
              <span>{"Orders -> Select order -> Order details tab -> Cancel order or by calling our Customer Service Representative at +91-8269543305(Between 9am-9pm, all 7 days)."}</span>
              <span>2. Post-Dispatch</span>
              <span>Customer has to connect with the customer service team on +91-8269543305. The refund (only online) will only be processed post the order is marked as Returned to Origin.
                The timeline will vary depending upon the status of the package. 
                Usually this process will take about 5 to 7 business days. 
                Refund will be initiated within 48hrs of Dismefas receiving the returned medicines.
              </span>
            </li>
          </ul>

          <ul className="mt-10 flex flex-col gap-5">
            <li><h2 className="text-2xl font-bold">Return Policy</h2></li>
            <li><p className="text-lg font-semibold">How to Initiate a Return?</p></li>
            <li className="flex flex-col">
              <span>* You can initiate a return request within 15 days of delivery by raising a ticket/request on the Android app/website from the "Help with my orders" section or by calling us on +91-8269543305.</span>
              <span>* Please check to see if the product(s) you wish to return are eligible for return (You can check if the product is returnable on the Product page of the item on either the app or the website).</span>
              <span>* Select the item you wish to return, specifying the quantity, reason for return</span>
              <span>* We may contact you to ascertain any damage or defects in the product prior to issuing a refund/replacement.
                If approved, your return request will be processed, and we will arrange for the return items to be picked up within 24-48 hours or on the specified pickup date.</span>
              <span>* Please ensure that the return package is ready in its original packing sent by Truemeds, along with a handwritten Invoice Number/ Order Number mentioned on the box/bag in which the products are returned.
                Alternatively you can also send our invoice in the return package to identify the order that the medicines belong to.</span>
              <span>* Once the package is received at the Dismefa warehouse (usually within 5 to 7 days), the returned medicine or products will be verified, and a refund will be initiated to your Truemeds Wallet (TM Wallet) within 48 hours of receiving the returned medicines.</span>
            </li>
            <li><p className="text-lg font-semibold">What Cannot Be Returned?</p></li>
            <li className="flex flex-col">
              <span>* Items cannot be returned if they have been opened, partially used, tampered with, or misused.
                Additionally, if the product packaging and/or packaging box and/or packaging seal have been tampered with, or if any accessories/add-ons/freebies supplied with the product are missing, the item cannot be returned.</span>
              <span>* Products related to personal care, baby care, healthcare devices (such as glucometers, glucometer strips/lancets, thermometers, oximeters, etc.), as well as all COVID essential products, are non-returnable.
                Also, all cold storage products are non-returnable due to temperature maintenance reasons.</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Returns;