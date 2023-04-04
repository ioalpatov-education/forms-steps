import StepsItem from "./StepsItem";
import { sortStepsByDate } from "./utils";
import PropTypes from "prop-types";

const StepsList = ({ steps, onDeleteStep, onEditStep }) => {
  const sortedSteps = sortStepsByDate(steps);

  const deleteStep = (stepId) => {
    onDeleteStep(stepId);
  };

  const editStep = (stepId) => {
    onEditStep(stepId);
  };

  const stepsItems = sortedSteps.map((step) => {
    return (
      <StepsItem
        key={step.id}
        step={step}
        onDeleteStep={deleteStep}
        onEditStep={editStep}
      />
    );
  });

  return (
    <div>
      <div className="steps-list__header">
        <p>Дата (ДД.ММ.ГГ)</p>
        <p className="header__km">Пройдено км</p>
        <p>Действия</p>
      </div>
      <div className="steps-list">{stepsItems}</div>
    </div>
  );
};

StepsList.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      kilometers: PropTypes.number.isRequired,
    }).isRequired
  ),
  onDeleteStep: PropTypes.func.isRequired,
  onEditStep: PropTypes.func.isRequired,
};

export default StepsList;
