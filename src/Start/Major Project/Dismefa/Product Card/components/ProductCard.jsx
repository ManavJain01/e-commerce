import minus from '../Images/minus.png'
import plus from '../Images/plus.png'

import { useState } from 'react'

function ProductCard({ e }){

  const [ medicineQTY, setMedicineQTY ] = useState(0);

  return(
    <div key={e.name} className='flex gap-5 px-5 py-2 border border-black rounded-md'>
      <img src={e.img} className="object-contain w-40" />
      <div className="flex flex-col justify-between">
        <p className="text-xl font-bold">{e.name}</p>
        <p className="text-gray-400 text-sm">{e.company}</p>
        <p>{e.Units}</p>
        <p className="font-bold">MRP रु.{(e.MRP).toFixed(2)}</p>
        <p className="text-gray-400 text-sm">(inclusive of all taxes)</p>
        {medicineQTY == 0
          ?<button onClick={()=>setMedicineQTY(1)} className="bg-blue-700 text-white py-1 px-5 rounded-md active:opacity-80">ADD</button>
          :<section className="w-32 flex items-center justify-between px-3 py-1 border-2 border-gray-500 rounded-md">
              Qty:
              <button onClick={()=>{setMedicineQTY(medicineQTY-1)}}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
              {medicineQTY}
              <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
          </section>
        }
      </div>
    </div>
  )
}

export default ProductCard;


 