// Importing local files
import ProductCard from '../../../../components/Product Card/ProductCard'

export default function ShowOrder({showOrder, setShowOrder}) {
  return (
    <div className="text-xl flex flex-col gap-5 mt-40 mb-10">
      <section className='flex flex-wrap gap-5 justify-between'>
        <span className="font-semibold">Order ID: {showOrder.order._id}</span>
        <button className="text-white bg-red-400 px-5 py-2 rounded-md hover:bg-red-500">Cancel Order</button>
        <button onClick={() => setShowOrder({visible: false})} className="text-white bg-blue-400 px-5 py-2 rounded-md hover:bg-blue-500">Back</button>
      </section>
      
      <section className="flex flex-wrap gap-20">
        <p>Status: <span className="text-green-600">{showOrder.order.deliveryStatus}</span></p>
        <span>Order Date: {showOrder.order.orderTime}</span>
      </section>

      <span>Total Amount: Rs.0.00</span>

      <div className="flex flex-col gap-10">{showOrder.order.products.map((e, i) => {
        return(
          <ProductCard key={i} e={e.list} title="order" />
        )
      })}</div>
    </div>
  )
}