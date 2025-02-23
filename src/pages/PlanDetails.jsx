//HOOKS
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

//STYLE

function PlanDetails() {
  const { planId } = useParams();
  const [plan, setPlan] = useState();
  const [loading, setLoading] = useState(true);
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

  const handleAttendance = (plan) => {
    plan.map((attendant) => {
      for (let i = 0; i <= 3; i++) {
        return (
          <div key={attendant.id}>
            <h3>{attendant.image}</h3>
          </div>
        );
      }
    });
  };

  return (
    <>
      <section>
        {" "}
        <h2>{title}</h2>
        <h3>{user}</h3>
        <h3>{date}</h3>
        <h3>{location}</h3>
        <h3>{isPrivate}</h3>
        <img src={image} alt={image} />
        <h3>Detalles:</h3>
        <p>{details}</p>
        <p>{handleAttendance}</p>
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
      </section>
    </>
  );
}
export default PlanDetails;
