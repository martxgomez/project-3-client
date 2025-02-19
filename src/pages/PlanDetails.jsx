import { useState } from "react";

function PlanDetails() {
  const [plan, setPlan] = useState()
 

const getPlan = () => {
  const storedToken = localStorage.getItem("authToken");
  axios
    .get(
      `${import.meta.env.VITE_API_URL}/api/plans/${planId} `,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
    
      setPlan(response.data);
    })
    .catch((error) => console.log(error));
};

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
export default PlanDetails;
