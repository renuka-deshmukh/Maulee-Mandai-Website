import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // store all registered users
  const [loggedUser, setLoggedUser] = useState(null);

  const navigate = useNavigate();

  // login function
  function login(number, password) {
    const foundUser = users.find(
      (u) => u.pnumber === number && u.password === password
    );

    if (foundUser) {
      setLoggedUser(foundUser);
      localStorage.setItem("loggedUser", JSON.stringify(foundUser)); // persist session
      return "Login Successful";
    } else {
      setLoggedUser(null);
      return "Invalid number or password";
    }
  }

  // logout function
  function logout() {
    setLoggedUser(null);
    localStorage.removeItem("loggedUser");
    navigate("/login");
  }

  // load users from localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);

    // restore session if loggedUser exists
    const storedLoggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    if (storedLoggedUser) {
      setLoggedUser(storedLoggedUser);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
