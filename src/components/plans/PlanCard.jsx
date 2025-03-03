import { Link } from "react-router-dom";
import "./PlanCard.css";

function PlanCard({ plan, formatDate }) {
  const { _id, title, date, location, image } = plan;

  return (
    <article className="plan-card">
      <Link to={`/details/${_id}`}>
        <div className="plan-card__main">
          <div className="plan-card__details">
            <h2>{title}</h2>
            <p>{location}</p>
            <div className="plan-car__details__date">
              <img src="src\assets\calendar.svg" />
              <p>{formatDate(date)}</p>
            </div>
          </div>
          <img
            className="plan-card__image"
            src={image}
            alt={`Imagen de ${title}`}
          />
        </div>
      </Link>
    </article>
  );
}

export default PlanCard;
