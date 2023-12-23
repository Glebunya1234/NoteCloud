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
import { FiChevronDown, FiChevronUp, FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleDown, FaAngleUp, FaEquals } from "react-icons/fa";

type priorityType ={
  Priority: "Highest" | "High" | "Medium" | "Low"  | "Lowest"
  id: string;
  blockName: string;
  titleTodos: string;
}

const PriorityButton: React.FC<priorityType> = (priorityType) => {
  const contextTeg = useContext(ChangeTeg) 
  const updateContext = useContext(UpdateArray);
  const handlClickPriority = () => {
    // UpdatePriority(priorityType.id, priorityType.blockName, priorityType.titleTodos, priorityType.Priority + " priority").then(() => {
    //   updateContext?.onTaskAdded();
    //   showSuccessToast("The Block has been created!");
      
    // });
    contextTeg?.setTegButName(priorityType.Priority + " priority")
  };

  return (
    <button className="flex badge h-full w-fit text-xs " onClick={handlClickPriority}>
      <span className="">
        {priorityType.Priority==="Highest" && <FaAngleDoubleUp />}
        {priorityType.Priority==="High" && <FaAngleUp />}
        {priorityType.Priority==="Medium" && <FaEquals />}
        {priorityType.Priority==="Low" && <FaAngleDown />}
        {priorityType.Priority==="Lowest" && <FaAngleDoubleDown />}
      </span >
    </button>
  );
};
export default PriorityButton;
{
  /* <button className="flex badge badge-xs w-full">medium priority</button> */
}

{
  /* <button className="flex badge badge-xs w-full">low priority</button> */
}
