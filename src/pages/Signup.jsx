//STYLE

//HOOKS
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage]=useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();
  const addUser = async function postUser() {
    console.log(import.meta.env.VITE_API_URL);
    
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          name,
          email, 
          password,
          image,
        }
      );
      
      navigate("/log-in");
    } catch (error) {
      throw new Error("Error al crear nuevo usuario:", error);
    }
  };

  return (
    <div>
      <form onSubmit={addUser}>
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
          type="text"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagen de perfil"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Crear cuenta</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}
export default Signup;
