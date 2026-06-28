import {createContext, useState, useContext} from "react";

const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const login = (username, password)=>{
    // Simulate an API call for authentication
    if(username === "admin" && password === "123456"){
      const userData = {
        username,
        role: "admin",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  }

  const logout = ()=>{
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = ()=>useContext(AuthContext);