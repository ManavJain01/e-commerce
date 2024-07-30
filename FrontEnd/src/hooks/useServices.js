// Importing Services
import { fetchInputLocation, fetchCurrLocation, fetchNavOptions, fetchSearchResult, fetchFilteredProducts, fetchAllProducts, fetchMedicines, fetchHealthArticle } from '../service/service'

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { setLoading, resetLoading } from '../Redux/features/stateSlice';
import { creatingInitialState } from '../Redux/features/cartSlice';

export const useServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  const setCart = async () => {
    try {
      dispatch(setLoading());
      dispatch(creatingInitialState({cart: []}));
    } catch (error) {
      console.log("Error Setting Cart Items: ", error);
    } finally {
      dispatch(resetLoading());
    }
  }

  const getInputLocation = async (input) => {
    try {
      const response = await fetchInputLocation(input);
      return {pincode: response[0].Pincode, region: response[0].Region};
    } catch (error) {
      console.log("Error Getting Input Location Postcode: ", error);
    }
  }

  const getCurrentLocation = async () => {
    try {
      const response = await fetchCurrLocation();

      return response;
    } catch (error) {
      console.log("Error Getting Curr Location Postcode: ", error);
    }
  }

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

  const getSearchResult = async (query) => {
    try {
      return await fetchSearchResult(query);
    } catch (error) {
      console.log("Error Getting Search Result:", error);
      return "";
    }
  }

  return { setCart, getInputLocation, getCurrentLocation, getNavOptions, getFilteredProducts, getAllProducts, getMedicines, getHealthArticle, getSearchResult }
}