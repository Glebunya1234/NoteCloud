import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonAddBlock";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import {
  ButtonDellBlock,
  ButtonEditBlock,
  showSuccessToast,
} from "@/components";
import { use, useContext } from "react";
import { ChangeTeg, UpdateArray } from "@/components/Context";
import {
  FiChevronDown,
  FiChevronUp,
  FiChevronsDown,
  FiChevronsUp,
} from "react-icons/fi";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaAngleDown,
  FaAngleUp,
  FaEquals,
} from "react-icons/fa";

type priorityType = {
  Priority: string;
  //   Priority: "Highest priority" | "High priority" | "Medium priority" | "Low priority"  | "Lowest priority"
};

const PriorityBadge: React.FC<priorityType> = (priorityType) => {
  return (
    <div
      className="badge ml-2 badge-outline badge-xs h-[20px] text-xs"
      data-tip={priorityType.Priority}
    >
      {priorityType.Priority === "Highest priority" && <FaAngleDoubleUp />}
      {priorityType.Priority === "High priority" && <FaAngleUp />}
      {priorityType.Priority === "Medium priority" && <FaEquals />}
      {priorityType.Priority === "Low priority" && <FaAngleDown />}
      {priorityType.Priority === "Lowest priority" && <FaAngleDoubleDown />}
    </div>
  );
};
export default PriorityBadge;
