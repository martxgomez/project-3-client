import axios from "axios";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function PlanCard({ plan, formatDate}) {
  const { _id, title, date, location, image } = plan;

  const { user } = useContext(UserContext);

  
  const handleJoinPlan = () => {
    const requestBody = { planId: _id };
    const storedToken = localStorage.getItem("authToken");

    axios.put(
      `${import.meta.env.VITE_API_URL}/auth/${user._id}/my-plans`,
      requestBody,
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      }
    );
  };
  return (
    <article>
      <Link to={`/details/${_id}`} className="card">
        <div>
          <img src={image} alt={`Imagen de ${title}`} />
          <div>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{formatDate(date)}</p>
          </div>
        </div>
      </Link>
      <button onClick={handleJoinPlan}>Unirme</button>
    </article>
  );
}

export default PlanCard;
