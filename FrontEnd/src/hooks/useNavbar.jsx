import LoadingScreen from '../components/loading/LoadingScreen'

// Importing React Packages
import { useState, useEffect } from 'react';

// Importing Services
import { fetchNavOptions } from '../service/service'

const useNavbar = () => {
  // UseStates
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const setCartState = async () => {
      try {
        setLoading(true);

        const response = await fetchNavOptions();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    setCartState();
  }, [])

  return { loading, data }
}

export default useNavbar;
