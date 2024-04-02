// Importing Local Icons
import minus from '../Images/minus.png'
import plus from '../Images/plus.png'

// Importing React Files
import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

// Importing redux Files
import {useDispatch, useSelector} from 'react-redux' 
import { addToCart, removeFromCart, updateCart, storeStates } from '../../Redux/features/cartSlice'

function ProductCard({ e, title }){
  const dispatch = useDispatch()
  const reduxItems = useSelector(state => state.cartItems)
  
  const [ medicineQTY, setMedicineQTY ] = useState(0);
  useMemo(() => {
    reduxItems.map((item) => {
      if(item.list.name === e.name) setMedicineQTY(item.cartQty)
    })
  },[])

  useEffect(() => {
    if(medicineQTY == 0)  dispatch(removeFromCart(e))
    else if(medicineQTY == 1) dispatch(addToCart(e))
  else{
    reduxItems.map((item) => {
      if(item.list.name === e.name) dispatch(updateCart({e,medicineQTY}))
    })
  }
  },[medicineQTY])

  // dispatch(storeStates(medicineQTY))

  if(title == 'Categories'){
    return(
      <div key={e.name} className="h-[19rem] w-[18rem] flex flex-col gap-2 border px-5 py-2 border-black rounded-md">
      <Link to='/Products/parameter-data' state={{value: e}} className='h-[19rem] flex flex-col items-center justify-around gap-5'>
        {e.img && <img src={e.img} className="object-contain /w-[20%] w-28" />}
        <div className="flex flex-col justify-between">
          <p className="font-bold">{e.name}</p>
          {e.MRP && <p className="font-semibold">MRP रु.{(e.MRP).toFixed(2)}</p>}
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
      <div key={e.name} className="h-[10rem] w-[30rem] flex flex-col border px-5 py-2 border-black rounded-md">
      <Link to='/Products/parameter-data' state={{value: e}} className='flex justify-around'>
        {e.img && <img src={e.img} className="object-contain w-16" />}
        <div className="m-auto ml-2 flex flex-col justify-between">
          <p className="font-bold">{e.name}</p>
          <p className="text-gray-400 text-sm">{e.company}</p>
          {e.Units && <p>{e.Units}</p>}
          {e.MRP && <p className="font-semibold">MRP रु.{(e.MRP).toFixed(2)}</p>}          
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

  return(
    <div key={e.name} className="h-[20rem] w-[30rem] flex flex-col gap-2 items-end border px-5 py-2 border-black rounded-md">
      <Link to='/Products/parameter-data' state={{value: e}} className='flex gap-5 justify-around'>
        {e.img && <img src={e.img} className="object-contain /w-[20%] w-40" />}
        <div className="flex flex-col justify-between">
          <p className="text-xl font-bold">{e.name}</p>
          <p className="text-gray-400 text-sm">{e.company}</p>
          {e.Units && <p>{e.Units}</p>}
          {e.MRP && <p className="font-bold">MRP रु.{(e.MRP).toFixed(2)}</p>}
          <p className="text-gray-400 text-sm">(inclusive of all taxes)</p>
          
        </div>
      </Link>

      {medicineQTY == 0
            ?<button onClick={()=>setMedicineQTY(medicineQTY+1)} className="bg-blue-700 text-white py-1 px-12 rounded-md active:opacity-80">ADD</button>
            :<section className="w-32 flex items-center justify-between px-3 py-1 border-2 border-gray-500 rounded-md">
                Qty:
                <button onClick={()=>[setMedicineQTY(medicineQTY-1)]}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
                {medicineQTY}
                <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
            </section>
      }
    </div>
  )
}

export default ProductCard;


 