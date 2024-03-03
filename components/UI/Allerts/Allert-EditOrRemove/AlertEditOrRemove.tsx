import { HiOutlineTrash, HiPencil } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

import AllertButton from "@/components/Buttons/Allert-Buttons/AllertButton";
import { BsArrowsMove } from "react-icons/bs";
type alertType = {
  Mode: "edit" | "remove" | "move";
};
const AllertEditOrRemove: React.FC<alertType> = ({ Mode }) => {
  return (
    <div className="w-full mx-5 max-w-[430px] min-w-0 md:w-[430px] ">
      <motion.div
        initial={{ opacity: 0, x: "-100%", width: 0 }}
        animate={{ opacity: 1, x: 0, width: "100%" }}
        role="alert"
        className={`alert h-16 flex justify-between overflow-hidden ${
          Mode === "edit"
            ? "alert-warning"
            : Mode === "move"
            ? "alert-info"
            : "alert-error"
        }`}
      >
        {Mode === "edit" && <HiPencil style={{ fontSize: "20px" }} />}
        {Mode === "move" && <BsArrowsMove style={{ fontSize: "20px" }} />}
        {Mode === "remove" && <HiOutlineTrash style={{ fontSize: "20px" }} />}

        <span className="text-xs md:text-myGreyForFont font-medium flex items-center h-full md:whitespace-nowrap md:overflow-hidden">
          {Mode === "edit"
            ? "The EDITING mode is activated"
            : Mode === "move"
            ? "The MOVING mode is activated"
            : "The REMOVE mode is activated"}
        </span>
        <AllertButton />
      </motion.div>
    </div>
  );
};
export default AllertEditOrRemove;
