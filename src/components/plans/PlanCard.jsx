import { Link } from "react-router-dom";

function PlanCard({ plan }) {
  const { _id, title, date, location, image } = plan;
  console.log(plan);

  const formatDate = (prevDate) => {
    const date = new Date(prevDate);
    return date.toLocaleDateString("es-ES");
  };

  return (
    <article>
      <Link to={`/plans/${_id}`} className="card">
        <div>
          <img src={image} alt={`Imagen de ${title}`} />
          <div>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{formatDate(date)}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default PlanCard;
