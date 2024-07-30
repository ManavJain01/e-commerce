// Importing Axios Packages
import axios from 'axios'

// Add To Cart
export const AddToCart = async (data) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/AddToCart`, {id: localStorage.getItem("authToken"), data: data})

    if (response.status !== 200) {
      throw new Error('Failed to Add To Cart');
    }
    
  } catch (error) {
    console.log("Error while Adding in the cart: ", error);
  }
}

// Update Cart
export const UpdateCart = async (data, id) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/UpdatingCart`, {id: localStorage.getItem("authToken"), itemId: id, data: data});

    if (response.status !== 200) {
      throw new Error('Failed to Update the Cart');
    }
    
  } catch (error) {
    console.log("Error while Updating the cart: ", error);
  }
}

// Delete From Cart
export const DeleteFromCart = async (id) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_LOCATION}/deleteFromCart`, {id: localStorage.getItem("authToken"), itemId: id});

    if (response.status !== 200) {
      throw new Error('Failed to Delete From the Cart');
    }
    
  } catch (error) {
    console.log("Error while Deleting From the Cart: ", error);
  }
}