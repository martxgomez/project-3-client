//HOOKS
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./PlanDetails.css";
import calendar from "../assets/calendar.svg"

//COMPONENTS
import Map from "../components/Map";

//STYLE

function PlanDetails({ formatDate }) {
  const { planId } = useParams();
  const [plan, setPlan] = useState();
  const [loading, setLoading] = useState(true);
  const [joined, setJoined] = useState(false);

  const { user } = useContext(UserContext);

  //GET DATA
  useEffect(() => {
    const getPlan = () => {
      setLoading(true);
      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/plans/${planId} `, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setPlan(response.data);
          setLoading(false);
        })
        .catch((error) => console.log("Error getting data:", error));
      setLoading(false);
    };

    getPlan();
  }, [planId]);

  if (loading) return <p>Cargando...</p>;
  if (!plan) return <p>Plan no encontrado</p>;

  //CHECK IF PLANS' ID IS INCLUDED IN ARRAY OF JOINED
  if (user && user.myPlans) {
    const plansId = user.myPlans.map((plan) => plan._id);
    setJoined(plansId.includes(_id));
  }

  const handleJoinPlan = () => {
    const requestBody = { planId: plan._id };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/auth/${user._id}/my-plans`,
        requestBody,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      )
      .then(() => {
        setJoined(true);
      })
      .catch((error) =>
        console.error("Error al unirse o cancelar el plan", error)
      );
  };

  const handleAttendance = (attendance) => {
    if (attendance.length === 0) {
      return (
        <>
          <p>Aún no hay asistentes</p>
        </>
      );
    } else {
      const attendantsFilterArray = attendance.slice(0, 3);

      return attendantsFilterArray.map((attendant) => (
        <div key={attendant.id}>
          <img src={attendant.image} alt={`Foto de ${attendant.name}`} />
        </div>
      ));
    }
  };

  return (
    <>
      <section className="plan-details">
        <img
          className="plan-details__image"
          src={plan.image}
          alt={plan.image}
        />
        <div className="plan-details__details">
        <h2>{plan.title}</h2>
        <h3>{plan.name}</h3>
       <div className="plan-details__details__date"> 
       <img src={calendar}/><h3>{formatDate(plan.date)}</h3></div>
        <h3>{plan.location}</h3>
        <h3>{plan.isPrivate}</h3>
        <h3>Detalles:</h3>
        <p>{plan.details}</p>
        </div>
        
      </section>
      {plan.location && <Map location={plan.location} />}
      <section className="plan-details__details__attendance">
        <h3>Asistentes:</h3>
        <>{handleAttendance(plan.attendance)}</>
      </section>

      {/* por definir */}
      <section>
        <Link to="/add-coment">
          {" "}
          <button>Añadir comentario</button>
        </Link>
        <Link to="/comments/:planId">
          {" "}
          <button>Ver todos</button>
        </Link>
        <div className="plan-details__footer">
        <button className="plan-details__footer__button" onClick={handleJoinPlan}>
          {joined ? "Cancelar" : "Unirme"}
         
        </button>
        </div>
      </section>
      
    </>
  );
}
export default PlanDetails;
