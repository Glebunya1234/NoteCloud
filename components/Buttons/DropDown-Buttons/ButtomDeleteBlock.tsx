import ThemeContext from "@/components/Context";
import { useContext } from "react";
import { HiOutlineTrash } from "react-icons/hi";

const ButtonDellBlock = () => {
    const theme = useContext(ThemeContext);
    const hendClickDellButton = () => {
        console.log(theme)
        theme?.setTheme("hover:shadow-red-500/50")
        console.log(theme)
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
