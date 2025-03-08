//COMPONENTS
import PlanCard from "./PlanCard";

//STYLE
import "./PlanList.css"

function PlanList({ plans, formatDate}) {
  
  return (
    <div className="planlist-container">
      <div>
        {plans.map((plan) => {
          return <PlanCard key={plan._id} plan={plan} formatDate={formatDate}/>;
        })}
      </div>
    </div>
  );
}

export default PlanList;
