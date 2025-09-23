import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  function login(pnumber, password) {
  if (users && users.pnumber === pnumber && users.password === password) {
    setLoggedUser({ name: users.name, email: users.email });
    alert("Login Successful...");
    navigate("/")
  } else {
    setLoggedUser(null);
    alert("Invalid credentials");
  }
}


  function logout() {
    setLoggedUser(null);
    navigate("/login");
  }

 useEffect(() => {
  const u = JSON.parse(localStorage.getItem("users"));
  if (u) {
    setUsers(u);
  }
}, []);


  return (
    <UserContext.Provider value={{ loggedUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
