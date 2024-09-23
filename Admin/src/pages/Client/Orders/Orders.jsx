// Importing React Icons
import { TbColumns3 } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import { MdDensityMedium } from "react-icons/md";
import { PiExport } from "react-icons/pi";

// Importing React Packages
import { useEffect, useState } from "react";

// Importing Local Files
import Order from './components/Order'

// Importing Custom Hooks
import { useClient } from "../../../hooks/useClient";

export default function Orders() {
  // Custom Data
  const { loading, error, getOrders } = useClient();

  // useState
  const [orders, setOrders] = useState([]);
  const [userOrder, setUserOrder] = useState({showOrder: false, user: []});

  // useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getOrders();
      setOrders(response);
    }

    fetchUsers();
  }, []);

  if(!userOrder.showOrder) return (
    <div>
      <span>
        <h1 className="text-4xl font-bold">Orders</h1>
        <p className="text-green-600">All Orders History</p>
      </span>

      {/* Table */}
      <div className="w-fit mt-10">
        {/* filter options */}
        <div className="flex gap-8">
          <span className="flex items-center gap-2">
            <TbColumns3 />
            COLUMNS
          </span>

          <span className="flex items-center gap-2">
            <IoFilterSharp />
            FILTERS
          </span>

          <span className="flex items-center gap-2">
            <MdDensityMedium />
            DENSITY
          </span>

          <span className="flex items-center gap-2">
            <PiExport />
            EXPORT
          </span>
        </div>

        {/* table structure */}
        <table className="border-2 border-blue-800">
          {/* First row */}
          <thead>
            <tr className="bg-blue-800">
              <td className="py-2 px-5"><input type="checkbox" /></td>
              <td className="px-2">ID</td>
              <td className="whitespace-nowrap px-10">Register ID</td>
              <td className="whitespace-nowrap px-10">Name</td>
              <td className="whitespace-nowrap px-8">Phone Number</td>
              <td className="whitespace-nowrap px-8">Orders</td>

            </tr>
          </thead>
          {/* nth rows */}
          <tbody>
            {orders?.map((e, i) => {          
              return(
                <tr key={i} className="group border-b-[1px] border-gray-500">
                  <td className="py-5 px-5"><input type="checkbox" /></td>
                  <td className="group-hover:opacity-60 px-2">{i+1}</td>
                  <td className="group-hover:opacity-60 px-2">{e?._id}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-10">{e?.name || "User"}</td>
                  <td className="group-hover:opacity-60 whitespace-nowrap px-8">{e?.phone || "NaN"}</td>
                  <td className="px-6">
                    <button onClick={() => setUserOrder({showOrder: true, user: e})} className="bg-green-500 px-3 py-1 rounded-lg">Orders</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* last row */}
        <div className="px-8 py-1 bg-blue-800 flex gap-10 justify-end">
          <p>Rows per page: 100</p>
          <p>1-9 of 9</p>
          <p>{"<"}</p>
          <p>{">"}</p>
        </div>
      </div>
    </div>
  )
  else return (
    <Order user = {userOrder} setUserOrder={setUserOrder} />
  )
}