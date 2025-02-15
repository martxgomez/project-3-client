//IMPORTS
import { createContext, useContext, useState } from "react";
import axios from "axios";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setUser] = useState(null);

  const login = () => { // esto va aqui?
    // aquí iria la llamada a la API con la info del form
    //setUser(userData); // userData sería la repuseta del back con el nuevo user
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {props.children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProviderWrapper };
