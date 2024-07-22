import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAutheticated] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("authToken")){
      setIsAutheticated(true);
    }
  }, [])

  const login = () => setIsAutheticated(true);
  const logout = () => setIsAutheticated(false);
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
