"use client";

import { FaHome, FaTasks, FaWhmcs } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";
import { IoIosBrush } from "react-icons/io";
import styles from "@components/Pagination-Navigations/Button-Nav.module.css";
const ButtonSetNaw: React.FC<{
  onButtonClick: (buttonName: string) => void;
}> = ({ onButtonClick }) => {
  return (
    <ul className="w-full flex flex-row">
      <li className="mx-2">
        <button
          className="btn btn-ghost my-1 w-full rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center"
          onClick={() => onButtonClick("Account")}
        >
          <div className="flex w-full pl-0 items-center text-left">
            {/* <CgHomeAlt /> */}
            <LuSettings2 style={{ fontSize: "18px" }} />
            <span className="w-full pl-5 hidden sm:flex items-center ">Account</span>
          </div>
        </button>
      </li>

      <li className="mx-2">
        <button
          className="btn btn-ghost my-1 w-full rounded-lg md:rounded-2xl flex justify-between md:justify-start normal-case items-center"
          onClick={() => onButtonClick("Appearance")}
        >
          <div className="flex w-full pl-0 items-center text-left">
            <IoIosBrush style={{ fontSize: "18px" }} />
            <span className="w-full pl-5 hidden sm:flex items-center ">Appearance</span>
          </div>
        </button>
      </li>
    </ul>
  );
};
export default ButtonSetNaw;
