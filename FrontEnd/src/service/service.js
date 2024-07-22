// Importing Axios Packages
import axios from 'axios'

// Fetching Location
export const fetchInputLocation = async (input) => {
  try {
    let response = await fetch(`https://api.postalpincode.in/pincode/${input}`);
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch Location');
    }

    response = await response.json();
    return await response[0].PostOffice;

  } catch (error) {
    console.log("Error Fetching Location:", error);
    return []
  }
}

// Fetching Location
export const fetchCurrLocation = async () => {
  try {
    navigator.geolocation.getCurrentPosition(async pos=>{
      const {latitude,longitude} = pos.coords;
      let response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);

      if (response.status !== 200) {
        throw new Error('Failed to fetch Location');
      }

      response = await response.json();
      return response.address;
    })
  } catch (error) {
    console.log("Error Fetching Location:", error);
    return []
  }
}

// Fetching Health Article
export const fetchHealthArticle = async () => {
  try {
    let response = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=036a6dd7247c457d81bf018107237342")

    if (response.status !== 200) {
      throw new Error('Failed to fetch The Article');
    }

    response = await response.json();

    return response.articles;
  } catch (error) {
    console.log("Error Fetching The Article:", error);
    return []
  }
}

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