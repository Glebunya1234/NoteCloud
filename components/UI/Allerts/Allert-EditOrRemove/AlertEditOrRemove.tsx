import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/ButtonAddBlock";
import {
  HiDotsVertical,
  HiOutlinePlus,
  HiOutlineTrash,
  HiPencil,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { ButtonDellBlock, ButtonEditBlock } from "@/components";
import { useContext } from "react";
import ThemeContext from "@/components/Context";
import AllertButton from "@/components/Buttons/Allert-Buttons/AllertButton";
type alertType = {
  Mode: "edit" | "remove";
};
const AllertEditOrRemove: React.FC<alertType> = ({ Mode }) => {
  return (
    <div className="w-full mx-5 max-w-[430px] min-w-0 md:w-[430px] ">
      <motion.div
        initial={{ opacity: 0, x: "-100%", width: 0 }}
        animate={{ opacity: 1, x: 0, width: "100%" }}
        role="alert"
        className={`alert h-16 flex justify-between overflow-hidden ${
          Mode === "edit" ? "alert-warning" : "alert-error"
        }`}
      >
        <HiPencil style={{ fontSize: "20px" }} />
        <span className="font-medium flex items-center h-full md:whitespace-nowrap md:overflow-hidden">
          {Mode === "edit"
            ? "The EDITING mode is activated"
            : "The REMOVE mode is activated"}
        </span>
        <AllertButton />
      </motion.div>
    </div>
  );
};
export default AllertEditOrRemove;
