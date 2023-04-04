export const sortStepsByDate = (steps) => {
  return steps.slice().sort((stepA, stepB) => {
    return +stepB.date - +stepA.date;
  });
};

export const convertDateToString = (date) => {
  return date.toISOString().split("T")[0].split("-").reverse().join(".");
};
