// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { fetchOrders } from '../service/userService';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getOrders = async () => {
      setLoading(true);
      try {
        const data = await fetchOrders();
        setOrders(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getOrders();
  }, []);

  return { orders, loading, error }
}

export default useCart;