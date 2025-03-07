import { useNavigate, useParams } from "react-router-dom";
 import { useContext } from "react";
import { UserContext } from "../context/UserContext";

import "./EditPlanButton.css"

function EditPlanButton() {
  const navigate = useNavigate();

  const { planId } = useParams();

  const handleEditPlanButton = () => {
    navigate(`/edit-plan/${planId}`);
  };

  return (
    <div >
      <button onClick={handleEditPlanButton} className="edit-plan__button">Editar plan</button>
    </div>
  );
}

export default EditPlanButton;
