import "material-icons/iconfont/material-icons.css";
import IconButton from "@mui/material/IconButton";
import { convertDateToString } from "./utils";

const StepsItem = ({ step }) => {
  const { id, date, kilometers } = step;
  const editStep = () => {};

  const deleteStep = () => {};

  return (
    <tr>
      <td align="left">{convertDateToString(date)}</td>
      <td align="center">{kilometers}</td>
      <td align="right">
        <IconButton onClick={editStep}>
          <span className="material-icons">edit</span>
        </IconButton>
        <IconButton onClick={deleteStep}>
          <span className="material-icons">clear</span>
        </IconButton>
      </td>
    </tr>
  );
};

export default StepsItem;
