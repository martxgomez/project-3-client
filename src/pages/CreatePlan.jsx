import "./CreatePlan.css"
//HOOKS
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Modal from "../components/Modal";

function CreatePlan() {
  const [modalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [frequency, setFrequency] = useState("");
  const [image, setImage] = useState();
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authUser, user } = useContext(UserContext);

  const handleTitle = (e) => setTitle(e.target.value);
  const handleDetails = (e) => setDetails(e.target.value);
  const handleLocation = (e) => setLocation(e.target.value);
  const handleDate = (e) => setDate(e.target.value);
  const handleIsPrivate = (e) => setIsPrivate(e.target.checked);
  const handleFrequency = (e) => setFrequency(e.target.value);

  const handleCreatePlanSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      title,
      details,
      location,
      date,
      isPrivate,
      frequency,
      user: user._id,
    };
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/plans`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        authUser();
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage("Error al acceder:", errorDescription);
      });
  };

  return (
    <div className="create-plan">
      <h1 className="create-plan__title">Crea tu Plan</h1>

      <form onSubmit={handleCreatePlanSubmit}>
        <label>Titulo</label>
        <input type="Title" name="Title" value={title} onChange={handleTitle} />

        <label>Detalles</label>
        <input
          type="text"
          name="Details"
          value={details}
          onChange={handleDetails}
        />

        <label>Fecha</label>
        <input type="Date" name="Date" value={date} onChange={handleDate} />

        

        <label>Ubicación</label>
        <input
          type="text"
          value={location}
          onChange={handleLocation}
          placeholder="Ej: Madrid"
        />

        <label>Frecuencia</label>
        <select value={frequency} onChange={handleFrequency}>
          <option value="">Seleccione una opción</option>
          <option value="daily">Diario</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensualmente</option>
          <option value="once">Una vez</option>
        </select>

        <div className="create-plan__checkbox">
        <div className="create-plan__text"><label>Es privado</label></div>
        <input 
          className="checkbox"
          type="checkbox"
          name="Is Private"
          checked={isPrivate}
          onChange={handleIsPrivate}
        />
        </div>

        <div className="create-plan__button">
        <button onClick={() => setModalOpen(true)} type="submit">
          Crear Plan
        </button>
        </div>
        <Modal
          isOpen={modalOpen}
          onChangeModal={(value) => setModalOpen(value)}
        />


      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
export default CreatePlan;
