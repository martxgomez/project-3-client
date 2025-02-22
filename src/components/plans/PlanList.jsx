import PlanCard from "./PlanCard";

function PlanList({ plans }) {
  
  return (
    <>
      <div>
        {plans.map((plan) => {
          return <PlanCard key={plan._id} plan={plan} />;
        })}
      </div>
    </>
  );
}

export default PlanList;
