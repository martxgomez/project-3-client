//HOOKS
import { useNavigate, useParams } from "react-router-dom";

//STYLE
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
