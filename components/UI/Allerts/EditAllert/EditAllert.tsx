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

const AllertEdit = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%", width: 0 }}
      animate={{ opacity: 1, x: 0, width: "450px" }}
      role="alert"
      className="alert alert-warning mx-5 h-16 overflow-hidden"
    >
      <HiPencil style={{ fontSize: "20px" }} />
      <span className="font-medium flex items-center h-full whitespace-nowrap overflow-hidden">
        The EDITING mode is activated
      </span>
      <AllertButton />
    </motion.div>
  );
};
export default AllertEdit;
