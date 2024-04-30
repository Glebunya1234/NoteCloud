import { RemoveOrEdit } from "@/components/Context";
import { useContext } from "react";
import { BsArrowsMove } from "react-icons/bs";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";

const ButtonMoveBlock = () => {
  const theme = useContext(RemoveOrEdit);
  const hendClickDellButton = () => {
    theme?.setModeEditOrRemove("move");
  };
  return (
    <button
      className="flex justify-center btn-md btn-circle btn-outline btn-info"
      onClick={hendClickDellButton}
    >
      <BsArrowsMove style={{ fontSize: "20px" }} />
    </button>
  );
};
export default ButtonMoveBlock;
