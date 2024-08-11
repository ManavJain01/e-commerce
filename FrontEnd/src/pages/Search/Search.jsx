// Import React Icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

// Import React Packages
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useMemo } from "react";

// Importing Local Files
import Button from '../../components/common/Button'
import ProductCard from '../../components/Product Card/ProductCard'

export default function Search() {
  // useLocation
  const location = useLocation();

  const navigate = useNavigate();

  // data
  const { query, data } = location.state || { query: '', data: [] };

  // redux
  const cartItems = useSelector(state => state.cart.cartItems)

  // useState
  const [itemsInCart, setItemsInCart] = useState(cartItems.length);

  // useMemo
  useMemo(()=>{
    setItemsInCart(cartItems.length)
  },[cartItems])

  return (
    <div className="bg-blue-100 w-[100vw] min-h-[80vh] pt-16 px-10 flex gap-10 justify-between">
      <div className="flex flex-col gap-5">
        {query && <p>Search Results for: <span className="font-bold">{query}</span></p>}
        <div className="flex flex-col gap-5">
          {Object.keys(data).map((e) =>
            data[e]?.map((e, i) =>
              e.subitems ? e?.subitems?.map((e,i) => 
                <ProductCard key={i} e={e} title="search" /> 
              )

              :<ProductCard key={i} e={e} title="search" />
            )
          )}
        </div>
      </div>

      {query && itemsInCart > 0
        &&<div className="flex flex-col gap-3 w-[20rem] h-fit px-5 py-3 rounded-lg border border-blue-300">
          <span className="font-semibold text-lg">{itemsInCart} items in the cart</span>
          <Button onClick={() => navigate('/cart')} className="bg-blue-700 text-white w-full flex items-center justify-center gap-3 border-none">
            Proceed to Cart
            <IoIosArrowDroprightCircle className="size-6" />
          </Button>
        </div>
      }
    </div>
  )
}