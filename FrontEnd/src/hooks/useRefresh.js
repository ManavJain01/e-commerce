// Importing Services


// Importing Hooks
import { useUserServices } from './useUserServices'

// Importing React Packages
import { useState } from 'react';

// Importing Redux Files
import { useDispatch } from "react-redux";
import { storeStates, setIsLogin } from '../Redux/features/stateSlice'

export const useRefresh = () => {
  // Custom Hooks
  const { getCartItems, getCustomer } = useUserServices();

  // useDispatch
  const dispatch = useDispatch();

  // UseState
  const [loading, setLoading] = useState(false);

  // Functions
  const refresh = async (userName) => {
    try {
      setLoading(true);

      if(localStorage.getItem("authToken")){
        // redux
        dispatch(setIsLogin(true));
        dispatch(storeStates({stateName: "userName", state: userName || "User"}))
        await getCartItems();
        await getCustomer();
      }
    } catch (error) {
      console.error("Error Setting User Setup on Refresh: ", error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, refresh }
}