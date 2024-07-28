// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { creatingInitialState } from '../Redux/features/cartSlice'
import { setLoading, resetLoading } from '../Redux/features/stateSlice'
import { addUser } from '../Redux/features/userSlice'

// Importing Services
import { fetchCartItems, fetchCustomer } from '../service/userService';

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
      
      const customer = await fetchCustomer(ph);

      // setting localStorage variables
      localStorage.setItem("authToken", customer?.authToken);

      if(localStorage.getItem('authToken') && localStorage.getItem('id')){
        dispatch(creatingInitialState(await fetchCartItems())); 

        dispatch(addUser({
          id: customer.data._id,
          phone: customer.data.phone,
          name: customer.data?.name || "",
          email: customer.data?.email || "",
          age: customer.data?.age || "",
          gender: customer.data?.gender || "",
          address: customer.data?.address || ""
        }))
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