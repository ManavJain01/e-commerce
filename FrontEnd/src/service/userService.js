// Importing Axios Packages
import axios from 'axios'

// Importing Stripe Packages
import { loadStripe } from '@stripe/stripe-js'

// signup
export const getSignup = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/signup`, data);
    
    if (response.status !== 200) {
      throw new Error('Failed to Signup');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// signup
export const getLogin = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/login`, data);
    
    if (response.status !== 200) {
      throw new Error('Failed to Login');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// get Customer
export const fetchCustomer = async (phone) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Customer`, { phone: phone });
    
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
    throw error.message;
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

// Stripe payment method
export const paymentProcess = async (reduxItems, userId) => {
  try {
    const stripe = await loadStripe(import.meta.env.VITE_REACT_APP_publishable_key);
    const body = {
      userId: userId,
      products: reduxItems,
    }
    const headers = {
      "Content-Type" : "application/json"
    }
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/stripe/create-checkout-session`,{
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    })

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId:session.id
    });

    if(result.error){
      console.log("result.error");
    }
  } catch (error) {
    throw error;
  }
}

// Post payment method
export const postPaymentProcess = async (status,customerId, id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/stripe/verify?status=${status}&id=${customerId}&orderId=${id}`);
    
    if (response.status !== 200) {
      throw new Error('Failed to Post Payment Process');
    }
    
    return response.data;
  } catch (error) {
    throw error;
  }
}