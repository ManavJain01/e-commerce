// importing redux
import { useDispatch } from 'react-redux'
import { updateState } from '../Redux/features/stateSlice'

import { creatingInitialState } from '../Redux/features/cartSlice'

// Importing Services
import { fetchCartItems } from '../service/userService';

// Cart
export const UserCartItems = () => {
  return async (dispatch) => {
    try {
      if(localStorage.getItem('authToken') && localStorage.getItem('id')){
        dispatch(creatingInitialState(await fetchCartItems()));  
      }
    } catch (error) {
      console.log('Error establishing cart items:', error);
    }
  }
}


// Loggin Out
export const LogOut = () => {
  return async (dispatch) => {
    try {
      console.log("COmes here");
      localStorage.removeItem("authToken");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("name");

      await dispatch(creatingInitialState({cart: []}));

      await dispatch(updateState({stateName: "userName", message: "logging out"}));
    } catch (error) {
      console.log("Error Loggin Out: ", error);
    }
  }
}