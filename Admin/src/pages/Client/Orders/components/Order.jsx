// Importing React Icons
import { IoChevronBackOutline } from "react-icons/io5";

// Importing React Packages
import { useState } from "react";

// Importing Local Files
import Products from "./Products";
import OrderTable from "./OrderTable";

export default function Order({ user = [], setUserOrder }) {
  // useState
  const [currOrderProducts, setCurrOrderProducts] = useState({showProducts: false, products: []});

  if(!currOrderProducts.showProducts)return (
    <div className="flex flex-col gap-5">
      <button onClick={() => setUserOrder({showOrder: false, user:[]})} className="text-xl hover:text-blue-500 active:text-blue-600 flex items-center">
        <IoChevronBackOutline className="size-8" />
        <span>Go Back</span>
      </button>

      <div className="pl-8 flex flex-col gap-5">
        {/* User Credentials */}
        <div className="text-xl text-green-500">
          <p>User id: {user?.user?._id}</p>
          <p>Phone Number: {user?.user?.phone}</p>
        </div>

        <table className="border-2 border-blue-800">
          {/* First row */}
          <thead>
            <tr className="bg-blue-800">
              <td className="py-2 px-5"><input type="checkbox" /></td>
              <td className="px-2">ID</td>
              <td className="whitespace-nowrap px-10">Order ID</td>
              <td className="whitespace-nowrap px-8">Payment Status</td>
              <td className="whitespace-nowrap">Delivery Status</td>
              <td className="whitespace-nowrap px-8">Order Time</td>
              <td className="whitespace-nowrap">Products</td>

            </tr>
          </thead>
          {/* nth rows */}
          <tbody>
            {user?.user?.orders?.map((e, i) => {
              return(
                <OrderTable key={i} order={e} index={i} setCurrOrderProducts={setCurrOrderProducts} />
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
  else return(
    <Products products={currOrderProducts} setCurrOrderProducts={setCurrOrderProducts} />
  )
}