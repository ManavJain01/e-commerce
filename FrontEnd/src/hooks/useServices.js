// Importing Services
import { fetchNavOptions, fetchFilteredProducts, fetchAllProducts, fetchMedicines, fetchHealthArticle } from '../service/service'

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { setLoading, resetLoading } from '../Redux/features/stateSlice';

export const useServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  const getNavOptions = async () => {
    try {
      dispatch(setLoading());

      const response = await fetchNavOptions();
      return await response;
    } catch (error) {
      console.log("Error Getting Nav Options:", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  const getFilteredProducts = async (props) => {
    try {
      dispatch(setLoading());
      return await fetchFilteredProducts(props)
    } catch (error) {
      console.log("Error Getting Filtered Products:", error);
      return {};
    } finally {
      dispatch(resetLoading());
    }
  }

  const getAllProducts = async () => {
    try {
      dispatch(setLoading());
      return await fetchAllProducts();
    } catch (error) {
      console.log("Error Getting All Products:", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  const getMedicines = async () => {
    try {
      dispatch(setLoading());
      return await fetchMedicines();
    } catch (error) {
      console.log("Error Getting Medicines:", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  const getHealthArticle = async () => {
    try {
      dispatch(setLoading());
      return await fetchHealthArticle();
    } catch (error) {
      console.log("Error Getting Health Articles:", error);
      return [];
    } finally {
      dispatch(resetLoading());
    }
  }

  return { getNavOptions, getFilteredProducts, getAllProducts, getMedicines, getHealthArticle }
}