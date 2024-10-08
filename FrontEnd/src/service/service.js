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
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(async pos=>{
      try {
        const {latitude, longitude} = pos.coords;
        let response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);

        if (response.status !== 200) {
          throw new Error('Failed to fetch Current Location');
        }

        response = await response.json();
        resolve({city: response.address.city || "", postcode: response.address.postcode || ""});
      } catch (error) {
        console.log("Error Fetching Current Location:", error);
        reject(error);
      }
    }, (error) => {
      console.log("Error Getting Geolocation:", error);
      reject(error);
    })
  })
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
    throw error;
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

// Fetching Search Results
export const fetchSearchResult = async (query) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/api/search`, { params: {query: query} });

    if (response.status !== 200) {
      throw new Error('Failed to fetch Results of Search');
    }

    return response.data; 
  } catch (error) {
    console.log("Error while fetching Search Result/s: ", error);
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

// Fetching Filters
export const fetchFilteres = async (data) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/filters`, { params: {title: data.title, category: data?.category, subCategory: data?.subCategory} });

    if (response.status !== 200) {
      throw new Error('Failed to fetch Filters');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
}

// Fetching Filtered Products
export const fetchFilteredProducts = async (category) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/Categories`, { params: { title: category?.title, category: category?.category, subCategory: category?.subCategory } })

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