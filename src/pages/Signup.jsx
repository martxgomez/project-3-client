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
      const response = await axios.post({
        name,
        email,
        password,
        image
      });
      navigate("/user-homepage/:userId");
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
    </form>
  );
}
export default Signup;
