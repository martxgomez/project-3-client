import { useNavigate, useParams } from "react-router-dom"

function EditPlanButton() {

const navigate = useNavigate()

const { planId } = useParams();

const handleEditPlanButton = () => {
    navigate(`/edit-plan/${planId}`);
};

    return(
        <div className="edit-button">
            <button onClick={handleEditPlanButton}>Editar Plan</button>
        </div>
    )
}

export default EditPlanButton