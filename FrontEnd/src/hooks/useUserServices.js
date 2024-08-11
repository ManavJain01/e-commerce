// Importing React Packages

// Importing Services
import { customerDetails, updateCustomer, fetchCartItems, fetchOrders, fetchRefills, paymentProcess, postPaymentProcess } from '../service/userService';

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { setLoading, resetLoading } from '../Redux/features/stateSlice';
import { creatingInitialState } from '../Redux/features/cartSlice'
import { addUser } from '../Redux/features/userSlice'

export const useUserServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  const getCustomer = async () => {
    try {
      dispatch(setLoading());

      if(localStorage.getItem('authToken')){
        const customer = await customerDetails(localStorage.getItem('authToken'));

        dispatch(addUser({
          id: customer._id,
          phone: customer.phone,
          name: customer?.name || "",
          email: customer?.email || "",
          age: customer?.age || "",
          gender: customer?.gender || "",
          address: customer?.address || ""
        }))
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error Getting The Customer: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

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

  const makePayment = async (items) => {
    try {
      dispatch(setLoading());
      
      if(localStorage.getItem('authToken')){
        const data = await paymentProcess(items, localStorage.getItem('authToken'));
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error While Payment Process: ", error.message);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  const postPayment = async (status, id) => {
    try {
      dispatch(setLoading());
      
      if(localStorage.getItem('authToken')){
        const data = await postPaymentProcess(status, id);
        return data;
      } else {
        throw new Error('Token Not Found!!!');
      }
    } catch (error) {
      console.log("Error While Post Payment Process: ", error.message);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  return { getCustomer, getCustomerUpdated, getCartItems, getOrders, getRefills, makePayment, postPayment }
}