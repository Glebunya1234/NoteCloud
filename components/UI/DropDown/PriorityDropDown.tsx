
import PriorityButton from "@/components/Buttons/DropDown-Buttons/Priority-Button/PriorityButton";

const PriorityDropdown: React.FC<{

  blockName: string;
  titleTodos: string;
}> = ({  blockName, titleTodos }) => {

  return (
    <ul className="flex flex-row h-6 mx-2 bg-transparent ">
      <li className="">
      <PriorityButton Priority="Highest"  blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="High"  blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="Medium"  blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="Low"  blockName={blockName} titleTodos={titleTodos} />
      </li>
      <li className="ml-1">
        <PriorityButton Priority="Lowest"  blockName={blockName} titleTodos={titleTodos} />
      </li>
    </ul>
  );
};
export default PriorityDropdown;
