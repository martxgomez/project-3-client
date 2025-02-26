//HOOKS
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Userpage() {
  const [loading, setLoading] = useState(true);
  const { storeToken, authUser, user } = useContext(UserContext);

  const getUser = () => {
    setLoading(true);
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${import.meta.env.VITE_API_URL}/auth/user/`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        authUser();
        console.log(authUser());

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
        <p>{user.name}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}
export default Userpage;
