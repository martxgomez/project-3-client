//HOOKS
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./PlanDetails.css";
import calendar from "../assets/calendar.svg";
import logoLocation from "../assets/icono_ubicacion.png";

//COMPONENTS
import Map from "../components/Map";
import Comments from "../components/Comments";
import DeletePlanButton from "../components/DeletePlanButton";
import EditPlanButton from "../components/EditPlanButton";

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
        .catch((error) => {
          console.log("Error getting data:", error);
          setLoading(false);
        });
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
        <button className="plan-details__join-button" onClick={handleJoinPlan}>
          {joined ? "Cancelar" : "Unirme"}
        </button>

        <div className="plan-details__details">
          <h2>{plan.title}</h2>
          <h3>{plan.name}</h3>
          <div className="plan-details__details__date">
            <img src={calendar} />
            <p>{formatDate(plan.date)}</p>
          </div>
          <div className="plan-details__details__location">
            <img src={logoLocation} />
            <p>{plan.location}</p>
          </div>
          <h3>{plan.isPrivate}</h3>
          <h4>Detalles:</h4>
          <p>{plan.details}</p>
        </div>
      </section>
      
      {plan.location && <Map location={plan.location} />}
      <div className="plan-details__buttons"><DeletePlanButton /><EditPlanButton /></div>
      <section className="plan-details__attendance">
        <h3>Asistentes:</h3>
        <>{handleAttendance(plan.attendance)}</>
      </section>
      

      <Comments planId={planId} />
    
      
      <Link to="/" className="plan-details__back-button">
       <h4> ←Volver</h4>
      </Link>
    </>
  );
}
export default PlanDetails;
