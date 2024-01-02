import { ButtonCloseDrawer, ButtonMenuNavigations } from "@/components";
import { NavButMenu, NavButMenuType } from "@/components/Context";
import Logo2 from "@/public/logoNC.svg";
import Image from "next/image";
import { useContext, useState } from "react";
const DrawerSide = () => {
  const PageName = useContext(NavButMenu) 
  return (
    <div className="drawer-side ">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay "
      ></label>
      <main className="flex h-screen flex-col ">
        <ul className="menu p-1 w-80 min-h-full  text-base-content  bg-black bg-opacity-10 backdrop-blur-lg  rounded-r-3xl ">
          <header className="flex flex-row justify-between items-center p-4">
            <div className="flex items-center">
              <Image src={Logo2} width={30} height={30} alt="__" />
              <h1 className="text-center text-lg text-gray-300 font-Orbitron ml-2">
                NoteCloud
              </h1>
            </div>
            <ButtonCloseDrawer />
          </header>
          {/* Содержимое боковой панели здесь */}
          <ButtonMenuNavigations />
        </ul>
      </main>
    </div>
  );
};
export default DrawerSide;
