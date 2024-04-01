// Importing Local Png Images
import secureLogo from '../Images/secure.png'
import securePaymentLogo from '../Images/secure-payment.png'
import returnLogo from '../Images/return.png'
import prescriptionLogo from '../Images/prescription.png'

// Importing Local Logos
import minus from '../Images/minus.png'
import plus from '../Images/plus.png'
import leftArrowLogo from '../Images/leftArrow.png'
import rightArrowLogo from '../Images/rightArrow.png'

// Importing React Files
import { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

// Importing redux Files
import {useDispatch} from 'react-redux' 
import { addToCart, removeFromCart } from '../../Redux/features/cartSlice'

function ProductCard2(){
  // const type = useParams().type
  // const {value} = useLocation().state;
  // console.log("props parameter value - " + type);
  // console.log("props state value - " + value1);
  
  //const {type} = useParams()
  const e = useLocation().state.value;

  const dispatch = useDispatch()

  const [ medicineQTY, setMedicineQTY ] = useState(0);
  const [ deliveryDate, setdeliveryDate ] = useState('Today');

  useEffect(() => {
    if(medicineQTY == 1){
      dispatch(addToCart(e))
    }else if(medicineQTY == 0){
      dispatch(removeFromCart(e))
    }
  },[medicineQTY])

  return(
    <div className='flex flex-col lg:flex-row gap-5 py-20 px-10 border border-gray-200 m-10 rounded-md shadow-md'>

      <div className="sticky flex justify-between py-2 px-10 border border-gray-200">
        <button><img src={leftArrowLogo} className="object-contain w-10" /></button>
        <img src={e.img} className="object-contain w-64" />
        <button><img src={rightArrowLogo} className="object-contain w-10" /></button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap /gap-10 justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-bold opacity-70">{e.name}</p>
            <p className="text-lg font-bold text-gray-400">{e.company}</p>
            <p className="text-lg">{e.Units}</p>
            <p className="text-lg font-semibold">MRP ₹{e.MRP}</p>
            <p className="text-gray-400 font-semibold">*MRP inclusive of all taxes</p>
          </div>
          {medicineQTY == 0
            ?<button onClick={()=>setMedicineQTY(1)} className="bg-blue-700 text-white text-lg font-semibold py-2 px-12 rounded-md active:opacity-80">ADD To Cart</button>
            :<section className="w-32 flex items-center justify-between px-3 py-1 border-2 border-gray-500 rounded-md">
                Qty:
                <button onClick={()=>{setMedicineQTY(medicineQTY-1)}}><img src={minus} className="object-contain w-4 active:opacity-80" /></button>
                {medicineQTY}
                <button onClick={()=>{setMedicineQTY(medicineQTY+1)}} ><img src={plus} className="object-contain w-4 active:opacity-80" /></button>
            </section>
          }
        </div>
        <div className="bg-green-100 px-5 py-1 rounded-lg">
          <p>Get it By <span className="font-bold">{deliveryDate}</span></p>
        </div>

        <div className="flex gap-[1%] justify-around bg-green-100 text-gray-600 py-2 px-2 rounded-md">
          <section className="flex items-center text-center border-r border-green-400">
            <img src={secureLogo} className="object-contain w-20" />
            <p>100% genuine medicines</p>
          </section>
          <section className="flex items-center text-center border-r border-green-400">
            <img src={securePaymentLogo} className="object-contain w-20" />
            <p>Safe & secure payments</p>
          </section>
          <section className="flex items-center text-center">
            <img src={returnLogo} className="object-contain w-20" />
            <p>10 days Easy returns</p>
          </section>
        </div>

        {e.prescription != 'required' ? ""
          :<div className="flex gap-2 items-center">
            <img src={prescriptionLogo} className="object-contain w-8" />
            <p className="text-gray-400 text-sm font-semibold">Prescription required for this medicine</p>
          </div>
        }
      </div>
    </div>
  )
}

export default ProductCard2;