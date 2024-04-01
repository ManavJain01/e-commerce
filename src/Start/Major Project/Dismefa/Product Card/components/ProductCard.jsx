// Importing Local Icons
import minus from '../Images/minus.png'
import plus from '../Images/plus.png'

// Importing React Files
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Importing redux Files
import {useDispatch} from 'react-redux' 
import { addToCart, removeFromCart } from '../../Redux/features/cartSlice'

function ProductCard({ e }){
  const dispatch = useDispatch()

  const [ medicineQTY, setMedicineQTY ] = useState(0);

  useEffect(() => {
    if(medicineQTY == 1){
      dispatch(addToCart(e))
    }else if(medicineQTY == 0){
      dispatch(removeFromCart(e))
    }
  },[medicineQTY])

  return(
    <div key={e.name} className="flex flex-col gap-2 items-end border px-5 py-2 border-black rounded-md">
      <Link to='/Products/parameter-data' state={{value: e}} className='flex gap-5'>
        {e.img && <img src={e.img} className="object-contain w-40" />}
        <div className="flex flex-col justify-between">
          <p className="text-xl font-bold">{e.name}</p>
          <p className="text-gray-400 text-sm">{e.company}</p>
          {e.Units && <p>{e.Units}</p>}
          {e.MRP && <p className="font-bold">MRP रु.{(e.MRP).toFixed(2)}</p>}
          <p className="text-gray-400 text-sm">(inclusive of all taxes)</p>
          
        </div>
      </Link>

      {medicineQTY == 0
            ?<button onClick={()=>setMedicineQTY(1)} className="bg-blue-700 text-white py-1 px-12 rounded-md active:opacity-80">ADD</button>
            :<section className="w-32 flex items-center justify-between px-3 py-1 border-2 border-gray-500 rounded-md">
                Qty:
                <button onClick={()=>{setMedicineQTY(medicineQTY-1)}}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
                {medicineQTY}
                <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
            </section>
      }
    </div>
  )
}

export default ProductCard;


 