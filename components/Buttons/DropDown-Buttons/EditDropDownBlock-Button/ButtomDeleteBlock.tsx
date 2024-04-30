import { RemoveOrEdit } from "@/components/Context";
import { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const ButtonDellBlock = () => {
  const theme = useContext(RemoveOrEdit);
  const hendClickDellButton = () => {
    // theme?.setTheme("hover:shadow-red-500/50")
    theme?.setModeEditOrRemove("remove");
  };
  return (
    <button
      className="flex justify-center btn-md btn-circle btn-outline btn-error"
      onClick={hendClickDellButton}
    >
      <HiOutlineTrash style={{ fontSize: "20px" }} />
    </button>
  );
};
export default ButtonDellBlock;
