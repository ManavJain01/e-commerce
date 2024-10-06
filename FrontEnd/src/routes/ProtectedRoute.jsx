// Import React Packages
import { Navigate } from 'react-router-dom';

// Import Local Files
import Loader from '../components/Loader/Loader';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated, loading } = useAuth();

  if(loading)
    return <Loader />

  return isAuthenticated ? element : <Navigate to="/" />
};

export default ProtectedRoute;