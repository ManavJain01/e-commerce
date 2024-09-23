// Importing React Packages
import { useState } from "react";

// Importing Custom Hooks
import { useClient } from "../../../../hooks/useClient";

export default function OrderTable({ order, index, setCurrOrderProducts }) {
  // Custom Data
  const { loading, error, setDeliveryStatus } = useClient();
    
  // useState
  const [selectedStatus, setSelectedStatus] = useState(order?.deliveryStatus || "Pending");
  const [darkTheme, setDarkTheme] = useState(true);

  // Functions
  const handleStatus = async (e, id) => {
    try {
      await setDeliveryStatus(e.target.value, id);
      setSelectedStatus(e.target.value);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <tr className="group border-b-[1px] border-gray-500">
      <td className="py-5 px-5"><input type="checkbox" /></td>
      <td className="group-hover:opacity-60 px-2">{index+1}</td>
      <td className="group-hover:opacity-60 px-2">{order?._id}</td>
      <td className="group-hover:opacity-60 whitespace-nowrap px-8">{order?.paymentStatus}</td>
      <td className="flex items-center gap-2 mt-3">
        <select name="status" id="status" value={selectedStatus} disabled={loading} onChange={(f)=>handleStatus(f, order?._id)} className="font-bold text-black text-xl bg-green-500 hover:bg-green-600 active:bg-green-700 flex flex-col gap-8 items-start h-fit p-1 rounded-lg">
          {loading
            ?<option value="loading">Loading...</option>
            :<>
              <option value="Pending" className={`${darkTheme ? "text-white bg-gray-900 hover:text-blue-500" : "text-black bg-[#fcecc4] hover:text-[#ca9509]"} text-start w-full px-5 py-2`}>Pending</option>
              <option value="Shipped" className={`${darkTheme ? "text-white bg-gray-900 hover:text-blue-500" : "text-black bg-[#fcecc4] hover:text-[#ca9509]"} text-start w-full px-5 py-2`}>Shipped</option>
              <option value="Delivered" className={`${darkTheme ? "text-white bg-gray-900 hover:text-blue-500" : "text-black bg-[#fcecc4] hover:text-[#ca9509]"} text-start w-full px-5 py-2`}>Delivered</option>
              <option value="Canceled" className={`${darkTheme ? "text-white bg-gray-900 hover:text-blue-500" : "text-black bg-[#fcecc4] hover:text-[#ca9509]"} text-start w-full px-5 py-2`}>Canceled</option>
            </>
          }
        </select>
      </td>
      <td className="group-hover:opacity-60 whitespace-nowrap px-8">{order?.orderTime}</td>
      <td className="pr-5">
        <button onClick={() => setCurrOrderProducts({showProducts: true, products:order?.products})} className="bg-green-500 hover:bg-green-600 active:bg-green-700 px-3 py-1 rounded-lg">Products</button>
      </td>
    </tr>
  )
}