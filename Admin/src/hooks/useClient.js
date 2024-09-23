// Importing Axios Packages
import axios from 'axios'

// Importing React Packages
import { useState } from 'react';

export const useClient = () => {
  // useState
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_Clients_Server_Location}/admin/orders`);
      
      if (response.status !== 200) {
        throw new Error('Failed to Fetch Orders');
      }

      return response.data;
    } catch (error) {
      if(error?.response?.data === "Orders not Found!!!"){
        setError("Orders not Found");
      }else{
        setError(error.response.data || error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  const getCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_Clients_Server_Location}/admin/users`);
      
      if (response.status !== 200) {
        throw new Error('Failed to Fetch Users');
      }

      return response.data;
    } catch (error) {
      if(error?.response?.data === "Users not Found!!!"){
        setError("Users not Found");
      }else{
        setError(error.response.data || error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  const getSubcategories = async (e) => {
    const category = e.target.value;
    try {
      setLoading(true);
      const data = await axios.post(`${import.meta.env.VITE_REACT_APP_Clients_Server_Location}/Categories/${category}}`, { data : category })
      return data;
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  const setDeliveryStatus = async (status, id) => {
    try {
      setLoading(true);
      const data = await axios.post(`${import.meta.env.VITE_REACT_APP_Clients_Server_Location}/admin/deliveryStatus`, { status : status, id: id })
      // return data;
      
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, getOrders, getCustomers, getSubcategories, setDeliveryStatus };
}