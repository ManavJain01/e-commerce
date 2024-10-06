// Importing Custom Hooks
import { useUserServices } from '../../../../hooks/useUserServices';

export default function Orders({orders=[], setShowOrder, orderType, isUpdated = false, setIsUpdated}) {
  // Custom Hooks
  const { cancelOrder } = useUserServices();

  // Functions
  const handleCancelOrder = async (id) => {
    await cancelOrder(id);
    setIsUpdated(!isUpdated);
  }

  return (
    <div className="">
      <table>
        <thead>
          <tr>
            <th className="w-1/3 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Order Date</th>
            <th className="w-1/3 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Status</th>
            <th className="w-1/3 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Total Amount</th>
            <th className="w-auto pr-12 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-sm font-medium text-gray-700 whitespace-nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders
          .filter(e => orderType === "5" && e
            || orderType === "4" && e?.deliveryStatus === "Pending"
            || orderType === "3" && e?.deliveryStatus === "Canceled"
            || orderType === "2" && e?.deliveryStatus === "Shipped"
            || orderType === "1" && e?.deliveryStatus === "Delivered"
          )
          .map((e, i) => {       
            return(
              <tr key={i} className="hover:bg-gray-100">
                <td className="py-4 border-b border-gray-200 text-sm text-gray-700">{e.orderTime}</td>
                <td className="py-4 border-b border-gray-200 text-sm text-gray-700">{e.deliveryStatus}</td>
                <td className="py-4 border-b border-gray-200 text-sm text-gray-700">{e?.totalAmount?.toFixed(2) || 'Rs.0'}</td>
                <td className="flex gap-2 pr-5 py-4 border-b border-gray-200 text-sm text-gray-700">
                  <button onClick={() => setShowOrder({visible: true, order:e})} className="text-blue-600">View</button>
                  <button onClick={() => handleCancelOrder(e?._id)} className="text-red-500">Cancel</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}