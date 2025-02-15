//IMPORTS
import { createContext, useState } from "react";

const UserContext = createContext();

const userData ={
  name: "Adrián",
  email: "adrian@gmail.com"
}
function UserProviderWrapper(props) {
  const [user, setUser] = useState(UserContext);
  
  const login=()=> {
    setUser(userData);
  }
  const logout=()=> {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProviderWrapper, };
