// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { fetchCartItems } from '../service/userService';
import { fetchOrders } from '../service/userService';

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { creatingInitialState } from '../Redux/features/cartSlice'
import { setLoading, resetLoading } from '../Redux/features/stateSlice';

export const useUserServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  // UseStates

  const getCartItems = async () => {
    try {
      setLoading();
      dispatch(creatingInitialState(await fetchCartItems()));

    } catch (error) {
      console.log("Error Getting Cart Items: ", error);
    } finally {
      resetLoading();
    }
  }

  const getOrders = async () => {
    try {
      setLoading();
      const data = await fetchOrders();
  
      return data;
    } catch (error) {
      console.log("Error Getting Orders: ", error);
      return [];
    } finally {
      resetLoading();
    }
  }

  return { getCartItems, getOrders }
}