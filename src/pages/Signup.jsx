//STYLE

//HOOKS
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();
  const addUser = async function postUser() {
    try {
      const response = await axios.post({ // falta la ruta import.meta.VITE_API_URL
        name,
        email,
        password,
        image
      });
      // cuando creamos un user tenemos que volver a ir a LOGIN
      navigate("/user-homepage/:userId"); // cambiar esto
    } catch (error) {
      throw new Error("Error al crear nuevo usuario:", error);
    }
  };

  return (
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
       <button type="submit" >Crear cuenta</button>
    </form>
  );
}
export default Signup;
