//HOOKS
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//COMPONENTS
import Map from "../components/Map";
import Comments from "../components/Comments";

//STYLE

function PlanDetails({ formatDate }) {
  const { planId } = useParams();
  const [plan, setPlan] = useState();
  const [loading, setLoading] = useState(true);

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

  const {
    title,
    user,
    date,
    location,
    isPrivate,
    image,
    details,
    attendance,
    comments,
  } = plan;

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
      <section>
        <h2>{title}</h2>
        <h3>{user.name}</h3>
        <h3>{formatDate(date)}</h3>
        <h3>{location}</h3>
        <h3>{isPrivate}</h3>
        <img src={image} alt={image} />
        <h3>Detalles:</h3>
        <p>{details}</p>
      </section>
      {location && <Map location={location} />}
      <section>
        <h3>Asistentes:</h3>
        <>{handleAttendance(plan.attendance)}</>
      </section>

      <Comments planId={planId} />
    </>
  );
}
export default PlanDetails;
