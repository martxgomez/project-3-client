import axios from "axios";
import PlanList from "../components/plans/PlanList";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

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
    <>
      <div>
        <h3 onClick={toggleCreated}>
          {createdOpen ? "▼" : "▶"}Mis planes creados
        </h3>
        {createdOpen &&  (createdPlans.length > 0 ? (
          <PlanList plans={createdPlans} formatDate={formatDate} />
        ) : (
          <p>Aún no has creado planes</p>
        ))}
      </div>
      <div>
        <h3 onClick={toggleJoined}>
          {joinedOpen ? "▼" : "▶"}Planes a los que asisto
        </h3>
        {joinedOpen && 
        (joinedPlans.length > 0 ? (
          <PlanList plans={joinedPlans} formatDate={formatDate} />
        ) : (
          <p>Aún no te has unido a ningún plan</p>
        ))}
      </div>
      <div>
        <h3 onClick={togglePublic}>{publicOpen ? "▼" : "▶"}Buscar planes</h3>
        {publicOpen && <PlanList plans={plans} formatDate={formatDate} />}
      </div>
    </>
  );
}
export default UserHomepage;
