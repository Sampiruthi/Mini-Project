import React, { createContext, useState, useEffect } from "react";
export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const fetchedUserId = "123";
      setUserId(fetchedUserId);
      localStorage.setItem("userId", fetchedUserId);
    }
  }, []);

  return (
    <UserContext.Provider value={{ userId}}>
      {children}
    </UserContext.Provider>
  );
};