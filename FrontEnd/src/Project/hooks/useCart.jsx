// Importing React Packages
import { useState, useEffect } from 'react';

// importing redux
import { useDispatch } from 'react-redux'
import { creatingInitialState } from '../Redux/features/cartSlice'

// Importing Services
import { fetchCartItems } from '../service/userService';

const useCart = () => {
  // useDispatch
  const dispatch = useDispatch();

  // UseStates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCartItems = async () => {
      setLoading(true);
      try {
        dispatch(creatingInitialState(await fetchCartItems()));

        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getCartItems();
  }, []);

  return { loading, error }
}

export default useCart;