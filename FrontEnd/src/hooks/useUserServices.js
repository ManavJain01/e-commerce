// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { customerDetails, updateCustomer, fetchCartItems, fetchOrders, fetchRefills, paymentProcess, postPaymentProcess } from '../service/userService';

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { creatingInitialState } from '../Redux/features/cartSlice'
import { addUser } from '../Redux/features/userSlice'

export const useUserServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  // Customer
  const customerId = localStorage.getItem('authToken');

  // useState
  const [loading, setLoading] = useState(false);

  const getCustomer = async () => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        const customer = await customerDetails(customerId);

        dispatch(addUser({
          _id: customer._id,
          phone: customer.phone,
          name: customer?.name || "",
          email: customer?.email || "",
          age: customer?.age || "",
          gender: customer?.gender || "",
          address: customer?.address || ""
        }))

        return customer;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting The Customer: ", error);
    } finally {
      setLoading(false);
    }
  }

  const getCustomerUpdated = async (data) => {
    try {
      setLoading(true);

      if(customerId){
        await updateCustomer(data);
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Updating The Customer: ", error);
    } finally {
      setLoading(false);
    }
  }

  const getCartItems = async () => {
    try {
      setLoading(true);
      const customerId = localStorage.getItem('authToken');

      if(customerId){
        dispatch(creatingInitialState(await fetchCartItems(localStorage.getItem('authToken'))));
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting Cart Items: ", error);
    }  finally {
      setLoading(false);
    }
  }

  const getOrders = async () => {
    try {
      setLoading(true);

      if(customerId){
        const data = await fetchOrders(localStorage.getItem('authToken'));
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting Orders: ", error);
      return [];
    } finally {
      setLoading(false);
    }
  }

  const getRefills = async () => {
    try {
      setLoading(true);

      if(customerId){
        const data = await fetchRefills(customerId);
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting Refills: ", error);
      return [];
    } finally {
      setLoading(false);
    }
  }

  const makePayment = async (items) => {
    const customerId = localStorage.getItem('authToken');

    try {
      setLoading(true);
      
      if(customerId){
        const data = await paymentProcess(items, customerId);
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error While Payment Process: ", error.message);

    } finally {
      setLoading(false);
    }
  }

  const postPayment = async (status, id) => {
    try {
      setLoading(true);

      if(customerId){
        const data = await postPaymentProcess(status, customerId, id);
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.error("Error While Post Payment Process: ", error.message);

    } finally {
      setLoading(false);
    }
  }

  return { loading, getCustomer, getCustomerUpdated, getCartItems, getOrders, getRefills, makePayment, postPayment }
}