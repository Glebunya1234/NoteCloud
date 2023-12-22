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
    <ul className="dropdown-content menu z-50 shadow bg-base-100 rounded-box w-32">
      <li className="mb-2">
        <PriorityButton priorityButtonName="High priority" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="mb-2">
        <PriorityButton priorityButtonName="Medium priority" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li>
        <PriorityButton priorityButtonName="Low priority" id={id} blockName={blockName} titleTodos={titleTodos} />
      </li>
    </ul>
  );
};
export default PriorityDropdown;
