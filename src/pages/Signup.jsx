//STYLE
import "./Signup.css"

//HOOKS
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password, name };

    axios
      .post(`${import.meta.env.VITE_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/log-in");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al crear nuevo usuario:", errorDescription);
      });
  };

  return (
    <div className="sign-up">
    <h1 className="sign-up__title">Regístrate</h1>
      <form onSubmit={handleSignupSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Crear cuenta</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>¿Tienes ya una cuenta?</p>
      <Link to={"/log-in"}> Inicia sesión</Link>
    </div>
  );
}
export default Signup;
