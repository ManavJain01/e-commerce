// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { updateState } from '../Redux/features/stateSlice'
import { creatingInitialState } from '../Redux/features/cartSlice'

// Import Custom Hooks
import { useAuth } from '../routes/AuthContext'

export const useLogout = () => {
  // useAuth
  const { logout:loggedOut } = useAuth();

  // useDispatch
  const dispatch = useDispatch();

  const logout = async (ph) => {
    try {
      console.log("Loggin Out");
      localStorage.removeItem("authToken");
      localStorage.removeItem("phoneNumber");
      localStorage.removeItem("name");

      dispatch(creatingInitialState({cart: []}));

      dispatch(updateState({stateName: "userName", message: "logging out"}));
      
      await loggedOut();
    } catch (error) {
      console.log("Error Loggin Out: ", error);
    }
  }

  return { logout }
}