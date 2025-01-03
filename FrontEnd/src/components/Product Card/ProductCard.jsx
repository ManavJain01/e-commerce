// Importing Local Icons
import minus from './Images/minus.png'
import plus from './Images/plus.png'

// Importing React Icons
import { IoIosStar } from "react-icons/io";

// Importing React Files
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { IoImageOutline } from "react-icons/io5";

// Importing redux Files
import {useDispatch, useSelector} from 'react-redux' 
import { addToCart, removeFromCart, updateCart} from '../../Redux/features/cartSlice'

function ProductCard({ e, title, categoryId }){
  // Redux
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)

  // useState
  const [ medicineQTY, setMedicineQTY ] = useState(0);
  const [ averageReview, setAverageReview ] = useState(0);

  // useMemo
  useMemo(() => {
    cartItems.map((item) => {
      if(item.list.item === e.item) setMedicineQTY(item.cartQty)
    })
  },[])

  // useEffect
  useEffect(() => {
    if(medicineQTY == 0)  dispatch(removeFromCart(e))
    else if(medicineQTY == 1) dispatch(addToCart(e))
    else{
      cartItems.map((item) => {
        if(item.list.item === e.item) dispatch(updateCart({e,medicineQTY}))
      })
    }
  },[medicineQTY])

  useEffect(() => {
    let allReviews = 0;
  
    if(e?.reviews){
      e?.reviews.map((review) => {
        allReviews += Number(review);
      })

      const totalSize = e?.reviews?.length;
      
      
      allReviews = allReviews / totalSize;

      setAverageReview(allReviews);
      
    }
  },[e]);

  if(title == 'Categories' || title == 'MedicinePage'){
    return(
      <div key={e._id} className="h-[19rem] w-[16rem] flex flex-col gap-2 border px-5 py-2 border-black rounded-md">
      <Link to='/Products/parameter-data' state={{value: e, categoryId: categoryId}} className='h-[19rem] flex flex-col items-center justify-around'>
        {Array.isArray(e?.img) && e.img.length > 0 ? <img src={e.img[0]} className="object-contain w-48 h-32" /> 
        :<IoImageOutline className="object-contain w-48 h-32 text-blue-600" />}
        
        <div className="flex flex-col gap-1">
          <div className="text-sm flex flex-col justify-between">
            <p className="font-bold">{e.item}</p>
            {e.price && <p className="/font-semibold">MRP रु.{e.price}</p>}
          </div>

          {!isNaN(averageReview) && <div className="flex items-center gap-2">
            <p className="text-sm flex items-center">
              {Array.from({length: Math.ceil(averageReview)}, (_, i) => <IoIosStar key={i} className="size-4 text-yellow-500" />)}
            </p>
            
            <p className="text-xs text-blue-800">{e?.reviews?.length} ratings</p>
          </div>}
        </div>
      </Link>

      {medicineQTY == 0
        ?<button onClick={()=>setMedicineQTY(medicineQTY+1)} className="bg-blue-700 text-white mx-auto -mr-0 py-1 px-12 rounded-md active:opacity-80">ADD</button>
        :<section className="w-32 flex items-center justify-between px-3 py-1 mx-auto -mr-0 border-2 border-gray-500 rounded-md">
          Qty:
          <button onClick={()=>[setMedicineQTY(medicineQTY-1)]}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
          {medicineQTY}
          <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
        </section>
      }
    </div>
    )
  }

  if(title == 'Cart'){
    return(
      <div key={e._id} className="h-[11rem] w-[30rem] flex flex-col border px-5 py-2 border-black rounded-md">
      <Link to='/Products/parameter-data' state={{value: e, categoryId: categoryId}} className='flex justify-around'>
        {e.img ? <img src={e.img} className="object-contain w-28 h-28" /> : <IoImageOutline className='object-contain w-48 h-32 text-blue-600' />}
        <div className="m-auto ml-2 flex flex-col justify-between">
          <p className="font-bold">{e.item}</p>
          <p className="text-gray-400 text-sm">{e.company}</p>
          {e.packaging && <p>{e.packaging}</p>}
          {e.price && <p className="font-semibold">MRP रु.{e.price}</p>}          
        </div>
      </Link>

      {medicineQTY == 0
        ?<button onClick={()=>setMedicineQTY(medicineQTY+1)} className="bg-blue-700 text-white m-auto -mr-1 py-1 px-12 rounded-md active:opacity-80">ADD</button>
        :<section className="w-32 flex items-center justify-between m-auto -mr-1 px-3 py-1 border-2 border-gray-500 rounded-md">
          Qty:
          <button onClick={()=>[setMedicineQTY(medicineQTY-1)]}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
          {medicineQTY}
          <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
        </section>
      }
    </div>
    )
  }

  if(title == 'search')
    return(
      <div key={e._id} className="h-[11rem] w-[45rem] flex flex-col px-5 py-2 border border-gray-300 rounded-md">
      <Link to='/Products/parameter-data' state={{value: e, categoryId: categoryId}} className='flex justify-around'>
        {e.img ? <img src={e.img} className="object-contain w-28 h-28" /> : <IoImageOutline className='object-contain w-48 h-32 text-blue-600' />}
        <div className="m-auto ml-2 flex flex-col justify-between">
          <p className="font-bold">{e.item}</p>
          <p className="text-gray-400 text-sm">{e.company}</p>
          {e.packaging && <p>{e.packaging}</p>}
          {e.price && <p className="font-semibold">MRP रु.{e.price}</p>}          
        </div>
      </Link>

      {medicineQTY == 0
        ?<button onClick={()=>setMedicineQTY(medicineQTY+1)} className="bg-blue-700 text-white m-auto -mr-1 py-1 px-12 rounded-md active:opacity-80">ADD</button>
        :<section className="w-32 flex items-center justify-between m-auto -mr-1 px-3 py-1 border-2 border-gray-500 rounded-md">
          Qty:
          <button onClick={()=>[setMedicineQTY(medicineQTY-1)]}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
          {medicineQTY}
          <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
        </section>
      }
    </div>
    )

  if(title == 'order'){
    return(
    <div key={e._id} className="h-20 w-full flex flex-col justify-between px-5 py-2 border border-black rounded-lg">
      <p className="">{e.item}</p>
      {e.price && <p className="">MRP रु.{e.price}</p>}          
    </div>
    )
  }
}

export default ProductCard;


 