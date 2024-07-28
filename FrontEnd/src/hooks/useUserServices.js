// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { updateCustomer, fetchCartItems, fetchOrders } from '../service/userService';

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { creatingInitialState } from '../Redux/features/cartSlice'
import { setLoading, resetLoading } from '../Redux/features/stateSlice';

export const useUserServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  // UseStates

  const getCustomerUpdated = async (data) => {
    try {
      dispatch(setLoading());
      await updateCustomer(data);
    } catch (error) {
      console.log("Error Updating The Customer: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  const getCartItems = async () => {
    try {
      dispatch(setLoading());
      dispatch(creatingInitialState(await fetchCartItems()));

    } catch (error) {
      console.log("Error Getting Cart Items: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  const getOrders = async () => {
    try {
      dispatch(setLoading());
      const data = await fetchOrders();
  
      return data;
    } catch (error) {
      console.log("Error Getting Orders: ", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  return { getCustomerUpdated, getCartItems, getOrders }
}