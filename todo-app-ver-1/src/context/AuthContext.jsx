import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);

  const login = (userData) => {
    console.log("login Success");
    console.log(userData);
    setUser(userData);
  };

  const logout = () => {
    console.log("logout Success");
    console.log(userData);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user , login , logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;