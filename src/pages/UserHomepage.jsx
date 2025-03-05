import axios from "axios";
import PlanList from "../components/plans/PlanList";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import "./UserHomePage.css"
import { useNavigate } from "react-router-dom";
import arrowDown from "../assets/arrow-down.svg"
import arrowRight from "../assets/arrow-right.svg"

function UserHomepage({ getPublicPlans, plans, formatDate }) {
  const [createdPlans, setCreatedPlans] = useState([]);
  const [joinedPlans, setJoinedPlans] = useState([]);
  const [createdOpen, setCreatedOpen] = useState(false);
  const [joinedOpen, setJoinedOpen] = useState(false);
  const [publicOpen, setPublicOpen] = useState(false);

  const navigate = useNavigate();
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
        <h1 className="user-homepage__title">{`Hola, ${user.name} 👋`}</h1>
      <h1 className="user-homepage__subtitle" >Mis planes</h1>
      <div className="user-homepage-my-plans">
      
        <h3 className="user-homepage-my-plans__title" onClick={toggleCreated}>
          {createdOpen ? <img src={arrowDown}/> : <img src={arrowRight}/>} Mis planes creados
        </h3>
        {createdOpen &&  (createdPlans.length > 0 ? (
          <PlanList className="plan-list" plans={createdPlans} formatDate={formatDate} />
        ) : (
          <p className="user-homepage__no-created-plan-message">Aún no has creado planes</p>
        ))}
      </div>
      <div className="user-homepage-joined-plan" >
        <h3 className="user-homepage-joined-plan__title" onClick={toggleJoined}>
          {joinedOpen ? <img src={arrowDown}/> : <img src={arrowRight}/>} Planes a los que asisto
        </h3>
        {joinedOpen && 
        (joinedPlans.length > 0 ? (
          <PlanList plans={joinedPlans} formatDate={formatDate} />
        ) : (
          <p className="user-homepage__no-created-plan-message">Aún no te has unido a ningún plan</p>
        ))}
      </div>
      <div className="user-homepage-find-plans"> 
        <h3 className="user-homepage-find-plans__title" onClick={togglePublic}>{publicOpen ? <img src={arrowDown}/> : <img src={arrowRight}/>}Buscar planes</h3>
        {publicOpen && <PlanList plans={plans} formatDate={formatDate} />}
      </div>
      <button className="user-homepage__btn" onClick={() => navigate("/new-plan")}>Crea tu plan</button>
    </main>
  );
}
export default UserHomepage;
