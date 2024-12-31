// Importing React Packages
import { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios';

// Importing Custom Hooks
import { useUserServices } from '../../../hooks/useUserServices'

const Verify = () => {
    // Custom Hooks
    const { postPayment } = useUserServices();

    // useSearchParams
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const id = searchParams.get("id");

    // useNavigate
    const navigate = useNavigate();

    // useEffect
    useEffect (()=>{
        const verifyPayment = async () =>{
            if(success === "false") navigate("/");
            else if(success && id){                
                const response = await postPayment(success, id);

                if(response.status){
                    navigate("/User/myOrders");
                }
                else {
                    navigate("/");
                }
            }
        }

        verifyPayment();
   },[])

  return (
    <div className='min-h-[12px] my-20 grid place-content-center gap-12'>
        <span className='font-bold text-3xl text-green-800'>Verifying your order...</span>
        <div className='w-[100px] h-[100px] place-self-center border-[10px] border-t-green-800 rounded-full border-solid border-gray-400 animate-spin' />
    </div>
  )
}

export default Verify