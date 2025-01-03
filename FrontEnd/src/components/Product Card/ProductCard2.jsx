// Importing React Icons
import { IoIosStar } from "react-icons/io";

// Importing Local Png Images
import secureLogo from './Images/secure.png'
import securePaymentLogo from './Images/secure-payment.png'
import returnLogo from './Images/return.png'
import prescriptionLogo from './Images/prescription.png'

// Importing Local Logos
import minus from './Images/minus.png'
import plus from './Images/plus.png'

// Importing Local Files
import CarouselTab from '../../pages/Home Page/components/CarouselTab'

// Importing React Files
import { useState, useEffect, useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { IoImageOutline } from "react-icons/io5";

// Importing redux Files
import { useDispatch, useSelector} from 'react-redux' 
import { addToCart, removeFromCart, updateCart } from '../../Redux/features/cartSlice'
import axios from 'axios'

function ProductCard2(){
  const e = useLocation().state.value;
  const categoryId = useLocation().state.categoryId;

  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)

  const slides = e.img;

  const [ deliveryDate, setdeliveryDate ] = useState('Today');
  const [ medicineQTY, setMedicineQTY ] = useState(0);
  const [ productReview, setProductReview ] = useState(1);
  const [ averageReview, setAverageReview ] = useState(0);
  
  useMemo(() => {
    cartItems.map((item) => {
      if(item.list.item === e.item) setMedicineQTY(item.cartQty)
    })
  },[])
  
  useEffect(() => {
    if(medicineQTY == 0)  dispatch(removeFromCart(e))
    else if(medicineQTY == 1) dispatch(addToCart(e))
    else{
      cartItems.map((item) => {
        if(item.list.item === e.item) dispatch(updateCart({e,medicineQTY}))
      })
    }
  },[medicineQTY]);




  useEffect(() => {
    let allReviews = 0;
  
    if(e.reviews){
      e.reviews.map((review) => {
        allReviews += Number(review);
      })

      const totalSize = e?.reviews?.length;
      
      
      allReviews = allReviews / totalSize;

      setAverageReview(allReviews);
      
    }
  },[e]);

  const addReview = async () => {
    const res = await axios.post("http://localhost:5000/addReview", {review: productReview, productId: e._id, item: e.item, categoryId: categoryId});
    
    if(!res.ok) console.error("Error Occured While adding review");

    console.log(res);
    
    
  }

  return(
    <div className='flex flex-col'>
      <div className='flex flex-col lg:flex-row gap-5 py-20 px-10 border border-gray-200 m-10 rounded-md shadow-md'>

        <div className="sticky flex justify-center py-2 px-10 border border-gray-200">
          { Array.isArray(e.img) && e.img.length > 0 ? <CarouselTab slides={slides} />
          :<IoImageOutline className='object-contain w-64 h-64 mt-10 text-blue-600' />}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap /gap-10 justify-between items-center">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold">{e.item}</p>
              <p className="text-lg font-bold text-gray-400">{e.company}</p>
              <p className="text-lg">{e.packaging}</p>
              <p className="text-lg font-semibold">MRP ₹ {e.price}</p>
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
       
          <div>
            <p className="text-xl flex items-center gap-4">
              Average Review:
              {Array.from({length: Math.ceil(averageReview)}, (_, i) => <IoIosStar key={i} className="size-5 text-yellow-500 rounded-full" />)}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <span>Add Reviews: </span>

            <div className="flex items-center gap-3">
              <button onClick={() => setProductReview(1)}><IoIosStar className={`size-5 ${productReview >= 1 && "text-yellow-500 rounded-full"}`} /></button>
              <button onClick={() => setProductReview(2)}><IoIosStar className={`size-5 ${productReview >= 2 && "text-yellow-500 rounded-full"}`} /></button>
              <button onClick={() => setProductReview(3)}><IoIosStar className={`size-5 ${productReview >= 3 && "text-yellow-500 rounded-full"}`} /></button>
              <button onClick={() => setProductReview(4)}><IoIosStar className={`size-5 ${productReview >= 4 && "text-yellow-500 rounded-full"}`} /></button>
              <button onClick={() => setProductReview(5)}><IoIosStar className={`size-5 ${productReview >= 5 && "text-yellow-500 rounded-full"}`} /></button>
            </div>

            <button onClick={() => addReview()} className='bg-green-500 text-white px-5 py-2 rounded-lg'>Give Review</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard2;