import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function PlanCard({ plan }) {
  const { _id, title, date, location, image } = plan;
  const { userId } = useParams();

  const formatDate = (prevDate) => {
    const date = new Date(prevDate);
    return date.toLocaleDateString("es-ES");
  };

  const handleJoinPlan = () => {
    const requestBody = { planId: _id };
    axios.put(
      `${import.meta.env.VITE_API_URL}/auth/${userId}/my-plans`,
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
