// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { setLoading, resetLoading } from '../Redux/features/stateSlice'
import { addUser } from '../Redux/features/userSlice'

// Importing Services
import { fetchCustomer } from '../service/userService';

// Importing Custom Hooks
import { useUserServices } from './useUserServices';

// Import useAuth
import { useAuth } from '../routes/AuthContext'

export const useLogin = () => {
  // custom Hooks
  const { getCartItems } = useUserServices();

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

      if(localStorage.getItem('authToken')){
        await getCartItems();

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