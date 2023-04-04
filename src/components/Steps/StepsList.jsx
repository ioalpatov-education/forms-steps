import StepsItem from "./StepsItem";
import { sortStepsByDate } from "./utils";

const StepsList = ({ steps }) => {
  const sortedSteps = sortStepsByDate(steps);
  const stepsItems = sortedSteps.map((step) => {
    return <StepsItem key={step.id} step={step} />;
  });

  return (
    <div>
      <div className="steps-list__header">
        <p>Дата (ДД.ММ.ГГ)</p>
        <p>Пройдено км</p>
        <p>Действия</p>
      </div>
      <table className="steps-list">
        <tbody className="steps-list__body">{stepsItems}</tbody>
      </table>
    </div>
  );
};

export default StepsList;
