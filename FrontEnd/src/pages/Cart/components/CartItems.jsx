// Importing Redux Files
import { useSelector } from 'react-redux'

// Importing Product Card
import ProductCard from '../../../components/Product Card/ProductCard'

export default function CartItems() {
  // UseSelector
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div className="w-[30rem] flex flex-col gap-2">
      <h1 className="font-bold text-2xl mb-5">{cartItems.length} Items in your Cart</h1>
      {
        cartItems.map((item, i) => (
          <ProductCard key={i} e={item.list} title="Cart" />
        ))
      }
    </div>
  )
}