import StepsForm from "./StepsForm";
import StepsList from "./StepsList";
import { useState } from "react";

const Steps = () => {
  const [steps, setSteps] = useState([]);
  const [editingStep, setEditingStep] = useState(null);

  const addStep = (newStep) => {
    let foundDate = steps.find((step) => {
      return step.date.toString() === newStep.date.toString();
    });

    if (!!editingStep) setEditingStep(null);

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

  const editStep = (stepId) => {
    const foundStep = steps.find((step) => step.id === stepId);
    setEditingStep({ ...foundStep });

    deleteStep(stepId);
  };

  const list = !!steps.length ? (
    <StepsList steps={steps} onDeleteStep={deleteStep} onEditStep={editStep} />
  ) : null;

  return (
    <div className="steps-wrapper">
      <StepsForm editingStep={editingStep} onAddStep={addStep} />
      {list}
    </div>
  );
};

export default Steps;
