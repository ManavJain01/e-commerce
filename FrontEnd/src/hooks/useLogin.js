// Importing React Packages
import { useState } from 'react';

// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { creatingInitialState } from '../Redux/features/cartSlice'

// Importing Services
import { fetchCartItems } from '../service/userService';

// Import useAuth
import { useAuth } from '../routes/AuthContext'

// Importing Services
import { fetchCustomer } from '../service/userService'

export const useLogin = () => {
  // useAuth
  const { login:loggedIn } = useAuth();

  // useDispatch
  const dispatch = useDispatch();

  const login = async (ph) => {
    try {
      
      await fetchCustomer(ph);
      
      if(localStorage.getItem('authToken') && localStorage.getItem('id')){
        dispatch(creatingInitialState(await fetchCartItems()));  
      }
      
      await loggedIn();
    } catch (error) {
      
    }
  }

  return { login }
}