// src/pages/LoginPage.jsx
import "./Login.css"
// HOOKS
import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

 
  const { storeToken, authUser } = useContext(UserContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authUser();
        navigate("/user-homepage/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al acceder:", errorDescription);
      });
  };

  return (
    <div className="login-page">
    <div>
      <h1 className="login-page__title">Iniciar sesión</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={email} onChange={handleEmail} />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Inicia sesión</button>
      </form>
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>¿Aún no tienes cuenta?</p>
      <Link to={"/sign-up"}>Regístrate</Link>
    </div>
  );
}

export default Login;
