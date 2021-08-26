import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // executed after every component reevaluation if dependencies changed
  useEffect(
    () => {
      // check if user is logged in through local storage
      const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

      if (storedUserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
    },
    // runs once since empty dependencies only change once (undefined -> empty dependencies)
    []
  );

  const logoutHandler = () => {
    // store info about logout in local storage
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    // store info about login in local storage
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
