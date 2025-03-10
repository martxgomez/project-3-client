//HOOKS
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//STYLE
import "./EditProfile.css"

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useContext(UserContext);
  const { authUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleEditProfile = (e) => {
    e.preventDefault();
    const requestBody = { name, email };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${import.meta.env.VITE_API_URL}/auth/${user._id}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        authUser();
        navigate("/user-details");
      })
      .catch((error) => {
        console.error("Error al acceder:", error);
      });
  };

  useEffect(() => {
    authUser()
  }, []);
  

  return (
    <div className="edit-profile">
      <form onSubmit={handleEditProfile}>
        <h1 className="edit-profile__title">Edita tu perfil</h1>
        <label><h3>Nombre:</h3></label>
        <input
          type="text"
          name="Nombre"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label><h3>Correo:</h3></label>
        <input
          type="text"
          name="Correo"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
}
export default EditProfile;
