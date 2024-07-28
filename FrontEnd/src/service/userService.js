// Importing Axios Packages
import axios from 'axios'

// get Customer
export const fetchCustomer = async (phone) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Customer`, { phone: phone, location: "No"})
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch Customer');
    }
    
    const data = response.data.data;

    const responseData = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/CustomerData`, { _id: data._id })

    if (responseData.status !== 200) {
      throw new Error('Failed to fetch Customer Data');
    }

    return response.data;
  } catch (error) {
    console.log('Error fetching Customer:', error);
    return {};
  }
}

// Update Customer
export const updateCustomer = async (data) => {
  try {
    if(localStorage.getItem('authToken')){
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/UpdateCustomer`, data)
      
      if (response.status !== 200) {
        throw new Error('Failed to get Customer Updated');
      }
    }
  } catch (error) {
    console.log("Error Updating The Customer: ", error);
  }
}

// Cart
export const fetchCartItems = async () => {
  try {
    if(localStorage.getItem('authToken')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/cart`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch cart items');
      }

      // const data = await response.json();
      // return data;
      return response.data;
    }else{
      return [];
    }
  } catch (error) {
    console.log('Error fetching cart items:', error);
    return [];
  }
}

// Orders
export const fetchOrders = async () => {
  try {
    if(localStorage.getItem('authToken')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/orders`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch orders');
      }

      return response.data;
    }else{
      return [];
    }
  } catch (error) {
    console.log('Error fetching orders:', error);
    return [];
  }
}

// Refills
export const fetchRefills = async () => {
  try {
    if(localStorage.getItem('authToken')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/refills`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch refills');
      }

      return response.data;
    }else{
      return [];
    }
  } catch (error) {
    console.log('Error fetching refills:', error);
    return [];
  }
}

// SaveForLater
export const fetchSaveForLater = async () => {
  try {
    if(localStorage.getItem('authToken')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/saveForLater`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch saveForLater');
      }
      
      return response.data;
    }else{
      return [];
    }
  } catch (error) {
    console.log('Error fetching saveForLater:', error);
    return [];
  }
}