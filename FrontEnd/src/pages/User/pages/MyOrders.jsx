// Importing react icons
import { LuPackageX } from "react-icons/lu";

// Importing React Packages
import { useState, useEffect } from "react"

// Importing Custom Hooks
import { useUserServices } from '../../../hooks/useUserServices'

// Importing local files
import Orders from "./My Orders/Orders";
import ShowOrder from "./My Orders/ShowOrder";

export default function MyOrders() {
  // Custom Hooks
  const { getOrders } = useUserServices();

  // UseStates
  const [orders, setOrders] = useState([])
  const [showOrder, setShowOrder] = useState({visible: false});
  const [isUpdated, setIsUpdated] = useState(false);
  const [orderType, setOrderType] = useState("5");

  // useEffect
  useEffect(() => {
    const SetOrders = async () => {
      const response = await getOrders();
      
      setOrders(response);
    }
    
    SetOrders();
  }, [isUpdated, showOrder])
  
  if(showOrder.visible) return(
    <ShowOrder showOrder={showOrder} setShowOrder={setShowOrder} />
  )
  else
  return (
    <div className="w-full py-20 flex flex-col gap-20">
      <div className="px-10 flex justify-between">
        <p className="text-4xl font-semibold">My Orders</p>

        <select name="orders" id="orders" defaultValue='5' onChange={(e) => setOrderType(e.target.value)} className="text-xl font-semibold py-2 px-5 border-2 border-blue-400 rounded-md outline-none">
          <option value="1">Order Delivered</option>
          <option value="2">Order Active</option>
          <option value="3">Order Canceled</option>
          <option value="4">Order pending</option>
          <option value="5">All Orders</option>
        </select>
      </div>

      <div className="flex gap-5">
        <div className="flex-1">
          {Array.isArray(orders) && orders.length !== 0
            ? <Orders orders={orders} setShowOrder={setShowOrder} orderType={orderType} isUpdated={isUpdated} setIsUpdated={setIsUpdated} />
            : <div className="py-10 flex flex-col items-center gap-5">
                <LuPackageX className="size-80 text-blue-300" />
                <p className="text-xl font-bold">No Orders yet. Start Ordering!</p>
                <button className="text-2xl font-semibold text-white bg-green-500 px-8 py-2 rounded-md">Add Medicine</button>
              </div>
          }
        </div>

        {Array.isArray(orders) && orders.length == 0
          &&<div className="flex-1">
            <div className="mx-10 px-5 flex flex-col justify-between gap-5 border-2 border-gray-300 rounded-md">
              <div>
                <h1 className="font-semibold text-lg">Upload prescription and get medicines</h1>
                <p className="font-semibold text-sm text-gray-400">Quick Buy! Place an order in a single click by uploading a valid prescription.</p>
              </div>

              <button className="text-2xl text-semibold text-blue-600 underline my-5">Upload Prescription</button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}