// Importing React Packages
import { useState } from 'react';

// Importing Services
import { fetchInputLocation, fetchCurrLocation, fetchNavOptions, fetchSearchResult, fetchFilteres, fetchFilteredProducts, fetchAllProducts, fetchMedicines, fetchHealthArticle } from '../service/service'

// Importing Redux Files
import { useDispatch } from 'react-redux';
import { setLoading as setLoadingFeature, resetLoading } from '../Redux/features/stateSlice';
import { creatingInitialState } from '../Redux/features/cartSlice';

export const useServices = () => {
  // useDispatch
  const dispatch = useDispatch();

  // usseState
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const setCart = async () => {
    try {
      dispatch(setLoadingFeature());
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
      setLoading(true);
      // dispatch(setLoadingFeature());
      
      const response = await fetchNavOptions();
      return await response;
    } catch (error) {
      setError(error.message);
      console.error("Error Getting Nav Options:", error);
      return [];
    } finally {
      setLoading(false);
      // dispatch(resetLoading());
    }
  }

  const getFilters = async (MainCategory) => {
    try {
      setLoadingFeature(true);
      return await fetchFilteres(MainCategory);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const getFilteredProducts = async (props) => {
    try {
      setLoading(true);
      const res = await fetchFilteredProducts(props);
      
      if(Array.isArray(res)) return res;
      else return [];
    } catch (error) {
      setError(error.message);
      return [];
    } finally {
      setLoading(false);
    }
  }

  const getAllProducts = async () => {
    try {
      setLoading(true);
      return await fetchAllProducts();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const getMedicines = async () => {
    try {
      setLoading(true);
      return await fetchMedicines();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const getHealthArticle = async () => {
    try {
      setLoading(true);
      return await fetchHealthArticle();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const getSearchResult = async (query) => {
    try {
      setLoading(true);
      
      return await fetchSearchResult(query);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, setCart, getInputLocation, getCurrentLocation, getNavOptions, getFilters, getFilteredProducts, getAllProducts, getMedicines, getHealthArticle, getSearchResult }
}