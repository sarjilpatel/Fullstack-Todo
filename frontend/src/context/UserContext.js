import React, { createContext, useContext, useState } from "react";

const User = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [counter, setCounter] = useState(0);

  return (
    <User.Provider
      value={{
        user,
        setUser,
        todos,
        setTodos,
        isAuthenticated,
        setIsAuthenticated,
        loading,
        setLoading,
        theme,
        setTheme,
        counter,
        setCounter,
      }}
    >
      {children}
    </User.Provider>
  );
};

export const UserState = () => {
  return useContext(User);
};

export default UserContext;
