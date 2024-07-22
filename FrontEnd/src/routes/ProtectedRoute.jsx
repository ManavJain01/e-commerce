// Import React Packages
import { Navigate } from 'react-router-dom';

// Import Local Files
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/" />
};

export default ProtectedRoute;