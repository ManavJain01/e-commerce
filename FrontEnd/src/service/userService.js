// Importing Axios Packages
import axios from 'axios'

// get Customer
export const fetchCustomer = async (phone) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Customer`, { phone: phone, location: "No"})
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch Customer');
    }

    return response.data;
  } catch (error) {
    console.log('Error fetching Customer:', error);
    return {};
  }
}

// Customer Details
export const customerDetails = async (id) => {
  try {    
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/CustomerDetails`, { params: {id: id}})

    if (response.status !== 200) {
      throw new Error('Failed to fetch Customer Details');
    }

    return response.data;
  } catch (error) {
    console.log('Error fetching Details:', error);
    return {};
  }
}

// Update Customer
export const updateCustomer = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/UpdateCustomer`, data)
    
    if (response.status !== 200) {
      throw new Error('Failed to get Customer Updated');
    }
  } catch (error) {
    console.log("Error Updating The Customer: ", error);
  }
}

// Cart
export const fetchCartItems = async (token) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/cart`, { params: { token: token }})
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch cart items');
    }

    return response.data;
  } catch (error) {
    console.log('Error fetching cart items:', error);
    return [];
  }
}

// Orders
export const fetchOrders = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/orders`, { params: { id: id }})
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch orders');
    }

    return response.data;
  } catch (error) {
    console.log('Error fetching orders:', error);
    return [];
  }
}

// Refills
export const fetchRefills = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/refills`, { params: { id: id }})
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch refills');
    }

    return response.data;
  } catch (error) {
    console.log('Error fetching refills:', error);
    return [];
  }
}

// SaveForLater
export const fetchSaveForLater = async () => {
  try {
    if(localStorage.getItem('authToken')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/saveForLater`, { params: { id: localStorage.getItem('authToken') }})
      
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