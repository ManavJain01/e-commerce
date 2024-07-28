// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { creatingInitialState } from '../Redux/features/cartSlice'
import { setLoading, resetLoading } from '../Redux/features/stateSlice'

// Importing Services
import { fetchCartItems } from '../service/userService';
import { fetchCustomer } from '../service/userService'

// Import useAuth
import { useAuth } from '../routes/AuthContext'

export const useLogin = () => {
  // useAuth
  const { login:loggedIn } = useAuth();

  // useDispatch
  const dispatch = useDispatch();

  const login = async (ph) => {
    try {
      dispatch(setLoading());
      
      await fetchCustomer(ph);
      
      if(localStorage.getItem('authToken') && localStorage.getItem('id')){
        dispatch(creatingInitialState(await fetchCartItems()));  
      }
      
      await loggedIn();
    } catch (error) {
      console.log("Error Loggin In: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  return { login }
}