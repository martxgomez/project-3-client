
import PlanList from "../components/plans/PlanList";
import { useEffect} from "react";

function Homepage({getPublicPlans, plans, formatDate}) {



  useEffect(() => {
    getPublicPlans();
  }, []);

  return (
    <>
      <div>
        <PlanList plans={plans} formatDate={formatDate} />
      </div>
    </>
  );
}
export default Homepage;
