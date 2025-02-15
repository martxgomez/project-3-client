//IMPORTS
import { createContext, useState } from "react";
import axios from "axios";


const UserContext = createContext();

function UserProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ isLoggedIn, isLoading, user }}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProviderWrapper };
