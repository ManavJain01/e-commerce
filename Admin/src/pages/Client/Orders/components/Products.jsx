// Importing React Icons
import { IoChevronBackOutline } from "react-icons/io5";

export default function Products({ products, setCurrOrderProducts }) {  
  return (
    <div className="flex flex-col gap-5">
      <button onClick={() => setCurrOrderProducts({showProducts: false, products:[]})} className="text-xl hover:text-blue-500 active:text-blue-600 flex items-center">
        <IoChevronBackOutline className="size-8" />
        <span>Go Back</span>
      </button>

      <div className="flex flex-col gap-5">
        {products?.products?.map((e, i) => {
          return(
            <div key={i} className="bg-gray-500 bg-opacity-30 px-5 py-2 rounded-lg">
              <p>Cart Quantity: {e?.cartQty}</p>
              <p>Item {i+1}: {e?.list?.item}</p>
              <p>Company: {e?.list?.company}</p>
              <p>Packaging: {e?.list?.packaging}</p>
              <p>Price: {e?.list?.price}</p>
              <p>Quantity: {e?.list?.quantity}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}