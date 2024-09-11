// Importing React Packages
import { useState } from 'react';

// Importing Services
import { getSignup, getLogin } from '../service/userService';

// Importing Custom Hooks
import { useUserServices } from './useUserServices'

export const useLogin = () => {
  // Hooks
  const { getCustomer, getCartItems } = useUserServices();

  // useState
  const [loading, setLoading] = useState(false);

  const login = async (ph) => {
    try {
      setLoading(true);   
      const customer = await getLogin(ph);
      
      // setting localStorage variables
      if(customer?.authToken) localStorage.setItem("authToken", customer.authToken);

      if(localStorage.getItem('authToken')){
        await getCartItems();
        await getCustomer();
      }
    } catch (error) {
      console.log("Error Loggin In: ", error);
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
        await getCartItems();
        await getCustomer();
      }
    } catch (error) {
      console.log("Error signing up: ", error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, login, signup }
}