import axios from "axios";
import PlanList from "../components/plans/PlanList";
import { useEffect, useState } from "react";

function UserHomepage() {
  const [plans, setPlans] = useState([]);
  const getAllPlans = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plans`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setPlans(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPlans();
  }, []);

  return (
    <>
      <div>
        <PlanList plans={plans} />
      </div>
    </>
  );
}
export default UserHomepage;
