import {RemoveOrEdit} from "@/components/Context";
import { useContext } from "react";
import { HiOutlineTrash, HiPencil } from "react-icons/hi";

const ButtonEditBlock = () => {
  const theme = useContext(RemoveOrEdit);
  const hendClickDellButton = () => {
    // console.log(theme);
    // theme?.setTheme("hover:shadow-white/50");
    theme?.setModeEditOrRemove("edit");
    // console.log(theme);
  };
  return (
    <button
      className="flex justify-center btn-md btn-circle btn-outline btn-warning"
      onClick={hendClickDellButton}
    >
      <HiPencil style={{ fontSize: "20px" }} />
    </button>
  );
};
export default ButtonEditBlock;
