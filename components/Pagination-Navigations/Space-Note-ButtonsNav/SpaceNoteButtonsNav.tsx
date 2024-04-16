"use client";

import { useContext } from "react";
import { NavSpaceNames } from "@/components/Context";

const SpaceButtons = () => {
  const PageName = useContext(NavSpaceNames);
  
  return (
    <ul className="w-full flex items-center ">
      <li className="mx-2">
        <button
          className="btn btn-md btn-ghost btn-active w-full rounded-2xl normal-case items-center"
          onClick={() => {
            PageName?.setActiveSpace("");
          }}
        >
          All
        </button>
      </li>

      <li className="mx-2">
        <button className="btn btn-md btn-ghost  w-full rounded-2xl  normal-case items-center">
          Work
        </button>
      </li>
      <li className="">
        <button className="btn btn-md btn-ghost  w-full  rounded-2xl normal-case items-center">
          Studies
        </button>
      </li>
    </ul>
  );
};
export default SpaceButtons;
