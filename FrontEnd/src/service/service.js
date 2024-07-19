// Importing Axios Packages
import axios from 'axios'

// Fetching NavOptions
export const fetchNavOptions = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/NavOptions`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch Nav Options');
    }

    return response.data;
    
  } catch (error) {
    console.log("Error while fetching NavOptions: ", error);
    return {};
  }
}

// Fetching Medicines
export const fetchMedicines = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Medicines`)

    if (response.status !== 200) {
      throw new Error('Failed to fetch Medicines');
    }

    return response.data; 
  } catch (error) {
    console.log("Error while fetching Medicines: ", error);
    return [];
  }
}

// Fetching Filtered Products
export const fetchFilteredProducts = async (category) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Categories/${category[0]}`, { data : category })

    if (response.status !== 200) {
      throw new Error('Failed to fetch Filtered Products');
    }

    return response.data;

  } catch (error) {
    console.log("Error while fetching filtered products: ", error);
    return {};
  }
}

// Fetching All Products
export const fetchAllProducts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Categories/`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch All Products');
    }

    return response.data;

  } catch (error) {
    console.log("Error while fetching All products: ", error);
    return {};
  }
}

// Stripe payment method
export const makePayment = async () => {
  try {
    const stripe = await loadStripe(import.meta.env.VITE_REACT_APP_publishable_key);
    const body = {
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

    // if(result.error){
    //   console.log("result.error");
    // }
  } catch (error) {
    console.log('Error while making payment:', error);
    return {};
  }
}