import { useContext, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
// import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Verify = () => {

    const [searchParams] = useSearchParams();
    const success = searchParams.get("success")
    const orderId = searchParams.get("orderId");
    console.log("SearchParas: ", searchParams);
    const url = "http:localhost:3000"
    // const {url} = useContext(StoreContext);
    const navigate = useNavigate();

   const verifyPayment = async() =>{
    const response = await axios.post(url+"/api/order/verify",{success,orderId});
    if(response.data.success){
        navigate("/myorders");
    }
    else {
        navigate("/")
    }
   }

   useEffect (()=>{
        verifyPayment();
   },[])

  return (
    <div className='min-h-[12px] grid'>
        <div className='animate-rotate w-[100px] h-[100px] place-self-center border-[5px] border-t-green-600 rounded-full border-solid border-gray-400'>
          
        </div>

    </div>
  )
}

export default Verify