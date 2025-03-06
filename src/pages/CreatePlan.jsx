import "./CreatePlan.css"
//HOOKS
import { useState, useContext } from "react";
import axios from "axios";
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
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [planId, setPlanId] = useState('')

  const {authUser, user} = useContext(UserContext);

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
      frecuency,
      image,
      user: user._id
    };
    const storedToken = localStorage.getItem("authToken");
    axios
      .post(`${import.meta.env.VITE_API_URL}/api/plans`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        authUser();
        setPlanId(response.data._id);
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
        <label><h3>Titulo</h3></label>
        <input type="Title" name="Title" value={title} onChange={handleTitle} />

        <label><h3>Detalles</h3></label>
        <input
          type="text"
          name="Details"
          value={details}
          onChange={handleDetails}
        />

        <label><h3>Fecha</h3></label>
        <input type="Date" name="Date" value={date} onChange={handleDate} />

        

        <label><h3>Ubicación</h3></label>
        <input
          type="text"
          value={location}
          onChange={handleLocation}
          placeholder="Ej: Madrid"
        />

        <label><h3>Frecuencia</h3></label>
        <select value={frequency} onChange={handleFrequency}>
          <option value="">Seleccione una opción</option>
          <option value="daily">Diario</option>
          <option value="weekly">Semanal</option>
          <option value="monthly">Mensualmente</option>
          <option value="once">Una vez</option>
        </select>

        <div className="create-plan__checkbox">
        <div className="create-plan__text"><label><h4>Es privado</h4></label></div>
        <input 
          className="checkbox"
          type="checkbox"
          name="Is Private"
          checked={isPrivate}
          onChange={handleIsPrivate}
        />
        </div>

        <div className="create-plan__button">
        <button className="form__btn" onClick={() => setModalOpen(true)} type="submit">
          Crear Plan
        </button>
        </div>
        <Modal
          isOpen={modalOpen}
          onChangeModal={(value) => setModalOpen(value)}
          planId={planId}
        />


      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
export default CreatePlan;
