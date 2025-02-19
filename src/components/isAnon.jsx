//HOOKS

import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function IsAnon({ children }) {
  const { isLoggedIn, isLoading } = useContext(UserContext);

  if (isLoading) return <p>Cargando...</p>;
    
  if (isLoggedIn) {
    return <Navigate to="/user-homepage/:userId"/>;
  } else {
    return children;
  }
}

export default IsAnon;
