import IconButton from "@mui/material/IconButton";
import { convertDateToString } from "./utils";
import PropTypes from "prop-types";

const StepsItem = ({ step, onDeleteStep, onEditStep }) => {
  const { id, date, kilometers } = step;

  const deleteStep = () => {
    onDeleteStep(id);
  };

  const editStep = () => {
    onEditStep(id);
  };

  return (
    <div className="steps-item">
      <div>
        <span>{convertDateToString(date)}</span>
      </div>
      <div>
        <span>{kilometers}</span>
      </div>
      <div>
        <IconButton className="steps-item__btn" onClick={editStep}>
          ✎
        </IconButton>
        <IconButton className="steps-item__btn" onClick={deleteStep}>
          ✘
        </IconButton>
      </div>
    </div>
  );
};

StepsItem.propTypes = {
  step: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    kilometers: PropTypes.number.isRequired,
  }).isRequired,
  onDeleteStep: PropTypes.func.isRequired,
  onEditStep: PropTypes.func.isRequired,
};

export default StepsItem;
