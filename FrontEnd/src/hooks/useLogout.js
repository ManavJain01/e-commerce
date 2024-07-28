// Importing React-Redux Packages
import { useDispatch } from 'react-redux'

// importing local redux files
import { updateState, setLoading, resetLoading } from '../Redux/features/stateSlice'
import { creatingInitialState } from '../Redux/features/cartSlice'
import { removeUser } from '../Redux/features/userSlice'

// Import Custom Hooks
import { useAuth } from '../routes/AuthContext'

export const useLogout = () => {
  // useAuth
  const { logout:loggedOut } = useAuth();

  // useDispatch
  const dispatch = useDispatch();

  const logout = async (ph) => {
    try {
      dispatch(setLoading());
      
      localStorage.removeItem("authToken");
      
      dispatch(creatingInitialState({cart: []}));
      dispatch(updateState({stateName: "userName", message: "logging out"}));
      dispatch(removeUser());

      await loggedOut();
    } catch (error) {
      console.log("Error Loggin Out: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  return { logout }
}