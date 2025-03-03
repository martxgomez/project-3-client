import axios from "axios";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import  "./PlanCard.css";



function PlanCard({ plan, formatDate }) {
  const { _id, title, date, location, image } = plan;
 

  const { user } = useContext(UserContext);

  //CHECK IF PLANS' ID IS INCLUDED IN ARRAY OF JOINED
  if (user && user.myPlans) {
    const plansId = user.myPlans.map((plan) => plan._id);
    setJoined(plansId.includes(_id));
  }

  

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
  

  return (
    <article className="plan-card">
      <Link to={`/details/${_id}`} >
        <div className="plan-card__main">
        <div className="plan-card__details">
            <h2>{title}</h2>
            <p>{location}</p>
            <div className="plan-car__details__date"><img src="src\assets\calendar.svg"/><p>{formatDate(date)}</p></div>
          </div>
          <img className="plan-card__image"  src={image} alt={`Imagen de ${title}`} />
         
          
        </div>
      </Link>
     
      
     
    </article>
  );
}

export default PlanCard;
