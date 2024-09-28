// Importing Services


// Importing Hooks
import { useUserServices } from './useUserServices'

// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Redux Files
import { useDispatch } from "react-redux";
import { storeStates, setIsLogin } from '../Redux/features/stateSlice'
import { setLoading, resetLoading } from '../Redux/features/stateSlice';

export const useRefresh = () => {
  // Custom Hooks
  const { getCartItems, getCustomer } = useUserServices();

  // useDispatch
  const dispatch = useDispatch();

  // Functions
  const refresh = async (userName) => {
    try {
      dispatch(setLoading());

      if(localStorage.getItem("authToken")){
        // redux
        dispatch(setIsLogin(true));
        dispatch(storeStates({stateName: "userName", state: userName || "User"}))
        await getCartItems();
        await getCustomer();
      }
    } catch (error) {
      console.log("Error Setting User Setup on Refresh: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  return { refresh }
}