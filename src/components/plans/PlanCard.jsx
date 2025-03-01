import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";


function PlanCard({ plan, formatDate }) {
  const { _id, title, date, location, image } = plan;
  const [joined, setJoined] = useState(false);

  const { user } = useContext(UserContext);

  //CHECK IF PLANS' ID IS INCLUDED IN ARRAY OF JOINED
  if (user && user.myPlans) {
    const plansId = user.myPlans.map((plan) => plan._id);
    setJoined(plansId.includes(_id));
  }

  const handleJoinPlan = () => {
    const requestBody = { planId: _id };
    const storedToken = localStorage.getItem("authToken");

    axios.put(
      `${import.meta.env.VITE_API_URL}/auth/${user._id}/my-plans`,
      requestBody,
      {
        headers: { Authorization: `Bearer ${storedToken}` },
      }
        .then(() => {
          setJoined(true);
        })
        .catch((error) =>
          console.error("Error al unirse o cancelar el plan", error)
        )
    );
  };

  return (
    <article className="plan-card">
      <Link to={`/details/${_id}`} >
        <div>
          <img src={image} alt={`Imagen de ${title}`} />
          <div>
            <h2>{title}</h2>
            <p>{location}</p>
            <p>{formatDate(date)}</p>
          </div>
        </div>
      </Link>
      <button onClick={handleJoinPlan}>{joined ? "Cancelar" : "Unirme"}</button>
    </article>
  );
}

export default PlanCard;
