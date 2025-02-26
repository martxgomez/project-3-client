//HOOKS
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Userpage() {
  const {userId} = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const {image, name, email} = userId;


    const getUser = () => {
      setLoading(true);
      const storedToken = localStorage.getItem("authToken");
      axios
        .get(`${import.meta.env.VITE_API_URL}/auth/user/${userId}`, {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((response) => {
          setUser(response.data);
          setLoading(false);
        })
        .catch((error) => console.log("Error getting data:", error));
      setLoading(false);
      }

    
    useEffect(() => {
      getUser();
  }, []);
    return (
      <div>
        <div>
          <img src={image} alt="User Image" />
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
    );
  }
  export default Userpage;
  