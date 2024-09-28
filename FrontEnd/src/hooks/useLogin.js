// Importing React Packages
import { useState } from 'react';

// Importing Services
import { getSignup, getLogin } from '../service/userService';

// Importing Custom Hooks
import { useUserServices } from './useUserServices'

// Importing Redux files
import { useDispatch } from 'react-redux';
import { setIsLogin } from '../Redux/features/stateSlice';

export const useLogin = () => {
  // Hooks
  const { getCustomer, getCartItems } = useUserServices();

  // useDispatch
  const dispatch = useDispatch();

  // useState
  const [loading, setLoading] = useState(false);

  const login = async (ph) => {
    try {
      setLoading(true);   
      const customer = await getLogin(ph);
      
      // setting localStorage variables
      if(customer?.authToken) localStorage.setItem("authToken", customer.authToken);

      if(localStorage.getItem('authToken')){
        dispatch(setIsLogin(true));
        await getCartItems();
        await getCustomer();
      }
      return "success";
    } catch (error) {
      if(error?.response?.data === "User does not Exist"){
        return "User Not Found"
      }else if(error?.response?.data === "Password is Incorrect"){
        return "Password is incorrect"
      }else{
        console.error("Error Loggin In: ", error.response.data);
      }
    } finally {
      setLoading(false);
    }
  }

  const signup = async (ph) => {
    try {
      setLoading(true);   
      const customer = await getSignup(ph);
      
      // setting localStorage variables
      if(customer?.authToken) localStorage.setItem("authToken", customer.authToken);

      if(localStorage.getItem('authToken')){
        dispatch(setIsLogin(true));
        await getCartItems();
        await getCustomer();
      }
    } catch (error) {
      if(error?.response?.data === "User Already Exist"){
        return "User Already Exist"
      }else{
        console.error("Error signing up: ", error.response.data);
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, login, signup }
}