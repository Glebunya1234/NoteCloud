import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonAddBlock";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import { ButtonDellBlock, ButtonEditBlock } from "@/components";
import PriorityButton from "@/components/Buttons/DropDown-Buttons/Priority-Button/PriorityButton";

const PriorityDropdown: React.FC<{
  id: string;
  blockName: string;
  titleTodos: string;
}> = ({ id, blockName, titleTodos }) => {

  return (
    <ul className="dropdown-content z-50 flex flex-row h-6 mx-2 bg-transparent rounded-box">
      <li className="">
        <PriorityButton Priority="Highest" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="High" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="Medium" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="Low" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="Lowest" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
    </ul>
  );
};
export default PriorityDropdown;
