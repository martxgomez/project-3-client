import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

import "./DeletePlanButton.css"

function DeletePlanButton() {
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const { planId } = useParams();

  const navigate = useNavigate();

  const { authUser } = useContext(UserContext);

  const handleDeletePlanSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${import.meta.env.VITE_API_URL}/api/plans/${planId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
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
    <div>
      <button onClick={() => setShowConfirmation(true)} className="delete-plan__button">Borrar plan</button>
      {showConfirmation && (
        <div className="pop-up-container">
          <div className="pop-up-content">
            <h3>¿Estas seguro de eliminar este plan?</h3>
            <div className="pop-up-buttons">
              <button
                onClick={() => setShowConfirmation(false)}
                className="btn-cancel"
              >
                No
              </button>
              <button onClick={handleDeletePlanSubmit} className="btn-confirm">
                Sí
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeletePlanButton;
