import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState("");

  // const getUserFromToken=()=>{

  // };

  useEffect(() => {
    const localToken = JSON.parse(localStorage.getItem("userInfo"));
    if (localToken) {
      setUser(localToken);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};

export default UserProvider;
