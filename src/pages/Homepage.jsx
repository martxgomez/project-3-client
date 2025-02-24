import axios from "axios";
import PlanList from "../components/plans/PlanList";
import { useEffect} from "react";

function Homepage({getPublicPlans, plans}) {



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
