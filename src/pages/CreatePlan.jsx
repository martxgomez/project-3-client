import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Modal from "../components/Modal"


function CreatePlan() {
  const[modalOpen, setModalOpen]= useState(false)
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [frecuency, setFrecuency] = useState("");
  const [image, setImage] = useState();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authUser } = useContext(UserContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDetails = (e) => setDetails(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleIsPrivate = (e) => setIsPrivate(e.target.checked);
  const handleImage = (e) => setImage(e.target.value);
  const handleFrecuency = (e) => setFrecuency(e.target.value);

  const handleCreatePlanSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, details, location, date, isPrivate, frecuency, image };
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/plans`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => {
        authUser();
        // navigate("/user-homepage/:userId");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al acceder:", errorDescription);
      });
  };

  return (
    <div className="CreatePlan">
      <h1>Crear Plan</h1>

      <form onSubmit={handleCreatePlanSubmit}>
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
            
            

        

        <button onClick={()=> setModalOpen(true)}  type="submit">Crear Plan</button>
        <Modal isOpen={modalOpen} closeModal={()=> setModalOpen(false)}/>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
export default CreatePlan;
