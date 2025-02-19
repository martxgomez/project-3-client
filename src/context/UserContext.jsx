//IMPORTS
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/auth/verify`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          const user = response.data;

          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authUser();
  };

  useEffect(() => {
    authUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ isLoggedIn, isLoading, user, storeToken, authUser, logOutUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProviderWrapper };
