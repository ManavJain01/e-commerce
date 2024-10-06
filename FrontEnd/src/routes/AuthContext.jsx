// Importing React Packages
import { createContext, useContext, useEffect, useState } from 'react'

// Importing React Redux
import { useSelector } from 'react-redux';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // redux
  const userStore = useSelector(state => state.user.user);

  // useState
  const [isAuthenticated, setIsAutheticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // useEffect
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    
    if(authToken || userStore){
      setIsAutheticated(true);
    } else {
      setIsAutheticated(false);
    }
    setLoading(false);
  }, [userStore])

  const login = () => setIsAutheticated(true);
  const logout = () => setIsAutheticated(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
