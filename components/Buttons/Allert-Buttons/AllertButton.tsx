import {RemoveOrEdit} from "@/components/Context";
import { useContext } from "react";

const AllertButton = () => {
  const Mode = useContext(RemoveOrEdit);
  const hendClickButton = () => {
    Mode?.setModeEditOrRemove("none");
  };
  return (
    <div>
      <button className="btn btn-sm whitespace-nowrap overflow-hidden" onClick={hendClickButton}>
        Turn off
      </button>
    </div>
  );
};
export default AllertButton;
