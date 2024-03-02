"use client";
import { MdOutlineFolderOpen } from "react-icons/md";
import { FaHome, FaRegFolder, FaTasks, FaWhmcs } from "react-icons/fa";
import { LuFolder, LuSettings2 } from "react-icons/lu";
import { IoIosBrush } from "react-icons/io";
import styles from "@components/Pagination-Navigations/Button-Nav.module.css";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FiFolder } from "react-icons/fi";
import { openAModalWindowbyID } from "@/components/UI/Dialog/Modal-MethodOpen";
// const SpaceButtons: React.FC<{
//   onButtonClick: (buttonName: string) => void;
// }> = ({ onButtonClick }) => {

const SpaceButtons = () => {
  
  return (
    <ul className="w-full flex flex-row">
      <li className="mx-2">
        <button className="btn btn-ghost btn-active my-1 w-full rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center">
          All
        </button>
      </li>

      <li className="mx-2">
        <button className="btn btn-ghost my-1 w-full rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center">
          Work
        </button>
      </li>
      <li className="mx-2">
        <button className="btn btn-ghost my-1 w-full rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center">
          Studies
        </button>
      </li>
    </ul>
  );
};
export default SpaceButtons;
