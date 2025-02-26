import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function EditPlan(){
    const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [frecuency, setFrecuency] = useState("");
  const [image, setImage] = useState();
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Hayq ue hacer una get request para recibir el plan 

  // useEffect ...

  // dentro del useeffect rellenamos todos los campos con la respuesta de la api
  /*
  setDetails()
  setLocation
  etc
  ...
  */

  const navigate = useNavigate();
  const {planId} = useParams();

  const { storeToken, authUser } = useContext(UserContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDetails = (e) => setDetails(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleIsPrivate = (e) => setIsPrivate(e.target.checked);
  const handleImage = (e) => setImage(e.target.value);
  const handleFrecuency = (e) => setFrecuency(e.target.value);

  const handleEditPlanSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, details, location, date, isPrivate, frecuency, image };
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${import.meta.env.VITE_API_URL}/api/plans/${planId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => {
        authUser();
        navigate("/user-homepage/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al acceder:", errorDescription);
      });
  };

  return (
    <div className="EditPlan">
      <h1>Actualizar Plan</h1>

      <form onSubmit={handleEditPlanSubmit}>
        <label>Titulo:</label>
        <input type="Title" name="Title" value={title} onChange={handleTitle} />

        <label>Detalles:</label>
        <input
          type="Details"
          name="Details"
          value={details}
          onChange={handleDetails}
        />

        <label>Fecha:</label>
        <input
          type="Date"
          name="Date"
          value={date}
          onChange={handleDate}
        />

        <label>Es privado:</label>
            <input
              type="checkbox"
              name="Is Private"
              value={isPrivate}
              onChange={handleIsPrivate}
            />

        <label>Ubicación:</label>
            <input
              type="Location"
              name="Location"
              value={location}
              onChange={handleLocation}
            />

        <label>Frecuencia:</label>
            <select value={frecuency}
              onChange={handleFrecuency}>
              <option value = "">Seleccione una opción</option>
              <option value = "daily">Diario</option>
              <option value = "weekly">Semanal</option>
              <option value = "monthly">Mensualmente</option>
              <option value = "once">Una vez</option>
              </select>

              <label>Imagen:</label>
            <input
              type="file"
              name=""
              value={image}
              onChange={handleImage}
            />
            
            

        

        <button type="submit">Actualizar Plan</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
    export default EditPlan

