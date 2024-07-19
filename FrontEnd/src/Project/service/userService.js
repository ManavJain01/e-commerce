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

    // setting localStorage variables
    localStorage.setItem("authToken", response.data.authToken);
    localStorage.setItem("phoneNumber", data.phone);
    localStorage.setItem("name", data.name ? data.name : "");
    localStorage.setItem("id", data._id);

    const responseData = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/CustomerData`, { _id: data._id })

    if (responseData.status !== 200) {
      throw new Error('Failed to fetch Customer Data');
    }

    return data;
  } catch (error) {
    console.log('Error fetching Customer:', error);
    return {};
  }
}

// Cart
export const fetchCartItems = async () => {
  try {
    if(localStorage.getItem('authToken') && localStorage.getItem('id')){
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
    if(localStorage.getItem('authToken') && localStorage.getItem('id')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/orders`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch orders');
      }

      // const data = await response.json();
      // return data;
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
    if(localStorage.getItem('authToken') && localStorage.getItem('id')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/refills`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch refills');
      }

      // const data = await response.json();
      // return data;
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
    if(localStorage.getItem('authToken') && localStorage.getItem('id')){
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/saveForLater`, { params: { id: localStorage.getItem('id') }})
      
      if (response.status !== 200) {
        throw new Error('Failed to fetch saveForLater');
      }

      // const data = await response.json();
      // return data;
      return response.data;
    }else{
      return [];
    }
  } catch (error) {
    console.log('Error fetching saveForLater:', error);
    return [];
  }
}