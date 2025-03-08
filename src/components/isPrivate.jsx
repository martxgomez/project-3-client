//HOOKS
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";

function IsPrivate({ children }) {
  const { isLoggedIn, isLoading } = useContext(UserContext);

  if (isLoading) return <p>Cargando...</p>;

  if (!isLoggedIn) {
    return <Navigate to="/log-in" />;
  } else {
    return children;
  }
}

export default IsPrivate;
