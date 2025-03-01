import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./EditPlan.css"

function EditPlan(){
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [frequency, setfrequency] = useState("");
  const [image, setImage] = useState();
  const [errorMessage, setErrorMessage] = useState(undefined);

  // Hay que hacer una get request para recibir el plan 

  // useEffect ...
    // axios.get -> API PLANS. El id del plan lo obtenemos de los params
  // dentro del useeffect rellenamos todos los campos con la respuesta de la api
  // tenemos que obtener el token del localstorage para añadir el header
  /*
  setDetails()
  setLocation
  etc
  ...
  */

  const {planId} = useParams();


  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
  
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plans/${planId}`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => {
        console.log(response.data);
        
        const planData = response.data;
        setTitle(planData.title);
        setDetails(planData.details);
        setLocation(planData.location);
        setIsPrivate(planData.isPrivate);
        setfrequency(planData.frequency);
        setImage(planData.image);
  
        // Formatear la fecha a "YYYY-MM-DD"
        if (planData.date) {
          const formattedDate = planData.date.split("T")[0];
          setDate(formattedDate);
        }
      })
      .catch((error) => {
        console.error("Error al cargar el plan:", error);
        setErrorMessage("No se pudo cargar el plan.");
      });
  }, [planId]);


  const navigate = useNavigate();
 

  const { storeToken, authUser } = useContext(UserContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDetails = (e) => setDetails(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleIsPrivate = (e) => setIsPrivate(e.target.checked);
  const handleImage = (e) => setImage(e.target.value);
  const handlefrequency = (e) => setfrequency(e.target.value);

  const handleEditPlanSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, details, location, date, isPrivate, frequency, image };
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
    <div className="edit-plan">
      <h1 className="edit-plan__title">Actualizar Plan</h1>

      <form onSubmit={handleEditPlanSubmit}>
        <label>Titulo:</label>
        <input type="text" name="Title" value={title} onChange={handleTitle} />

        <label>Detalles:</label>
        <input
          type="text"
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


        <label>Ubicación:</label>
            <input
              type="text"
              name="Location"
              value={location}
              onChange={handleLocation}
            />

        <label>Frecuencia:</label>
            <select value={frequency}
              onChange={handlefrequency}>
              <option value = "">Seleccione una opción</option>
              <option value = "daily">Diario</option>
              <option value = "weekly">Semanal</option>
              <option value = "monthly">Mensualmente</option>
              <option value = "once">Una vez</option>
              </select>

              <label>Imagen:</label>
            <input
              type="text"
              name=""
              value={image}
              onChange={handleImage}
            />
            <div className="edit-plan__private">
          <div className="edit-plan__text"><label>Es privado</label></div>
            <input
              type="checkbox"
              name="Is Private"
              checked={isPrivate}
              onChange={handleIsPrivate}
            />
            </div>
        
<div className="edit-plan__button">
        <button type="submit">Actualizar Plan</button>
        </div>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
    export default EditPlan

