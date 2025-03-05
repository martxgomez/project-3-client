import axios from "axios"
import { useParams, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function DeletePlanButton() {
const [errorMessage, setErrorMessage] = useState(undefined);

const { planId } = useParams();

const navigate = useNavigate();

const { storeToken, authUser } = useContext(UserContext);

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
        <div className="delete-button">
            <button onClick={handleDeletePlanSubmit}>🗑️</button>
        </div>
    )
}

export default DeletePlanButton