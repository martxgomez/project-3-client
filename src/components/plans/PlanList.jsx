import PlanCard from "./PlanCard";

function PlanList({ plans }) {
  return (
    <>
      <div>
        {plans.map((plan) => {
          return <PlanCard key={plan.id} plan={plan} />;
        })}
      </div>
    </>
  );
}

export default PlanList;
