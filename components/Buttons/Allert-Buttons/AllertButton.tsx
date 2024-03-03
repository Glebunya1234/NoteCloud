import { RemoveOrEdit } from "@/components/Context";
import { useContext } from "react";
import { FaPowerOff } from "react-icons/fa";

const AllertButton = () => {
  const Mode = useContext(RemoveOrEdit);
  const hendClickButton = () => {
    Mode?.setModeEditOrRemove("none");
  };
  return (
    <div>
      <button
        className="btn btn-sm btn-circle whitespace-nowrap overflow-hidden"
        onClick={hendClickButton}
      >
        <FaPowerOff />
      </button>
    </div>
  );
};
export default AllertButton;
