//HOOKS
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Userpage() {
  const [loading, setLoading] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({});
  const {authUser, user} = useContext(UserContext);

  const navigate = useNavigate();

  const getUser = () => {
    setLoading(true);
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/user/${user._id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        authUser();
        setUpdatedUser(response.data);
        setLoading(false);
      })
      .catch((error) => console.log("Error getting data:", error));
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <div>
      <div>
        <img src={user.image} alt="User Image" />
        <p>{updatedUser.name}</p>
        <p>{updatedUser.email}</p>
        <button onClick={() => navigate("/user-edit") }>Edita tu perfil</button>
      </div>
    </div>
  );
}
export default Userpage;
