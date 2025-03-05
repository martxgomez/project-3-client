
import PlanList from "../components/plans/PlanList";
import { useEffect} from "react";
import "./Homepage.css"

function Homepage({getPublicPlans, plans, formatDate}) {



  useEffect(() => {
    getPublicPlans();
  }, []);

  return (
    <>
      <div className="home-page">
      <div className="home-page__header">
        <h1>Haz nuevos amigos y encuentra eventos asombrosos. </h1>
        </div>
      <div>
        <PlanList plans={plans} formatDate={formatDate} />
      </div>
      </div>
    </>
  );
}
export default Homepage;
