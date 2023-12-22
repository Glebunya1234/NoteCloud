import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonAddBlock";
import { HiDotsVertical } from "react-icons/hi";
import { motion } from "framer-motion";
import { ButtonDellBlock, ButtonEditBlock } from "@/components";
import PriorityButton from "@/components/Buttons/DropDown-Buttons/Priority-Button/PriorityButton";

const PriorityDropdown: React.FC<{
  id: string;
  blockName: string;
  titleTodos: string;
  
  onTaskAdded: () => void;
}> = ({ id, blockName, titleTodos, onTaskAdded }) => {

  return (
    <ul className="dropdown-content menu z-50 shadow bg-base-100 rounded-box w-32">
      <li className="mb-2">
        <PriorityButton priorityButtonName="High priority" id={id} blockName={blockName} titleTodos={titleTodos}  onTaskAdded={onTaskAdded}/>
      </li>
      <li className="mb-2">
        <PriorityButton priorityButtonName="medium priority" id={id} blockName={blockName} titleTodos={titleTodos} onTaskAdded={onTaskAdded}/>
      </li>
      <li>
        <PriorityButton priorityButtonName="low priority" id={id} blockName={blockName} titleTodos={titleTodos} onTaskAdded={onTaskAdded}/>
      </li>
    </ul>
  );
};
export default PriorityDropdown;
