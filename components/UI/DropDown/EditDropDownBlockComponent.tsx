import ButtonAddBlock from "@/components/Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonAddBlock";
import {
  HiDotsVertical,
  HiOutlinePlus,
  HiOutlineTrash,
  HiPencil,
} from "react-icons/hi";
import { motion } from "framer-motion";
import { ButtonDellBlock, ButtonEditBlock } from "@/components";
import ButtonMoveBlock from "@/components/Buttons/DropDown-Buttons/EditDropDownBlock-Button/ButtonEditBlock copy";

const DropdownEditBlock = () => {
  return (
    <main className="ml-auto h-auto m-5 mr-9 mb-5 z-50 ">
      <div className="dropdown dropdown-top ">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-active btn-ghost  btn-circle  border-0 "
        >
          <HiDotsVertical style={{ fontSize: "20px" }} />
        </div>

        <motion.ul className="dropdown-content p-0 my-1 w-full menu z-50 shadow backdrop-blur-md bg-opacity-60 bg-black rounded-3xl ">
          <li className="mb-2">
            <ButtonAddBlock />
          </li>
          <li className="mb-2">
            <ButtonEditBlock />
          </li>
          <li className="mb-2">
            <ButtonDellBlock />
          </li>
          <li>
            <ButtonMoveBlock />
          </li>
        </motion.ul>
      </div>
    </main>
  );
};
export default DropdownEditBlock;
