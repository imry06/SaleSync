import { createContext, useContext, useState } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  // login function to authenticate user and set user state
  const login = (username, password) => {

    if (username === "admin" && password === "password") {
      const userData = {
        username,
        role: "admin",
      };

      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    return false;
  };


  // logout function to clear user state and remove user from local storage

  const logout = ()=>{
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = ()=> useContext(AuthContext);
