import { Link } from "react-router-dom";

function PlanCard({
  id,
 title,
  date,
  location,
  image
}) {
  return (
    <article>
      <Link to={`/plans/${id}`} className="card">
        <div key={id}>
          <img
            src={image}
            alt={`Imagen de ${title}`}
          />
          <div>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{date}</p>
          </div>         
        </div>
      </Link>
    </article>
  );
}

export default PlanCard;
