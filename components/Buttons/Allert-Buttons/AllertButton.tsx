import {ThemeContext} from "@/components/Context";
import { useContext } from "react";

const AllertButton = () => {
  const Mode = useContext(ThemeContext);
  const hendClickButton = () => {
    Mode?.setModeEditOrRemove("none");
  };
  return (
    <div>
      <button className="btn btn-sm" onClick={hendClickButton}>
        Turn off
      </button>
    </div>
  );
};
export default AllertButton;
