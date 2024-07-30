// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { updateCustomer, fetchCartItems, fetchOrders, fetchRefills } from '../service/userService';

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

      if(localStorage.getItem('authToken')){
        await updateCustomer(data);
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Updating The Customer: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  const getCartItems = async () => {
    try {
      dispatch(setLoading());

      if(localStorage.getItem('authToken')){
        dispatch(creatingInitialState(await fetchCartItems(localStorage.getItem('authToken'))));
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting Cart Items: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  const getOrders = async () => {
    try {
      dispatch(setLoading());
      
      if(localStorage.getItem('authToken')){
        const data = await fetchOrders(localStorage.getItem('authToken'));
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting Orders: ", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  const getRefills = async () => {
    try {
      dispatch(setLoading());
      
      if(localStorage.getItem('authToken')){
        const data = await fetchRefills(localStorage.getItem('authToken'));
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting Refills: ", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  return { getCustomerUpdated, getCartItems, getOrders, getRefills }
}