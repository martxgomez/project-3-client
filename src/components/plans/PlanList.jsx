import PlanCard from "./PlanCard";

function PlanList({ plans, formatDate}) {
  
  return (
    <>
      <div>
        {plans.map((plan) => {
          return <PlanCard key={plan._id} plan={plan} formatDate={formatDate}/>;
        })}
      </div>
    </>
  );
}

export default PlanList;
