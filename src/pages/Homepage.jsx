import axios from "axios";
import PlanList from "../components/plans/PlanList";
import { useEffect, useState } from "react";

function Homepage() {
  const [plans, setPlans] = useState([]);
  const getPublicPlans = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/plans`)
      .then((response) => {
        
        setPlans(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPublicPlans();
  }, []);

  return (
    <>
      <div>
        <PlanList plans={plans} />
      </div>
    </>
  );
}
export default Homepage;
