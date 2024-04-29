"use client";

import { useContext, useEffect } from "react";
import {
  ArraySpaceNamesContex,
  NavButSet,
  NavSpaceNames,
} from "@/components/Context";

import { SpaceFunc } from "@/utils/SpaceFunc";

const SpaceButtons = () => {
  const spaceName = useContext(NavSpaceNames);
  const ContextArraSP = useContext(ArraySpaceNamesContex);
  const dataContext = useContext(NavButSet);

  useEffect(() => {
    const Func = async () => {
      try {
        ContextArraSP?.setArraySpaceNames(await SpaceFunc(dataContext?.id));
      } catch (error) {
        console.error(error);
      }
    };

    Func();
  }, []);

  return (
    <ul className="settingForNavSpace w-full flex snap-x snap-mandatory mt-4 pb-2  overflow-scroll overflow-y-hidden">
      {ContextArraSP?.ArraySpaceCont.map((SpaceNames, index) => (
        <li id={`${index}`} className="mx-2 snap-start">
          {SpaceNames.filter(
            (name, idx, self) =>
              self.findIndex((n) => n.spaceName === name.spaceName) === idx
          ).map((name, inx) => (
            <button
              className="btn btn-md btn-ghost border-[1px] border-bg-mydurkgrey justify-start  max-w-[150px] rounded-2xl  normal-case items-center"
              onClick={() => {
                spaceName?.setActiveSpace(name.spaceName);
              }}
            >
              <p className="max-w-[100px]  text-sm truncate overflow-hidden text-ellipsis">
                {name.spaceName}
              </p>
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
// const Func = async () => {
//   try {
//     const dataSpaceName = await readSpaceName("");

//     const SpaceArrayMap: Record<string, SpaceNamesbyUser[]> = {};
//     dataSpaceName.forEach((names, index) => {
//       if (!SpaceArrayMap[names.spaceName]) {
//         SpaceArrayMap[names.spaceName] = [];
//       }

//       SpaceArrayMap[names.spaceName].push({ spaceName: names.spaceName });
//     });
//     const spaceArray = Object.values(SpaceArrayMap);

//     setArraySP(spaceArray);
//   } catch (error) {
//     console.error(error);
//   }
// };

// Func();
