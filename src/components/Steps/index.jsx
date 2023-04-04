import StepsForm from "./StepsForm";
import StepsList from "./StepsList";
import { useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState([]);

  const addStep = (newStep) => {
    let foundDate = steps.find((step) => {
      return step.date.toString() === newStep.date.toString();
    });

    if (!foundDate) {
      setSteps([...steps, newStep]);
      return;
    }

    const newSteps = steps.map((step) => {
      if (step.id === foundDate.id) {
        return {
          ...step,
          kilometers: step.kilometers + newStep.kilometers,
        };
      }

      return step;
    });

    setSteps([...newSteps]);
  };

  const deleteStep = (stepId) => {
    const newSteps = steps.filter((step) => step.id !== stepId);
    setSteps([...newSteps]);
  };

  const editStep = (stepId) => {};

  return (
    <div className="steps-wrapper">
      <StepsForm onAddStep={addStep} />
      <StepsList
        steps={steps}
        onDeleteStep={deleteStep}
        onEditStep={editStep}
      />
    </div>
  );
};

export default Steps;
