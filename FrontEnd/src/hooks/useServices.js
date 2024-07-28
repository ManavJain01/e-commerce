// Importing Services
import { fetchNavOptions } from '../service/service'

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { setLoading, resetLoading } from '../Redux/features/stateSlice';

export const useServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  const setCartState = async () => {
    try {
      dispatch(setLoading());

      const response = await fetchNavOptions();
      return await response;
    } catch (error) {
      console.log("Error SettingCart State:", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  return { setCartState }
}