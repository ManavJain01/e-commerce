// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { updateState, setIsLogin } from '../Redux/features/stateSlice'
import { creatingInitialState } from '../Redux/features/cartSlice'
import { removeUser } from '../Redux/features/userSlice'

// Import Custom Hooks
import { useAuth } from '../routes/AuthContext'
import { useServices } from './useServices'

export const useLogout = () => {
  // Custom Hooks
  const { setCart } = useServices();

  // useAuth
  const { logout:loggedOut } = useAuth();

  // useDispatch
  const dispatch = useDispatch();

  const logout = async (ph) => {
    try {
      localStorage.removeItem("authToken");
      dispatch(setIsLogin(false));
      await setCart();
      dispatch(updateState({stateName: "userName", message: "logging out"}));
      dispatch(removeUser());

      await loggedOut();
    } catch (error) {
      console.error("Error Loggin Out: ", error.message);
    }
  }

  return { logout }
}