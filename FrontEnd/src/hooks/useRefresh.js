// Importing Services


// Importing Hooks
import { useUserServices } from './useUserServices'

// Importing Redux Files
import { useDispatch } from "react-redux";
import { storeStates } from '../Redux/features/stateSlice'
import { setLoading, resetLoading } from '../Redux/features/stateSlice';

export const useRefresh = () => {
  // Custom Hooks
  const { getCartItems, getCustomer } = useUserServices();

  // useDispatch
  const dispatch = useDispatch();

  const refresh = async (userName) => {
    try {
      dispatch(setLoading());

      if(localStorage.getItem("authToken")){
        // redux
        dispatch(storeStates({stateName: "userName", state: userName || "User"}))
        await getCartItems();
        await getCustomer();
      }
    } catch (error) {
      console.log("Error Setting User Setup on Refresh: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  return { refresh }
}