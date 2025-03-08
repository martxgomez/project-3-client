//HOOKS
import { useEffect } from "react";

//COMPONENTS
import PlanList from "../components/plans/PlanList";

//STYLE
import "./HomePage.css";

function HomePage({ getPublicPlans, plans, formatDate }) {
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
export default HomePage;
