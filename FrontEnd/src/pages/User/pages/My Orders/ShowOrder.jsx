// Importing local files
import ProductCard from '../../../../components/Product Card/ProductCard'

// Importing Custom Hooks
import { useUserServices } from '../../../../hooks/useUserServices';

export default function ShowOrder({showOrder, setShowOrder}) {
  // Custom Hooks
  const { cancelOrder } = useUserServices();

  // Variables
  const addressContainer = showOrder?.order?.deliveryDetails?.address;
  const address = addressContainer?.houseNumber + ", " + addressContainer?.area + ", " + addressContainer?.landmark + ", " + addressContainer?.city + ", " + addressContainer?.state;

  // Functions
  const handleCancelOrder = async () => {
    await cancelOrder(showOrder?.order?._id);

    setShowOrder({visible: false});
  }

  return (
    <div className="text-xl flex flex-col gap-5 mt-40 mb-10 mr-10">
      <section className='flex flex-wrap gap-20 justify-end'>
        <button onClick={handleCancelOrder} className="text-white bg-red-400 px-5 py-2 rounded-md hover:bg-red-500">Cancel Order</button>
        <button onClick={() => setShowOrder({visible: false})} className="text-white bg-blue-400 px-5 py-2 rounded-md hover:bg-blue-500">Back</button>
      </section>
      
      <section className="flex flex-wrap gap-20">
        <p>Status: <span className="text-green-600">{showOrder.order.deliveryStatus}</span></p>
        <span>Order Date: {showOrder.order.orderTime}</span>
      </section>

      <span>Total Amount: Rs.{showOrder?.order?.totalAmount?.toFixed(2) || 0}</span>

      <div className="bg-blue-100 flex flex-col p-5 rounded-lg">
        <section className="flex gap-10 justify-between">
          <p><span className="font-semibold">Patient:</span> {showOrder?.order?.deliveryDetails?.patient?.name || "User"}</p>
          <p className="font-bold">{addressContainer?.saveas}</p>
          <p><span className="font-semibold">Pincode:</span> {addressContainer?.pincode}</p>
        </section>
        
        <p><span className="font-semibold">Address:</span> {address}</p>
      </div>

      <div className="flex flex-col gap-10">{showOrder.order.products.map((e, i) => {
        return(
          <ProductCard key={i} e={e.list} title="order" />
        )
      })}</div>
    </div>
  )
}