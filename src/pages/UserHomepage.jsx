import axios from "axios";
import PlanList from "../components/plans/PlanList";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./UserHomePage.css"

function UserHomepage({ getPublicPlans, plans, formatDate }) {
  const [createdPlans, setCreatedPlans] = useState([]);
  const [joinedPlans, setJoinedPlans] = useState([]);
  const [createdOpen, setCreatedOpen] = useState(false);
  const [joinedOpen, setJoinedOpen] = useState(false);
  const [publicOpen, setPublicOpen] = useState(false);

  const { user } = useContext(UserContext);
  const storedToken = localStorage.getItem("authToken");

  //GET PLANS

  const getCreatedPlans = () => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/auth/user/${user._id}/created-plans`, {
          headers: { Authorization: `Bearer ${storedToken}`},
        }
      )
      .then((response) => {
        setCreatedPlans(response.data);
      })
      .catch((error) => console.log(error));
  };

  const getJoinedPlans = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/user/${user._id}/my-plans`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setJoinedPlans(response.data);
      })
      .catch((error) => console.log(error));
  };

  //TOGGLE SECTIONS
  const toggleCreated = () => setCreatedOpen(!createdOpen);
  const toggleJoined = () => setJoinedOpen(!joinedOpen);
  const togglePublic = () => setPublicOpen(!publicOpen);

  useEffect(() => {
    getCreatedPlans();
    getJoinedPlans();
    getPublicPlans();
  }, []);

  return (
    <main className="user-homepage">
      <div className="user-homepage-my-plans">
        <h3 className="user-homepage-my-plans__title" onClick={toggleCreated}>
          {createdOpen ? "▼" : "▶"} Mis planes creados
        </h3>
        {createdOpen &&  (createdPlans.length > 0 ? (
          <PlanList className="plan-list" plans={createdPlans} formatDate={formatDate} />
        ) : (
          <p className="user-homepage__no-created-plan-message">Aún no has creado planes</p>
        ))}
      </div>
      <div className="user-homepage-joined-plan" >
        <h3 className="user-homepage-joined-plan__title" onClick={toggleJoined}>
          {joinedOpen ? "▼" : "▶"} Planes a los que asisto
        </h3>
        {joinedOpen && 
        (joinedPlans.length > 0 ? (
          <PlanList plans={joinedPlans} formatDate={formatDate} />
        ) : (
          <p className="user-homepage__no-created-plan-message">Aún no te has unido a ningún plan</p>
        ))}
      </div>
      <div className="user-homepage-find-plans"> 
        <h3 className="user-homepage-find-plans__title" onClick={togglePublic}>{publicOpen ? "▼" : "▶"}Buscar planes</h3>
        {publicOpen && <PlanList plans={plans} formatDate={formatDate} />}
      </div>
    </main>
  );
}
export default UserHomepage;
