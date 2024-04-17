"use client";

import { useContext, useEffect, useState } from "react";
import { NavSpaceNames } from "@/components/Context";
import { readSpaceName } from "@/services/Firebase-Methods/Task-Management-methods";
import { SpaceNamesbyUser } from "@/types/Сollection-Todoes-interfaces/types";

const SpaceButtons = () => {
  const spaceName = useContext(NavSpaceNames);
  const [arraySP, setArraySP] = useState<SpaceNamesbyUser[][]>([]);

  useEffect(() => {
    const Func = async () => {
      try {
        const dataSpaceName = await readSpaceName("");

        const SpaceArrayMap: Record<string, SpaceNamesbyUser[]> = {};
        dataSpaceName.forEach((names, index) => {
          if (!SpaceArrayMap[names.spaceName]) {
            SpaceArrayMap[names.spaceName] = [];
          }

          SpaceArrayMap[names.spaceName].push({ spaceName: names.spaceName });
        });
        const spaceArray = Object.values(SpaceArrayMap);

        setArraySP(spaceArray);
      } catch (error) {
        console.error(error);
      }
    };
    Func();
  }, []);

  return (
    <ul className="w-full flex items-center ">
      {arraySP.map((SpaceNames, index) => (
        <li id={`${index}`} className="mx-2">
          {SpaceNames.filter(
            (name, idx, self) =>
              self.findIndex((n) => n.spaceName === name.spaceName) === idx
          ).map((name, inx) => (
            <button
              className="btn btn-md btn-ghost  w-full rounded-2xl  normal-case items-center"
              onClick={() => {
                console.log("names", name);
              }}
            >
              {name.spaceName}
            </button>
          ))}
        </li>
      ))}
    </ul>

    // <ul className="w-full flex items-center ">
    // <li className="mx-2">
    // <button
    // className="btn btn-md btn-ghost btn-active w-full rounded-2xl normal-case items-center"
    // onClick={() => {
    //   spaceName?.setActiveSpace("");
    //     }}
    //     >
    //     All
    //     </button>
    //     </li>

    //     <li className="mx-2">
    //   <button
    //   className="btn btn-md btn-ghost  w-full rounded-2xl  normal-case items-center"
    //   onClick={() => {}}
    //   >
    //   Work
    //   </button>
    //   </li>
    //   <li className="">
    //   <button className="btn btn-md btn-ghost  w-full  rounded-2xl normal-case items-center">
    //   Studies
    //   </button>
    //   </li>
    //   </ul>
  );
  // return (
  //   <ul className="w-full flex items-center ">
  //     <li className="mx-2">
  //       <button
  //         className="btn btn-md btn-ghost btn-active w-full rounded-2xl normal-case items-center"
  //         onClick={() => {
  //           spaceName?.setActiveSpace("");
  //         }}
  //       >
  //         All
  //       </button>
  //     </li>

  //     <li className="mx-2">
  //       <button
  //         className="btn btn-md btn-ghost  w-full rounded-2xl  normal-case items-center"
  //         onClick={() => {}}
  //       >
  //         Work
  //       </button>
  //     </li>
  //     <li className="">
  //       <button className="btn btn-md btn-ghost  w-full  rounded-2xl normal-case items-center">
  //         Studies
  //       </button>
  //     </li>
  //   </ul>
  // );
};
export default SpaceButtons;
